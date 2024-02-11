//taskList Array
let tasksList = [];

const BasicController = {

    home(req, res) {
        res.send("hiii hello")
    },


    //save tasks
    createTasks(req, res) {
        //get data from body
        let { title, description } = req.body;

        try {
            //check titile and description are there or not.
            if (!title || !description) {
                res.status(400).json({
                    message: "Title and description are required"
                });
            }
            //total length of taskList array and add it 1 this is a id.
            const id = tasksList.length + 1;
            const data = { id, title, description };

            //save data in tasksList array.
            const newTask = tasksList.push(data);

            //if data save
            if (newTask) {
                res.status(200).json({
                    message: "task save successfully"
                });

            } else {
                res.staus(400).json({
                    message: "fail to save task"
                });
            }
        } catch (error) {
            res.status(400).json({
                message: "server error"
            });
        }
    },


    //pagination
    //http://localhost:3002/get?page=&limit=
    //write page no. limit is--  how to many data you want of this page 
    getTask(req, res) {

        //get page of list
        const page = parseInt(req.query.page)||1;

        //limit--- how many data save in one page.
        const limit = parseInt(req.query.limit)||2;

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const paginatedTasks = tasksList.slice(startIndex, endIndex);
        
        //paginated Item.
        // const paginatedItems = tasksList.splice(startIndex, endIndex);

        res.status(200).json({
            message: "Here the List of tasks : ",
            pageNo: page,
            // list: paginatedItems
            list : paginatedTasks
        })
    },


    //Retrieve a specific task by ID.
    getSpecificTask(req, res) {
        //collect from routes
        const id = parseInt(req.params.id);

        try {
            //to find the id is match in tasksList.
            const task = tasksList.find(task => task.id === id);

            //task is found or not.
            if (task) {
                res.status(200).json({
                    message: "task found successully",
                    data: task
                });
            } else {
                res.status(400).json({
                    message: "Task not found",
                });
            }
        } catch {
            res.status(400).json({
                message: "server error"
            })
        }
    },

    //Update an existing task by ID.
    updateTask(req, res) {
        //collect id
        const id = parseInt(req.params.id)

        //collect body data
        const updateData = req.body;
        let taskIndex = tasksList.findIndex(task => task.id === parseInt(id));

        
        try {

            //update data
             tasksList[taskIndex].title = updateData.title;
             tasksList[taskIndex].description = updateData.description;

            if (taskIndex === -1) {
                res.status(400).json({
                    message: "data is not update"
                });
            
            } else {              
                res.status(200).json({
                    message: "data is update",
                });
            }
        } catch {
            res.status(500).json({
                message: "data not found"
            });
        }
    },


    //Delete a task by ID.
    deleteSpecificTask(req, res) {

        //collect id
        const id = parseInt(req.params.id);

        let taskIndex = tasksList.findIndex(task => task.id === id);
        if(taskIndex === -1){
            res.status(404).json({
                message : "task not found"
            });
        }else{
            tasksList.splice(taskIndex,1,0);
            res.status(200).json({
                message : "task delete successfully"
            });
        }       
    },



};


//export Basic Controller
module.exports = BasicController;