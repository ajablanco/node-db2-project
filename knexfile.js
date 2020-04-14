// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3'
    }
  },
  useNullAsDefault: true, //for sqlite only
  migrations: {
    //where to store migration files
    directory: './data/migrations',
  },
  production: {
    client: 'postgresql',
    connection: {
      host: "localhost",
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
