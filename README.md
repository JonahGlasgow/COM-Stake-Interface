# $COM Staking Interface v1.0.0 (UI Forked From Uniswap) 

[![Lint](https://github.com/Uniswap/uniswap-interface/workflows/Lint/badge.svg)](https://github.com/Uniswap/uniswap-interface/actions?query=workflow%3ALint)
[![Tests](https://github.com/Uniswap/uniswap-interface/workflows/Tests/badge.svg)](https://github.com/Uniswap/uniswap-interface/actions?query=workflow%3ATests)
[![Styled With Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

An open source interface for $COM staking pools.

- Website: [https://www.$COM.finance/](https://www.$COM.finance/)
- Interface: [TBA]()
- Docs: [TBA]()
- Twitter: [@com_token](https://twitter.com/com_token)
- Reddit: [TBA]()
- Email: [TBA]()
- Telegram: [Community Token Chat](https://t.me/com_token)
- Whitepaper: [TBA]()

## Accessing the $COM Interface

To access the $COM Interface, use an IPFS gateway link from the
[latest release](https://github.com/Uniswap/uniswap-interface/releases/latest), 
or visit [$COM.finance](https://www.$COM.finance/).

## Listing a token

Please see the
[@uniswap/default-token-list](https://github.com/uniswap/default-token-list) 
repository.

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

Note that the interface only works on testnets where 
[multicall](https://github.com/makerdao/multicall) are deployed.
The interface will not work on other networks.

## Contributions

**Please open all pull requests against the `master` branch.** 
CI checks will run against all PRs.

