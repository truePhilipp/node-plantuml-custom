'use strict'

class PlantumlSyntaxError extends Error {
  constructor(message) {
    super(message);
    this.name = "PlantumlSyntaxError";
  }
}

module.exports = PlantumlSyntaxError
