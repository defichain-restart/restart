import { MetaMaskChainInterface } from "../hooks/metamask.hook";

export const main: MetaMaskChainInterface = {
  chainId: 1131,
  chainName: "MetaChain",
  nativeCurrency: {
    name: "DFI",
    symbol: "DFI",
    decimals: 18,
  },
  rpcUrls: ["https://dmc.mydefichain.com/testnet"],
  blockExplorerUrls: ["https://testnet-dmc.mydefichain.com:8441/"],
};
