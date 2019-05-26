module.exports.DEFAULT_CONFIG = {
  name: 'Atay',
  showDate: true,
  stopProcessAfterFatalError: false,
  streams: {
    info: null,
    warn: null,
    error: null,
    debug: null,
    fatal: null,
  },
};

module.exports.LEVELS = [
  'info',
  'warn',
  'error',
  'fatal',
  'debug',
];

module.exports.NODE_COLOR_MAP = {
  info: 2,
  warn: 3,
  error: 1,
  debug: 4,
  fatal: 5,
};

module.exports.INSPECT_OPTIONS = {
  showHidden: false,
  compact: true,
  deph: 5,
  breakLength: 80,
};
