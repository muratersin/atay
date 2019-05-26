[![npm version](https://img.shields.io/npm/v/atay.svg?style=flat)](https://www.npmjs.com/package/atay)

Atay is a **Lightweight logging library** with zero dependencies for NodeJs.


```javascript
    const atay = require('atay');
    
    const logger = atay.createLogger();

    logger.info('Hello Moon!');
```

Firsly, Atay is not fully customizable and flexible logging librarry. My purpose of writing this librarry, avoid time waste when creating new microservice or server app. Many other logging libraries are had complex configuration objects especially when you want write logs to a file.

Default configuration is shown below:
```javascript
    const config = {
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
    }
```

- **name(String):** Your application name.
- **showDate(Boolean):** If is it true, you can see your logs with date.
- **stopProcessAfterFatalError(Boolean):** If is it true, when you use 'fatal' level log, your process will be stopped immediately after writing log.

