const {MongoClient ,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

   var db = client.db('TodoApp');

   db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5a42ed22df8629bfc49e6778')
   },
   {  $set: {
       Name: 'Gonsalves',
     },
     $inc: {
       Age: 1
     }
   } ,
   {
     returnOriginal:false
   }).then((result) => {
     console.log(result);
   });


  client.close();
});
