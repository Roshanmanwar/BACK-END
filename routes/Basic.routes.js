const BasicController = require('../controllers/Basic.controller');
const BasicRouter = require("express").Router();


BasicRouter.get('/',BasicController.home);


//Use all the url in Postman.

//url  http://localhost:3002/tasks  //CREATE POST METHOD
//Create a new task.
BasicRouter.post('/tasks',BasicController.createTasks);


//url http://localhost:3002/tasks?page=1  //RETRIVE GET METHOD
//plese give eg:  page=1
// 1 page 2 only two task show
// other task show in next page

//Retrieve a list of all tasks.
BasicRouter.get('/tasks',BasicController.getTask);

//URL http://localhost:3002/tasks/1    //RETRIVE BY ID GET METHOD
//Retrieve a specific task by ID.
BasicRouter.get('/tasks/:id',BasicController.getSpecificTask);

//URL http://localhost:3002/tasks/1   //UPDATE BY ID  PUT METHOD
//Update an existing task by ID.
BasicRouter.put('/tasks/:id',BasicController.updateTask);


//URL  http://localhost:3002/tasks/1  //DELETE BY ID    DELETE METHOD
//Delete a task by ID.
BasicRouter.delete('/tasks/:id',BasicController.deleteSpecificTask);




//module export
module.exports = BasicRouter;