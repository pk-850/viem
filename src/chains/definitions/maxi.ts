import { defineChain } from '../../utils/chain/defineChain.js'

export const maxi = /*#__PURE__*/ defineChain({
  id: 899,
  name: 'MAXI Chain Mainnet',
  nativeCurrency: { name: 'MAXI GAS', symbol: 'MGAS', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.maxi.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'MAXI Explorer',
      url: 'https://mainnet.maxi.network',
    },
  },
  testnet: false,
})
