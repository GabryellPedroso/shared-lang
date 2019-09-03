/**
 * Shared Lang
 * 
 * here will be generic translations of
 * the system (Shared translations)
 * 
 * @author Spider
 * @creation 02/09/2019 - 02/Set/2019 | 4:26 PM
 * @update 02/09/2019 - 02/Set/2019 | 4:26 PM
 */

import en from './en' // { ... }
import pt from './pt' // { ... }
import es from './es' // { ... }

export default (language_preference = 'en-US') => {
  let lang = language_preference.split('-') // ['en', 'US']
      lang = lang[0] // en
  
  switch (lang) {
    case 'en': return en // { ... }
    case 'pt': return pt // { ... }
    case 'es': return es // { ... }
  
    default: return en // { ... }
  }
}