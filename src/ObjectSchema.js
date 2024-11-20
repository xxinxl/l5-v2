class ObjectValidator {
  constructor() {
    this.validators = {};
  }

  shape(schema) {
    this.validators = schema;
    return this;
  }

  isValid(user) {
    let isValid = true;
    Object.entries(this.validators).forEach(([field, validator]) => {
      if (!validator.isValid(user[field])) {
        isValid = false;
      }
    });
    return isValid;
  }
}

export default ObjectValidator;
