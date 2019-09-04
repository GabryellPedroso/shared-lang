/**
 * Gives a class to menage language.
 *
 * @link   https://github.com/gabryellcorrea/shared-lang
 * @file   This file exports Translator class.
 * @author Gabryell Corrêa.
 */

import en from './en' // { ... }
import es from './es' // { ... }
import nl from './nl' // { ... }
import pt from './pt' // { ... }

/**
 * @exports Translator
 */
export default class Translator {

  /**
   * Menage system translation.
   * 
   * Receive the language and the libraries object, return the language library.
   * 
   * @access public
   * 
   * @class
   * @augments Translator
   * 
   * @param { string } [lang = 'en-US']
   * @param { object } [libraries = undefined]
   * 
   * @return { object }
   */
  constructor(lang = 'en-US', libraries = undefined) {

    lang = language_preference.split('-'); // ['en', 'US']
    lang = lang[0]; // en
    
    switch (lang) {
      case 'en': return libraries.en || en; // { ... }
      case 'es': return libraries.es || es; // { ... }
      case 'nl': return libraries.nl || nl; // { ... }
      case 'pt': return libraries.pt || pt; // { ... }
    
      default: return libraries.en || en; // { ... }
    }
  }
}