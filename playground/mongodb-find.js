const {MongoClient ,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

   var db = client.db('TodoApp');

 //   db.collection('Todos').find({
 //     _id:new ObjectID('5a42d7f7ff4a2983ac8665d8')
 // }).toArray().then((docs) =>{
 //    console.log(JSON.stringify(docs,undefined,2));
 //   }, (err) => {
 //     console.log('Unable');
 //   });

 // db.collection('Todos').find().count().then((count) =>{
 //  console.log(`Couunt : ${count}`);
 // }, (err) => {
 //   console.log('Unable');
 // });

 db.collection('Users').find({Name: 'harshit'}).toArray().then((docs) =>{
    console.log(JSON.stringify(docs,undefined,2));
   }, (err) => {
     console.log('Unable');
   });

  client.close();
});
