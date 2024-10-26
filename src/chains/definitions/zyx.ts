import { defineChain } from '../../utils/chain/defineChain.js'

export const zyx = /*#__PURE__*/ defineChain({
  id: 55,
  name: 'Zyx Mainnet',
  nativeCurrency: { name: 'ZYX', symbol: 'ZYX', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc-1.zyx.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Zyx Scan',
      url: 'https://zyxscan.com',
    },
  },
  testnet: false,
})
