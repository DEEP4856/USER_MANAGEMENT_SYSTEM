
$('#add_user').submit(function(event){
      alert("Data Inserted Successfully!!")
   })
   





 //UPDATE USERS 
 $('#update_user').submit(function(event){
      //in order to change the default behaviour of the form
      event.preventDefault();
  //this serializearray method of helps to serialize the array of the data so when we use a save button all the submitted data will be putted  in the variable uniedexd_array
      var unindex_array=$(this).serializeArray();
      console.log(unindex_array)
      var data ={}

   //This map method helps to get a particular data by id from the unindexed array and put it into the new object named DATA. 
      $.map(unindex_array,function(n,i){
         data[n['name']]=n['value']

      })
      // data will converted into objects to make any change in the data base
      console.log(data)
    


      var request ={
             // gonna pass the value to the ajax
            // using ajax to make a request to the server and get the response from the server
            "url":`http://localhost:3000/api/users/${data.id}`,
            'method':'PUT',
            "data":data
      }


      $.ajax(request).done(function(response){
            alert("Data updated Successfully!!")
            // location.reload();
      })
   })

 








      //deleting user

   if (window.location.pathname=="/") {
      $ondelete=$('.table tbody td a.delete');
      $ondelete.click(function(){
            var id =$(this).attr("data-id")
            

            var request = {
                  "url":`http://localhost:3000/api/users/${id}`,
                  "method":"DELETE"
                  }
                  
                   
            //confirm is a inbuilt method in javascript to get the user for permission
        

            if(confirm('do you really want to delete this record?')){
                  $.ajax(request).done(function(response){
                        alert("Data Deleted Successfully!!");
                        location.reload()
                  })
            }
      })
   }