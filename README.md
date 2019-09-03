# Shared Language
**Gabryell Corrêa** | Author

**[gabryellcorrea](https://github.com/gabryellcorrea "Gabryell's GitHub")** | GitHub


owltechnology.brasil@gmail.com | Contact Email

This is a JavaScript ([ES6](https://www.w3schools.com/js/js_es6.asp)) folder that contains generic translations for your system.

# Summary

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Properties](#properties)


# Getting Started

```javascript
/**
 * Importing Lang Class
 * 
 * @param { en: { ... }, es: { ... }, nl: { ... }, pt: { ... } } libraries
 *  You can pass your libraries if you want (Default is its own libraries)
 * 
 * @param { 'en-US' || 'pt-BR' || 'es' || 'nl' } language_preference
 *  Default is 'en-US'
 *
 * constructor(libraries = { en, es, nl, pt }, language_preference = 'en-US')
 */
import Lang from "project_root_folder/shared-lang";
```

```javascript
import en from 'your_own_en_file'; // { ... }
import es from 'your_own_es_file'; // { ... }
import nl from 'your_own_nl_file'; // { ... }
import pt from 'your_own_pt_file'; // { ... }

const sharedLang = new Lang({ en, es, nl, pt }, 'pt-BR');

// or

const sharedLang = new Lang(); // en-US Object { ... }
```


# Usage
sharedLang.*property*

# Properties

## Labels:
*Used in input labels*

const {

- **email**,
- **password**
- **send**
- **sign_up**

} = sharedLang;

#

## Greetings:
*Used to make some nice phrases*

const {

- **hi**,
- **hello**,
- **good_morning**,
- **good_afternoon**,
- **good_evening**,
- **good_night**

} = sharedLang;

#

## Validations:
*Used on input's validations or messages to the client*

const {

- **empty_email**,
- **empty_password**

} = sharedLang;

# Available Languages
- en-US (Default)
- pt-BR
- nl
- es

#

Made with love by @gabryellcorrea <3
