import { defineChain } from '../../utils/chain/defineChain.js'
import { chainConfig } from '../opStack/chainConfig.js'

export const zoraSepolia = /*#__PURE__*/ defineChain({
  ...chainConfig,
  id: 999999999,
  name: 'Zora Sepolia',
  network: 'zora-sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'Zora Sepolia',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://sepolia.rpc.zora.energy'],
      webSocket: ['wss://sepolia.rpc.zora.energy'],
    },
    public: {
      http: ['https://sepolia.rpc.zora.energy'],
      webSocket: ['wss://sepolia.rpc.zora.energy'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Zora Sepolia Explorer',
      url: 'https://sepolia.explorer.zora.energy/',
    },
  },
  contracts: {
    ...chainConfig.contracts,
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 83160,
    },
  },
  testnet: true,
})