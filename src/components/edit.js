import { editableInputTypes } from '@testing-library/user-event/dist/utils'
import React from 'react';


const Edit = ({editFormData,editFormChange,CancelClick}) => {
return (
<tr>
    <td>
        <input
        type="text" name="Fname" required="required" placeholder=""
        value={editFormData.Fname}
       onChange={editFormChange}>
    
        </input>
    </td>
    <td>
        <input type= "text" name="Lname" required="required" placeholder=""
        value={editFormData.Lname}
        onChange={editFormChange}>
        </input>
    </td>
    <td>
        <input type= "email" name="email" required="required" placeholder=""
        value={editFormData.email}
        onChange={editFormChange}>
        </input>
        </td>
        <td>
            <button type="submit">Save</button>
            <button type="button" onClick={CancelClick}>Cancel</button>
        </td>
</tr>


);

};

export default Edit;