import react from 'react'

const ReadList = ({list, EditClick, DeleteClick}) =>{
    return (
<tr>
      <td>{list.Fname}</td>
      <td>{list.Lname}</td>
      <td>{list.email}</td>
      <td>
        <button type ="button" onClick={(event)=> 
            EditClick(event,list)}>Edit</button>

            <button type="button" onClick={()=>DeleteClick(list.id)}>Delete</button>
      </td>
    </tr>
    );
};

export default ReadList;