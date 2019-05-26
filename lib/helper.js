module.exports.isNode = () => (
  typeof process !== 'undefined' &&
  process.type !== 'renderer' &&
  !process.browser &&
  !process.__nwjs 
);

