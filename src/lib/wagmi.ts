import { createConfig, http } from "wagmi";
import { base } from "viem/chains";
import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";


// Get projectId from environment variables
const projectId = import.meta.env.VITE_REOWN_PROJECT_ID;
const BASE_RPC_URL = import.meta.env.VITE_BASE_RPC_URL;

// Create wagmi adapter
const wagmiAdapter = new WagmiAdapter({
  networks: [base],
  projectId,
});

// Create wagmi config
export const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(
  BASE_RPC_URL
    ),
  },
});

// Create the modal
createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [base],
  defaultNetwork: base,
  metadata: {
    name: "FundMe",
    description: "Decentralized Funding Platform",
    url: typeof window !== "undefined" ? window.location.origin : "",
    icons: ["https://avatars.githubusercontent.com/u/179229932"],
  },
  features: {
    analytics: false,
  },
});
