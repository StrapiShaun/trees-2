

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: "db-postgresql-ams3-88374-do-user-2064451-0.b.db.ondigitalocean.com", 
      port: 25060, 
      database: "defaultdb", 
      user: "doadmin", 
      password: "AVNS_dSevaVO7yrepcoP",
      ssl: {
        rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
  },
});

