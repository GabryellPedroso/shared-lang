import greetings from './modules/greetings'; // { ... }
import labels from './modules/labels'; // { ... }
import validations from './modules/validations'; // { ... }

const en = {
  ...greetings,
  ...labels,
  ...validations
};

export default en;