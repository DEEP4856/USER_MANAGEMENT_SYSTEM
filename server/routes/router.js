const express=require ('express');
//roter module will help to create differents routes in a separate file
//we are not using app module as it will create a new app 
const route =express.Router();
const services =require('../services/render');
const controller = require('../controller/controller');



/**
 * @description root route
 *@method GET/
 */
route.get("/",services.homeroute)



 /**
 * @description ADD-USER route
 *@method GET/ADD-USER
 */
route.get("/add-user",services.add_user)


/**
 * @description UPDATE-USER
 *@method GET/UPDATE-USER
 */
route.get("/update-user",services.update_user)



// API --- CRUD
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)



module.exports= route;