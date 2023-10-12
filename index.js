'use strict';
const cheerio = require('cheerio'); // Import 'cheerio' for parsing HTML.

// Custom username validation function
function isValidUsername(username) {
  // Replace this with your custom validation logic
  return typeof username === 'string' && username.trim() !== '';
}

export async function getPinnedRepos(username) {
  // Validate the input.
  if (!isValidUsername(username)) {
    throw new TypeError('get-pinned-repos expected a valid username');
  }

  // Fetch the user's GitHub page and parse it with Cheerio.
  const response = await fetch(`https://github.com/${username}`);

  // Check the response status code.
  if (response.status !== 200) {
    throw new Error(`Failed to fetch user's GitHub page: ${response.status}`);
  }

  // Parse the HTML response.
  const $ = cheerio.load(await response.text());

  // Select and extract href attributes of pinned repository links.
  return $('.js-pinned-item-list-item.public')
    .toArray()
    .map((el) => $(el).find('a').attr('href').replace(/^\//, '')); // Remove leading '/' from href.
};


export async function getPinnedRepos_v2(username) {
  // Validate the input.
  if (!isValidUsername(username)) {
    throw new TypeError('get-pinned-repos expected a valid username');
  }

  // Fetch the user's GitHub page and parse it with Cheerio.
  const response = await fetch(`https://github.com/${username}`);

  // Check the response status code.
  if (response.status !== 200) {
    throw new Error(`Failed to fetch user's GitHub page: ${response.status}`);
  }

  // Parse the HTML response.
  const $ = cheerio.load(await response.text());
  // console.log($.html());

  // Select and extract href attributes of pinned repository links.
  const pinnedRepos = $('.js-pinned-item-list-item.public')
    .toArray()
    .map((el) => $(el).find('a').attr('href').replace(/^\//, '')); // Remove leading '/' from href.

  const lang = $('.js-pinned-item-list-item.public')
    .toArray()
    .map((el) => {
      const desAndLang = $(el).find('p').toArray().map((el) => $(el).text().trim().split(',').map((el) => el.trim()))
      return desAndLang[1].map(str => str.split('\n')[0])
    })

  const desc = $('.js-pinned-item-list-item.public')
    .toArray()
    .map((el) => {
      const desAndLang = $(el).find('p').toArray().map((el) => $(el).text().trim().split(',').map((el) => el.trim()))
      return desAndLang[0]
    })

  // Return the pinned repos with their descriptions.
  const pinnedReposWithDescAndLang = pinnedRepos.map((repo, i) => ({
    repo,
    description: desc[i].toString(),
    languages: lang[i].toString()
  }));

  // console.log(pinnedReposWithDescAndLang);
  return pinnedReposWithDescAndLang;
};

