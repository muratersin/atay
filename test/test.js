const path = require('path');
const atay = require('../index');


const log = atay.createLogger({
  name: 'Micropono',
  streams: {
    info: path.join(__dirname, './'),
  }
});

log.info('info message');
log.error('error message');
log.warn('warning message');
log.fatal('fatal message');
log.debug('debug message');



// log.info('İnfo Log');
log.info({
  host: 'www.',
  req: {
    pretty: 'Print',
    status: 1990,
  },
  data: [{
    mg: 'Omyzsh',
  }]
});
// log.error('Error Log');
// log.warn('Warning Log');
// log.fatal('Fatal Log');
// log.debug('Fatal Log');
// log.fatal('Fatal Log');
