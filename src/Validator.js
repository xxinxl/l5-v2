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
    return {
      shape: (fields) => new ObjectValidator(fields),
    };
  }
}

export default Validator;
