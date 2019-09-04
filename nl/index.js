import greetings from './modules/greetings'; // { ... }
import labels from './modules/labels'; // { ... }
import validations from './modules/validations'; // { ... }

const nl = {
  ...greetings,
  ...labels,
  ...validations
};

export default nl;