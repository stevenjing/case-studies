const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: {
    service: 'user-service',
    funMetadata: 'just some fun default metadata',
  },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

logger.log({
  level: 'info',
  message: 'Hello distributed log files!'
});

logger.info('Hello again distributed logs');
logger.error('ummm.. there\'s an error...');

logger.clear();

logger.add(new winston.transports.Console());
logger.info('this shouldn\'t show up in the file logs');

logger.on('error', (err) => {
  console.log(JSON.stringify({
    level: 'error',
    message: 'this is a winston logger error',
  }));
});

logger.error('this error message should show up in the console');
