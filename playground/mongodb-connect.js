// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID }= require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

if(err){
    return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

// db.collection('Todos').insertOne({
// text:'Something to do',
// completed:false
// }, (err,result)=> {
// if(err){
//     return console.log('Unable to insert todo', err);
// }
//  console.log(JSON.stringify(result.ops, undefined, 2));
// });
//Insert new doc to Users(name, age, location)

// db.collection('Users').insertOne({
//     name:'Kevin',
//     age: 25,
//     location:'Kahawa West'
// }, (err, result) => {
//     if(err){
//         return console.log('Unable to insert users', err);
//     }
//     console.log(result.ops[0]._id.getTimestamp());
// });

// db.collection('Users').deleteMany({name:'Kevin'});

db.collection('Users').findOneAndDelete({_id: new ObjectId("5ab39a1363f0bb0fb8880ec7") }).then((results) => {
     console.log(JSON.stringify(results, undefined, 2));
 });

 db.close();
});