import RootLayout from '../app/layout';
import { SuccessPage } from '@/devlink/SuccessPage';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import * as Api from '../lib/api.js';

export default function MintAnNftPage() {
    const router = useRouter();
    const [showOverlay, setShowOverlay] = useState(false);
    const [nftClaimStarted, setNftClaimStarted] = useState(false);
    const [sessionToken, setSessionToken] = useState('');
    const [uid, setUid] = useState('');

    useEffect(() => {
        const initiateNftClaimProcess = async () => {
            if (nftClaimStarted) return; // Prevents the process from running again
            setNftClaimStarted(true); // Set flag to indicate process has started

            setShowOverlay(true);
            const sessionToken = new URLSearchParams(window.location.search).get('st') || '';
            setSessionToken(sessionToken)

            if (!sessionToken) {
                console.error("Session token is missing in the URL");
                setShowOverlay(false);
                return;
            }

            try {
                const redeemTokenPayload = { session1_token: sessionToken }; // Update key to match backend
                const redeemResponse = await Api.redeemSessionToken(redeemTokenPayload);
                
                if (redeemResponse.error) {
                    throw new Error(redeemResponse.error);
                }

                const userUid = redeemResponse.data.user1_uid;
                setUid(userUid)
                const claimPayload = { user1_uid: userUid, session1_token: sessionToken }; // Update key to match backend
                let claimResponse;

                for (let attempts = 0; attempts < 3; attempts++) {
                    claimResponse = await Api.handleFreeNftClaim(claimPayload);
                    if (!claimResponse.error) break;
                }

                if (claimResponse.error) {
                    throw new Error(claimResponse.error);
                }
            } catch (error: any) {
                console.error("Error in NFT claim process:", error.message);
            } finally {
                setShowOverlay(false);
            }
        };

        initiateNftClaimProcess();
    }, [router, nftClaimStarted]);

    const handleWalletButtonClick = (event: any) => {
        event.preventDefault();
        router.push('https://wallet.dropchain.network/'); // normally we route the end user to the DropChain Wallet
        // router.push(`/poap-wallet?st=${sessionToken}&uid=${uid}`); // we can change this to the poap-wallet if we wanted to show off our own version of the wallet/inventory
    };

    return (
        <RootLayout>
            {showOverlay && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#121317', zIndex: 9999 }}>
                    <img src="/Comp_1_2.gif" alt="Loading..." style={{ position: 'absolute', width: '400px', height: 'auto', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                </div>
            )}
            <SuccessPage 
                openWalletButtonRuntimeProps={{ onClick: handleWalletButtonClick }}
            />
        </RootLayout>
    );
}
