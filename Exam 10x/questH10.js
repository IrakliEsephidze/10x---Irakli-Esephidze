const values = [10, 20, 5, 30];

function createLogger(threshold = 15) {
  function logValues() {
    for (let value of values) {
      if (value > threshold) {
        console.log(`Warning: ` + value);
      }
    }
  }
  return logValues;
}

const logger = createLogger();
logger();
