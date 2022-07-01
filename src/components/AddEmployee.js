import React from "react";
import './css/AddEmployee.css'
const AddEmployee =(handleAddFormSubmit,handleAddFormChange) =>{
return(
<div>

<div className="Data-Holder">
      <h2>New Employee</h2>

      <h3>First Name</h3>
      <form onSubmit={handleAddFormSubmit}>
    <input type="text" name="Firstname" required="required" placeholder="" 
    
    onChange={handleAddFormChange}/><br></br>

    <h4>Last Name</h4>
    <input type="text" name="Lastname" required="required" placeholder=""
   
    onChange={handleAddFormChange}/><br></br>

    <h4>Email</h4>
    <input type="email" name="email" required="required"  placeholder=""
    
    onChange={handleAddFormChange}/><br></br>

    <button type="btn">Add Employee</button>
    </form>
      
    </div>
     </div>


);
    
};

export default AddEmployee;