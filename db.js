const { MongoClient } = require('mongodb')

let dbConnection
let uri = 'mongodb+srv://<id:pass>gH3DqDz@cluster0.aqvpo9s.mongodb.net/?retryWrites=true&w=majority'

module.exports = {
    connectToDb : (cb) => {
      MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db()
        return cb()

      })
      .catch(err => {
        console.log(err)
        return cb(err)
      })
    },

    getDb: ()=> dbConnection
}
