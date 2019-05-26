
const Logger = require('./atay');
const { isNode } = require('./helper');

const { DEFAULT_CONFIG } = require('./constants');

function createLogger(options = {}) {
  const config = Object.assign(DEFAULT_CONFIG, options);

  if (!isNode()) {
    throw new Error('Atay logger only run on NodeJS.');
  }

  return new Logger(config);
}

module.exports = {
  createLogger,
};
