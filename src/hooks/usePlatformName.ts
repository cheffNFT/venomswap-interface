import { Blockchain } from '@venomswap/sdk'
import useBlockchain from './useBlockchain'

export default function usePlatformName(): string {
  const blockchain = useBlockchain()
  switch (blockchain) {
    case Blockchain.BINANCE_SMART_CHAIN:
      return 'CheffSwap'
    case Blockchain.HARMONY:
      return 'CheffSwap'
    case Blockchain.ETHEREUM:
      return 'CheffSwap'
    default:
      return 'CheffSwap'
  }
}
