/**
 * @typedef {Object} Links
 * @prop {string} github Your github repository
 */

/**
 * @typedef {Object} MetaConfig
 * @prop {string} title Your website title
 * @prop {string} description Your website description
 * @prop {string} author Maybe your name
 * @prop {string} siteUrl Your website URL
 * @prop {string} lang Your website Language
 * @prop {string} utterances Github repository to store comments
 * @prop {Links} links
 * @prop {string} favicon Favicon Path
 */

/** @type {MetaConfig} */
const metaConfig = {
  title: "Taishi Walden",
  description: `Hi, I'm Taishi! I am passionate about project management, digital product design, and software development.`,
  author: "Taishi Walden",
  siteUrl: "https://taishiwalden.com/",
  lang: "en",
  utterances: "sungik-choi/gatsby-starter-apple-comment",
  links: {
    github: "https://github.com/taishiwalden",
    linkedin: "https://www.linkedin.com/in/taishiwalden/",
  },
  favicon: "src/images/TW-favicon.png",
}

// eslint-disable-next-line no-undef
module.exports = metaConfig
