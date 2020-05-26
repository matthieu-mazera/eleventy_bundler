// require('dotenv').config() // -- best done in Netlify

import '../css/index.css'

import 'vanilla-lazyload'

import 'prismjs'

import 'instant.page' // until there's a webpack-friendly version of flying-pages

var req = require.context("../../images", true, /\.(jpe?g|png|gif)$/)
req.keys().forEach(function(key){
  req(key)
})

// --- start, twitterMeta ---

/* detect dark or light mode and handle Twitter embeds accordingly */
var metaTwitterTheme = document.createElement('meta');
var metaTwitterLink = document.createElement('meta');

function catchDark(e) {
  if (e.matches) {
  // dark mode
    metaTwitterTheme.setAttribute('name', 'twitter:widgets:theme');
    metaTwitterTheme.setAttribute('content', 'dark');
    metaTwitterLink.setAttribute('name', 'twitter:widgets:link-color');
    metaTwitterLink.setAttribute('content', '#00bbff');
  } else {
    // light mode
    metaTwitterTheme.setAttribute('name', 'twitter:widgets:theme');
    metaTwitterTheme.setAttribute('content', 'light');
    metaTwitterLink.setAttribute('name', 'twitter:widgets:link-color');
    metaTwitterLink.setAttribute('content', '#0033ff');
  }
}

document.getElementsByTagName('head')[0].appendChild(metaTwitterTheme);
document.getElementsByTagName('head')[0].appendChild(metaTwitterLink);

var e = window.matchMedia('(prefers-color-scheme: dark)');
catchDark(e);
e.addListener(catchDark);
// --- end, twitterMeta ---
