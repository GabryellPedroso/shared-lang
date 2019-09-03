import greetings from './greetings' // { ... }
import labels from './labels' // { ... }
import validations from './validations' // { ... }

export default {
  ...greetings,
  ...labels,
  ...validations
}