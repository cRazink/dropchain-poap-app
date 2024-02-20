import RootLayout from '../app/layout';
import { ClaimNftWrapper } from '@/devlink/ClaimNftWrapper';
import { useRouter } from 'next/router';

export default function MintAnNftPage() {
    const router = useRouter();
    
    const handleClaimButtonClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        router.push('https://wallet.dropchain.network/login/{your DropChain app ID here}');} // modify this with your own DropChain SSO URL. You find this by going to console.dropchain.network -> API Dashboard -> View Your SSO Page

  return ( // 
    <RootLayout>
      <ClaimNftWrapper 
      claimNftButtonRuntimeProps={{ onClick: handleClaimButtonClick }}
      />
    </RootLayout>
  );
}

