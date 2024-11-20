import EmailValidator from './EmailSchema.js';
import AgeValidator from './AgeSchema.js';
import ObjectValidator from './ObjectSchema.js';

class Validator {
  email() {
    return new EmailValidator();
  }

  age() {
    return new AgeValidator();
  }

  user() {
    return new ObjectValidator();
  }
}

export default Validator;
