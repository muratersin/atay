const path = require('path');
const util = require('util');
const fs = require('fs');

const { LEVELS, NODE_COLOR_MAP, INSPECT_OPTIONS } = require('./constants');

class Logger {
  constructor(config) {
    this.config = config;

    LEVELS.forEach((level) => {
      Logger.prototype[level] = function (logObject) {
        const prefix = this.getLogPrefix(level);

        process.stderr.write(prefix);
        process.stderr.write(util.formatWithOptions(INSPECT_OPTIONS, logObject));
        process.stderr.write('\n');

        const streamPath = this.config.streams[level];

        if (!streamPath) {
          return;
        }

        const filePath = path.resolve(streamPath, `${level}.log`);
        const fileLogText = `${this.getDate()}${util.formatWithOptions(INSPECT_OPTIONS, logObject)}\n`;
        fs.open(filePath, 'wx', (err) => {
          const method = (err && err.code === 'EEXIST')
            ? 'appendFile'
            : 'writeFile';

          fs[method](filePath, fileLogText, (error) => {
            if (error) {
              throw error;
            }

            if (level === 'fatal' && this.config.stopProcessAfterFatalError) {
              process.exit(1);
            }
          });
        });
      };
    });
  }

  getDate() {
    if (!this.config.showDate) {
      return '';
    }

    return ` - ${new Date().toISOString()} - `;
  }

  getLogPrefix(level) {
    const c = NODE_COLOR_MAP[level];
    const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
    return `${colorCode};1m${level}${level === 'info' || level === 'warn' ? ' ' : ''} \u001B[0m${this.getDate()}`;
  }
}

module.exports = Logger;
