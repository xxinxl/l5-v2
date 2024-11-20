class AgeValidator {
  isValid(age) {
    return typeof age === 'number' && !Number.isNaN(age) && age >= 0;
  }

  isAdult() {
    return {
      isValid: (age) => this.isValid(age) && age >= 18,
    };
  }
}

export default AgeValidator;
