import logo from './logo.svg';
import '../src/components/css/App.css';
import React, {useState , Fragment} from 'react';
import data from './employee-data.json';
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
  });
                
  const [editListId, setEditListId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
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
      event.preventDefault();
  

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
        id: editListId,
        Fname: editFormData.Fname,
        Lname: editFormData.Lname,
        email: editFormData.email,
      };

      const newLists = [...lists];

      const index = lists.findIndex((list)=>list.id===editListId);

      newLists[index] = editedList;

      setLists(newLists);
      setEditListId(null);
    };

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
  ;
  const CancelClick =() => {
    setEditListId(null);
  }
  const DeleteClick =(listId) =>{
    const newLists =[...lists];

    const index = lists.findIndex((list) =>list.id ===listId);

    newLists.splice(index,1);

    setLists(newLists);
  }
  return (
    <div className="App">
 
    
    <form onSubmit={editFormSubmit}>

    <table>
    <thead>
    <tr>
     <th>First Name</th>  
     <th>Last Name</th>  
     <th>Email</th> 
     <th>Actions</th>
     </tr>
    
    </thead>
    <tbody>
    {lists.map((list)=> (
      <Fragment>
        {editListId === list.id ? ( 
        <Edit editFormData={editFormData}
        editFormChange={editFormChange}
        CancelClick={CancelClick}/>
        ) : ( 
        <ReadList list={list} 
          EditClick={EditClick}
          DeleteClick={DeleteClick}/>
        )}
      </Fragment>
      
    
      ))}</tbody>
      </table>
      </form>

      
      
<div className="Data-Holder">
      <h2>New Employee</h2>

      
    <form className='form' onSubmit={handleAddFormSubmit}>

    <input type="text" name="Fname" required="required" placeholder="First Name" onChange={handleAddFormChange}/>
   
    {/* <input type="text" name="Lastname" required="required" placeholder="Last Name" onChange={handleAddFormChange}/> */}

    <input type="text" name="Lname" required="required" placeholder="Last Name" onChange={handleAddFormChange}/>
   
    <input type="email" name="email" required="required"  placeholder="Email" onChange={handleAddFormChange}/>

    <button  type="submit">Add Employee</button>
    </form>
      
    
</div>
   </div>
  );
};


export default App;
