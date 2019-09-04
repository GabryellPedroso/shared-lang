# Shared Language
**Gabryell Corrêa** | Author

**[gabryellcorrea](https://github.com/gabryellcorrea "Gabryell's GitHub")** | GitHub


owltechnology.brasil@gmail.com | Contact Email

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

## Labels:
*Used in input labels*

const {

- **email**,
- **password**
- **send**
- **sign_up**

} = sharedLang;

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
