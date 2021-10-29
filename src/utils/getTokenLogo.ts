import { Blockchain } from '@venomswap/sdk'
import { BLOCKCHAIN } from '../connectors'
import cheffTokenLogo from '../assets/images/cheff-token-logo.png'

export default function getTokenLogo(): string {
  switch (BLOCKCHAIN) {
    case Blockchain.BINANCE_SMART_CHAIN:
      return cheffTokenLogo
    case Blockchain.HARMONY:
      return cheffTokenLogo
    default:
      return cheffTokenLogo
  }
}
