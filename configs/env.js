const START_APP = /^APP_/;

function getClientEnvironment() {
  const raw = Object.keys(process.env)
  .filter(key => START_APP.test(key))
  .reduce(
    (env, key) => {
      env[key] = process.env[key];
      return env;
    },
    {
      NODE_ENV: process.env.NODE_ENV || 'development',
      WDS_SOCKET_HOST: process.env.WDS_SOCKET_HOST,
      WDS_SOCKET_PATH: process.env.WDS_SOCKET_PATH,
      WDS_SOCKET_PORT: process.env.WDS_SOCKET_PORT,
    }
  );
  // Stringify all values so we can feed into webpack DefinePlugin
  const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
  };
  return stringified;
}

module.exports = getClientEnvironment;
