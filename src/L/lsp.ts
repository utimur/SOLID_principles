

class Database {
  connect() {}
  read() {}
  write() {}
}

class SQLDatabase extends Database {
  connect() {}
  read() {}
  write() {}
  joinTables() {}
}

class NOSQLDatabase extends Database {
  connect() {}
  read() {}
  write() {}
  createIndex() {}
}

class MySQLDatabase extends SQLDatabase {
  connect() {}
  read() {}
  write() {}
  joinTables() {}
}

class MongoDatabase extends NOSQLDatabase {
  connect() {}
  read() {}
  write() {}
  createIndex() {}
  mergeDocuments() {}
}


function startApp(database: Database) {
  database.connect()
}
startApp(new MongoDatabase())
startApp(new MySQLDatabase())





