const {MongoClient ,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

   var db = client.db('TodoApp');

// //delete many items.
//    db.collection('Todos').deleteMany({text: 'edit lunch'}).then((result)=>{
//      console.log(result);
//    });

   //delete first item matching
   db.collection('Todos').deleteOne({text: 'edit lunch'}).then((result)=>{
     console.log(result);
   });

  client.close();
});
