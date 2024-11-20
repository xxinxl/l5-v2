class AgeValidator {
  isValid(age) {
    return typeof age === 'number' && !isNaN(age);
  }

  isAdult(age) {
    return this.isValid(age) && age >= 18;
  }
}

export default AgeValidator;
