# gh-pinned-repos [![Build Status](https://secure.travis-ci.org/johnotander/gh-pinned-repos.svg?branch=master)](https://travis-ci.org/johnotander/gh-pinned-repos) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Get the pinned repos for a github username.

## Installation

```bash
npm install --save @ktad/get-pinned-repos
```

## Usage

```javascript
const ghPinnedRepos = require('@ktad/get-pinned-repos')

ghPinnedRepos('ktappdev')
  .then(console.log) // [...]


[ "KTAppDev/notes-app-frontend-public", "KTAppDev/tm-nextjs",
  "KTAppDev/notes-express-api-public", "KTAppDev/Switch-Power-profile",
  "KTAppDev/bad-words-thing", "KTAppDev/review-it-nextjs-v7"
]
```

## License

MIT


# get-pinned-repos
