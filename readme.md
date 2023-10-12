# get-pinned-repos 
Get the pinned repos for a github username.
No token required.

## Installation

```bash
npm install --save @kentaylorappdev/get-pinned-repos
```

## Usage

```javascript
const ghPinnedRepos = require('@kentaylorappdev/get-pinned-repos')

ghPinnedRepos('ktappdev')
  .then(console.log)

[ "KTAppDev/notes-app-frontend-public", "KTAppDev/tm-nextjs",
  "KTAppDev/notes-express-api-public", "KTAppDev/Switch-Power-profile",
  "KTAppDev/bad-words-thing", "KTAppDev/review-it-nextjs-v7"
]
```

## License

MIT


# get-pinned-repos
