# Shared Language
**Gabryell Corrêa** | Author

**[theSpiderDev](https://github.com/theSpiderDev "Gabryell's GitHub")** | GitHub


gabryellcorrea.dev@gmail.com | Contact Email

This is a JavaScript ([ES6](https://www.w3schools.com/js/js_es6.asp)) folder that contains generic translations for your system.

# Summary

- [Getting Started](#getting-started)
- [Modules](#modules)
- [Available Languages](#available-languages)


# Getting Started

Importing
```javascript
import Translator from "your_project_root_folder/shared-lang";
```

Using default library
```javascript
const sharedLang = new Translator(); // Default en-US object
```

Choosing language library
```javascript
const sharedLang = new Translator('pt-BR'); // Default pt-BR object
```

Using custom libraries
```javascript
import en from 'your_own_en_file'; // { ... }
import es from 'your_own_es_file'; // { ... }
import nl from 'your_own_nl_file'; // { ... }
import pt from 'your_own_pt_file'; // { ... }

const sharedLang = new Translator('pt-BR', { en, es, nl, pt }); // your pt-BR object
```

# Modules

## Greetings:
*Used to make some nice phrases*

```javascript
const {
  hi,
  hello,
  good_morning,
  good_afternoon,
  good_evening,
  good_night
} = sharedLang.greetings;
```

## Labels:
*Used in input labels*

```javascript
const {
  email,
  password,
  send,
  sign_up,
  to_filter
} = sharedLang.labels;
```

## Placeholders
*Used in input's placeholders*

```javascript
const {
  email,
  password
} = sharedLang.placeholders;
```

## Validations:
*Used in input's validations or messages to the client*

```javascript
const {
  empty_email,
  empty_password,
  wrong_email,
  wrong_password,
  wrong_credentials
} = sharedLang.validations;
```

# Available Languages
- en-US (Default)
- pt-BR
- nl
- es

#

Made with love by @theSpiderDev <3
