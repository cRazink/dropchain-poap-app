import RootLayout from '../app/layout';
import { ClaimNftWrapper } from '@/devlink/ClaimNftWrapper';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as Api from '../lib/api.js';

export default function PoapWalletPage() {
    const router = useRouter();
    
    useEffect(() => {
        // Declare fetchAssets outside of the conditional block but within useEffect
        const fetchAssets = async (sessionToken: any, uid: any) => {
            try {
                const requestBody = { user1_uid: uid, session1_token: sessionToken };

                // Hit the grabUserPoapAssetsFull endpoint
                const responseFull = await Api.grabUserPoapAssetsFull(requestBody);
                console.log('grabUserPoapAssetsFull response:', responseFull);

                // Hit the grabUserPoapAssets endpoint
                const response = await Api.grabUserPoapAssets(requestBody);
                console.log('grabUserPoapAssets response:', response);
            } catch (error) {
                console.error('Error fetching POAP assets:', error);
            }
        };

        // Now, check if both st and uid query parameters exist before calling fetchAssets
        const sessionToken = router.query.st;
        const uid = router.query.uid;

        if (sessionToken && uid) {
            fetchAssets(sessionToken, uid);
        }
    }, [router.query.st, router.query.uid]); // Depend on st and uid query params




  return ( // 
    <RootLayout>
      <ClaimNftWrapper 
    //   claimNftButtonRuntimeProps={{ onClick: handleClaimButtonClick }}
      />
    </RootLayout>
  );
}

