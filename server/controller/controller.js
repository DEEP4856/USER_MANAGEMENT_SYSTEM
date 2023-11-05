var userdb= require('../model/model');



//create and save new user
exports.create =(req,res)=>{
    //validate request--- it means if a user create a empty post request
    if(!req.body){
        res.status(400).send({message:"content can not empty"});
        return;
    }
  //new user
    const user = new userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })



    //save user in the database
    user
    .save(user)
    .then(data=>{
        // res.send(data)
        res.redirect('/add-user')
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"error occured while creating a create operation"
        });
    });
}









//retrive and return all user /retrive and return a single user

exports.find = (req,res)=>{

    //using querry we can fetch data ofsingle user
    if (req.query.id) {
        const id = req.query.id;
        userdb.findById(id)
        .then(data=>{
             if (!data) {
        res.status(404).send({message:`cannot find user with id:${id} `})
    }else{
        res.send(data)
    }
        })
    }else{
//this method will find all data
userdb.find()
.then(user=>{
    res.send(user)
})
.catch(err=>{
    res.status(500).send({
        message:"error occured while retriving user information"
    });
});
    }

}










// update a new identified user by user id
exports.update=(req,res)=>{
    if(!req.body){
      return  res
        .status(400).send({message:"Data to update cannot be empty"});
        
    }
const id = req.params.id;
userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
.then(data=>{
    if (!data) {
        res.status(404).send({message:`cannot update user with ${id}`})
    }else{
        res.send(data)
    }
})
.catch(err=>{
    res.status(500).send({ message:"error occured while updating user information"});
});
}











//delete a user with specific user user id
exports.delete = (req,res)=>{
    if(!req.body){
        return  res
          .status(400).send({message:"data cannot  be empty"});
          
      } 
      const id = req.params.id;
      userdb.findByIdAndDelete(id)
      .then(data=>{
        if (!data) {
            res.status(404).send({message:'cannot be delete '})
            
        }else{
            res.send({
                message:'user was deleted sucessfully'
            })
        }
      }) 
      
.catch(err=>{
    res.status(500).send({ message:"error occured while deleting user information"
    
});
});
}