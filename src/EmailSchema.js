class EmailValidator {
  constructor() {
    this.minLength = 0;
    this.maxLength = Infinity;
  }

  setEmailLengthConstraint(min, max) {
    this.minLength = min;
    this.maxLength = max || min;
    return this;
  }

  isValid(email) {
    if (typeof email !== 'string' || !email.includes('@')) {
      return false;
    }

    const localPart = email.split('@')[0];
    return localPart.length >= this.minLength && localPart.length <= this.maxLength;
  }
}

export default EmailValidator;
