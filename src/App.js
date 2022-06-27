import logo from './logo.svg';
import '../src/components/css/App.css';
import React, {useState , Fragment} from 'react';
import data from './components/employee-data.json';
import AddEmployee from './components/AddEmployee';
import {nanoid} from 'nanoid';
import ReadList from './components/ReadList'
import Edit  from './components/edit';

const App =()=> {

  const [lists,setLists] = useState(data);
  
  const[ addFormData,setAddFormData] = useState({
    Fname: "",
    Lname: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    Fname: "",
    Lname: "",
    email: "",
  })

  const [editListId, setEditListId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preeventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData)
      };

    const editFormChange = (event) => {
      event.preventDefault();

      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;

      const newFormData = {...editFormData};
      newFormData[fieldName] = fieldValue;

      setEditFormData(newFormData)
    };
    const handleAddFormSubmit = (event) => {
      event.preeventDefault();
  

      const newlist = {
        id:nanoid(),
        Fname:addFormData.Fname,
        Lname:addFormData.Lname,
        email:addFormData.email,
      };
      const newLists= [...lists,newlist];
      setLists(newLists);
    };
    const editFormSubmit = (event) =>{
      event.preventDefault();

      const editedList = {
        Fname: editFormData.Fname,
        Lname: editFormData.Lname,
        email: editFormData.email,
      }

      const newLists = [...contacts]
    }

      const EditClick = (event, list) => {
        event.preventDefault();
        setEditListId(list.id);

        const formValues = {
          Fname:list.Fname,
          Lname:list.Lname,
          email:list.email,
        };
        setEditFormData(formValues);
      }
  };

  return (
    <div className="App">
<AddEmployee />
<div className="App">
<from>

<table>
  <thead>
    
     <th>First Name</th>  
     <th>Last Name</th>  
     <th>Email</th> 
     <th>Actions</th>

    
  </thead>
  <tbody>
    {lists.map((list)=> (
      <Fragment>
        {editListId === list.id ? ( 
        <Edit editFormData={editFormData}
        editFormChange={editFormChange}/>
        ) : ( <ReadList list={list} 
          EditClick={EditClick}/>
        )}
      </Fragment>
      
    
      ))}</tbody>
</table>
</from>

</div>
<div className="Data-Holder">
    <h2>New Employee</h2>

    <h3>First Name</h3>
    <form onSubmit={handleAddFormSubmit}>
<input type="text" name="Firstname" required="required" placeholder="" 
onChange={handleAddFormChange}/><br></br>

<h3>Last Name</h3>
<input type="text" name="Lastname" required="required" placeholder="" 
onChange={handleAddFormChange}/><br></br>

<h3>Email</h3>
<input type="email" name="email" required="required"  placeholder="" 
onChange={handleAddFormChange}/><br></br>

<button type="btn">Add Employee</button>
</form>
      
    </div>

    </div>
  );
}


export default App;
