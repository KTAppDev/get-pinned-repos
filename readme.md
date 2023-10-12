# get-pinned-repos 
Get the pinned repos for a github username.
No token required.
<br>
getPinnedRepos_v2 is the recommended version. getPinnedRepos is the old version and will be removed soon.
<br>
Feel free to submit feature requests or issues on the github page.

## Installation

```bash
npm install --save @kentaylorappdev/get-pinned-repos
```
includes typescript support

## Usage


``` javascript
import { getPinnedRepos_v2 } from '@kentaylorappdev/get-pinned-repos'
getPinnedRepos_v2('ktappdev')
  .then(console.log)
  ```
``` javascript
[
  {
    repo: 'KTAppDev/notes-app-frontend-public',
    description: 'Secret Note Now you can add or replace an image with every note! Notes and Images stored on "secretnote" can be public or private,depending on the title. Simple titles lead to highly visible notes…',
    languages: 'Vue'
  },
  {
    repo: 'KTAppDev/tm-nextjs',
    description: 'Meet Tools Manager: Your NextJS sidekick for keeping all your favorite tools in check. Organize,access,conquer – all with a dash of NextJS magic.',
    languages: 'TypeScript'
  },
... ...
Array of objects with Repo, Description, and Languages
  ]
```

### Old Version
```javascript
import { getPinnedRepos } from '@kentaylorappdev/get-pinned-repos'

getPinnedRepos('ktappdev')
  .then(console.log)
  ```
``` javascript
[ "KTAppDev/notes-app-frontend-public", "KTAppDev/tm-nextjs",
  "KTAppDev/notes-express-api-public", "KTAppDev/Switch-Power-profile",
  "KTAppDev/bad-words-thing", "KTAppDev/review-it-nextjs-v7"
]
This remains in here for anyone who started using the tool from day 1
```

## License

MIT


# get-pinned-repos
