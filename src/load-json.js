'use strict';

/**
 * module dependencies
 */
var loadJsonFile = require( 'load-json-file' );

/**
 * @param {string} file
 * @param {Object} user_options
 *
 * @throws {Error}
 *
 * @returns {{}}
 */
function loadJson( file, user_options ) {
  var options = user_options || {};
  var result = {};

  try {
    if ( options.sync ) {
      result = loadJsonFile.sync( file );
    } else {
      result = loadJsonFile( file );
    }
  } catch ( err ) {
    if ( err.code !== 'ENOENT' ) {
      throw new Error( 'could not parse ' + file + ': ' + err.message );
    }
  }

  return result;
}

module.exports = loadJson;
