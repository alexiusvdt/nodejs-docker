const ronin = require( 'ronin-server' )

const mocks = require( 'ronin-mocks' )

const database = require( 'ronin-database' )

const server = ronin.server()

database.connect( process.env.CONNECTIONSTRING )
server.use( '/foo', (req, res) => {
    return res.json({ "foo": "bar"})
})

server.use( '/', mocks.server( server.Router(), false, false ) )

server.start()

// [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Error: Connection String Required. Please provide a mongodb connection string. See https://docs.mongodb.com/manual/reference/connection-string/ for more details.