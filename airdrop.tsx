import { PublicKey, Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
export const airdrop = async (address: string, amount: number) => {
  const publicKey = new PublicKey(address);
  const conn = new Connection('devnet', 'confirmed');
  const signature = await conn.requestAirdrop(
    publicKey,
    amount * LAMPORTS_PER_SOL
  );
  console.log('signature - ', signature);
  await conn.confirmTransaction(signature);
};

airdrop('DJDqurqEufUxUhdtXgcRydDQ8VamZHpvMPioDt5nAdEW', 5);
