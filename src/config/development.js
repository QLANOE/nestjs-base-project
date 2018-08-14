const config = {
  LOG_LEVEL: process.env.LOG_LEVEL || "debug",
  SWAGGER_ACTIVATED: process.env.SWAGGER_ACTIVATED || true,
  MONGO_URL: process.env.MONGO_URL || '/192.168.136.128:27017',
};
module.exports = { config: config };
