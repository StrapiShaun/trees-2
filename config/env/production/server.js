module.exports = ({ env }) => ({
    proxy: true,
    //url: env('MY_DO_URL'),
    app: { 
      keys: env.array('APP_KEYS')
    },
  })