import { CryptoFiatHub, CryptoDollar, Rewards, Store } from 'proof-contracts-interfaces'

/**
 * The following configuration registers contract addresses for different networks
 * The network object keys are standard numbers used to represent the different ethereum networks
 * 1: Ethereum mainnet
 * 3: Ropsten Testnet
 * 4: Rinkeby Testnet
 * 1000: Ganache
 * 8888: Private Geth Chain
 * The two last network IDs can be changed but these two numbers will be used accross the
 * Proof repositories.
 * It is preferable to use the addresses of deployed contracts in the case of the Mainnet and Rinkeby networks
 * For the Ganache and Private Geth chain "networks" (respectively 1000 and 8888), input the addresses deployed
 * on your own localhost.
 *
 * The default addresses for the network 8888 (Private Geth Chain) are the addresses of contracts already deployed
 * on our private geth chain repository
 *
 */
export const networks = {
  1: {
    CryptoFiatHub: '',
    CryptoDollar: '',
    Rewards: '',
    Store: ''
  },
  4: {
    CryptoFiatHub: CryptoFiatHub.networks[4].address,
    CryptoDollar: CryptoDollar.networks[4].address,
    Rewards: Rewards.networks[4].address,
    Store: Store.networks[4].address
  },
  8888: {
    CryptoFiatHub: CryptoFiatHub.networks[8888].address,
    CryptoDollar: CryptoDollar.networks[8888].address,
    Rewards: Rewards.networks[8888].address,
    Store: Store.networks[8888].address
  },
  1000: {
    CryptoFiatHub: '0xd957c03b9bf66aa775d6ca7b3e7efc37e6e5a1a5',
    CryptoDollar: '0x4ccdc1859e3d39ade6cdadb192d990c30ea54b53',
    Rewards: '0x9611aeee8174687a614c1e3fa22806a6410e2953',
    Store: '0xf09fd489faca8582d9a6ce5db2b692d5911eb0e5'
  }
}