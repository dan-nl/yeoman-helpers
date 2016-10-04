'use strict';

/**
 * module dependencies
 */
var displayAsciiArt = require( './display-ascii-art' );

/**
 * @param {Object} generator
 *
 * @param {Object} options
 * @param {Object} options.ascii_art
 * @param {string} options.ascii_art.art
 * @param {Object} options.intro_text
 *
 * @returns {undefined}
 */
function displayGeneratorIntro( generator, options ) {
  displayAsciiArt( generator, options.ascii_art.art, options.ascii_art.display );
  generator.log( options.intro_text );
}

module.exports = displayGeneratorIntro;
