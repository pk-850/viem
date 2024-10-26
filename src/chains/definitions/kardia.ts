import { defineChain } from '../../utils/chain/defineChain.js'

export const kardia = /*#__PURE__*/ defineChain({
  id: 24,
  name: 'Kardia Mainnet',
  nativeCurrency: { name: 'KAI', symbol: 'KAI', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.kardiachain.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Kardia Explorer',
      url: 'https://explorer.kardiachain.io/',
    },
  },
  testnet: false,
})
