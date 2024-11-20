class ObjectValidator {
  constructor(validators) {
    this.validators = validators;
  }

  isValid(data) {
    if (typeof data !== 'object' || data === null) {
      return false;
    }

    for (const key in this.validators) {
      if (!this.validators[key].isValid(data[key])) {
        return false;
      }
    }
    return true;
  }
}
export default ObjectValidator;
