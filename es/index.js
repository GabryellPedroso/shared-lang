import greetings from './modules/greetings'; // { ... }
import labels from './modules/labels'; // { ... }
import validations from './modules/validations'; // { ... }

const es = {
  ...greetings,
  ...labels,
  ...validations
};

export default es;