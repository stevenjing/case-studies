const { Client } = require('pg')
const client = new Client()

async function connectPostgres() {
  await client.connect()
}

async function endPostgres() {
  await client.end()
}

async function query() {
  const res = await client.query('SELECT $1::text as message', ['Hello world!'])
  console.log(res);
  console.log(res.rows[0].message) // Hello world!
}

function main() {
  connectPostgres()
  query()
  endPostgres()
}

main()

