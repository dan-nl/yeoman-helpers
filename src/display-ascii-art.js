'use strict';

/**
 * log the ascii_art provided when display is not set to boolean false
 *
 * @example
 * yo your-generator
 * yo your-generator --no-ascii-art
 *
 * in your-generator, this.options.asciiArt, will be set to undefined and false respectively,
 * which can be passed into this function as the display boolean
 *
 * @param {Object} generator
 * @param {string} ascii_art
 * @param {boolean} [display]
 *
 * @returns {undefined}
 */
function displayAsciiArt( generator, ascii_art, display ) {
  if ( display === false ) {
    return;
  }

  console.log( ascii_art );
}

module.exports = displayAsciiArt;
