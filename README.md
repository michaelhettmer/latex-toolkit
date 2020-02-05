# Latex Toolkit

[![license](https://img.shields.io/npm/l/latex-toolkit)](https://github.com/MichaelHettmer/latex-toolkit/blob/master/LICENSE.md)
[![circleci](https://circleci.com/gh/MichaelHettmer/latex-toolkit.svg?style=shield)](https://circleci.com/gh/MichaelHettmer/latex-toolkit)
[![codecov](https://codecov.io/gh/MichaelHettmer/latex-toolkit/branch/master/graph/badge.svg)](https://codecov.io/gh/MichaelHettmer/latex-toolkit)
[![npm version](https://img.shields.io/npm/v/latex-toolkit)](https://www.npmjs.com/package/latex-toolkit)
[![npm downloads](https://img.shields.io/npm/dw/latex-toolkit)](https://www.npmjs.com/package/latex-toolkit)
[![pull requests](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/MichaelHettmer/latex-toolkit/compare)
[![discord](https://img.shields.io/discord/620938362379042837)](https://discord.gg/R2jNASR)
[![twitter](https://img.shields.io/twitter/follow/MichaelHettmer.svg?label=Follow%20@MichaelHettmer)](https://twitter.com/intent/follow?screen_name=MichaelHettmer)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Getting started

```sh
npx latex-toolkit [cmd] [options]
```

## IDE Konfiguration

### Visual Studio Code

https://code.visualstudio.com/

#### Plugins

https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native

https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens

https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest

https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

https://marketplace.visualstudio.com/items?itemName=Daosro.stylelint

```bash
ext install msjsdiag.vscode-react-native eamodio.gitlens orta.vscode-jest esbenp.prettier-vscode dbaeumer.vscode-eslint Daosro.stylelint
```

#### Konfigurationsdatei '.vscode/settings.json'

```json
{
    "editor.rulers": [120],
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "typescript.tsdk": "node_modules/typescript/lib",
    "jest.showCoverageOnLoad": true,
    "eslint.alwaysShowStatus": true,
    "eslint.enable": true,
    "css.validate": false,
    "less.validate": false,
    "scss.validate": false
}
```