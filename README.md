# Shared Language
**Gabryell Corrêa** | Author

**[gabryellcorrea](https://github.com/gabryellcorrea)** | GitHub


owltechnology.brasil@gmail.com | Contact Email

This is a JavaScript ([ES6](https://www.w3schools.com/js/js_es6.asp)) folder that contains generic translations for your system.

# Summary

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Properties](#properties)


# Getting Started

    // SharedTranslator = function(current_language = "en-US")
    import SharedTranslator from "@/shared-lang"; // @ = root of your project
    
    // sharedLang = Object { ... }
    const sharedLang = SharedTranslator(current_language);


# Usage
sharedLang.*property*

# Properties

**Labels:**
*Used in input labels*

const {

- **email**,
- **password**

} = sharedLang;

#

**Greetings:**
*Used to make some nice phrases*

const {

- **hi**,
- **hello**,
- **good_morning**,
- **good_afternoon**,
- **good_evening**,
- **good_night**

} = sharedLang;

# Available Languages
- en-US (Default)
- pt-BR
- nl
- es

#

Made with love by @gabryellcorrea <3
