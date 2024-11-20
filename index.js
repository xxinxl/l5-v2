import EmailValidator from './src/EmailSchema.js';
import AgeValidator from './src/AgeSchema.js';
import ObjectValidator from './src/ObjectSchema.js';

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
