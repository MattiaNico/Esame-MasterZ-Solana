import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log("pubblic key:", keypair.publicKey.toBase58());
console.log("private key:", keypair.secretKey.toString());