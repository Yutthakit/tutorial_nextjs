require('dotenv').config();

module.exports = {
  env: {
    ENVIROMENT: process.env.ENVIROMENT,
  },
  serverRuntimeConfig: {
    MYSECRET: 'non_secret',
  },
  publicRuntimeConfig: {
    MYNAME: 'nextjs',
  },
};
