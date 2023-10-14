'use strict';
// const cheerio = require('cheerio'); // Import 'cheerio' for parsing HTML.
import cheerio from 'cheerio';

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

  // get the repo names
  const repos = pinnedRepos.map((el) => $(el).find('a').attr('href').replace(/^\//, '')); // Remove leading '/' from href.

  // get the languages
  const lang = pinnedRepos.map((el) => {
    const lang = $(el).find('p').toArray().map((el) => $(el).text().trim().split(',').map((el) => el.trim()))
    return lang[1].map(str => str.split('\n')[0])
  })

  // get the descriptions
  const desc = pinnedRepos.map((el) => {
    const desc = $(el).find('p').toArray().map((el) => $(el).text().trim().split(',').map((el) => el.trim()))
    return desc[0]
  })

  // get the starts
  const stars = pinnedRepos.map((el) => {
    const starsElement = $(el).find('p').toArray().map((el) => $(el).text().split(',')[0].split(","))[1];
    const starNumbers = parseInt(starsElement.map(str => str.match(/\d+/)))
    return starNumbers ? starNumbers : 0
  })


  // Return the pinned repos with their details.
  const pinnedReposWithDescAndLang = repos.map((repo, i) => ({
    repo,
    description: desc[i].toString(),
    languages: lang[i].toString(),
    stars: stars[i]
  }));

  // console.log(pinnedReposWithDescAndLang);
  return pinnedReposWithDescAndLang;
};

