import { editableInputTypes } from '@testing-library/user-event/dist/utils'
import React from 'react'

const Edit = () => {
return (
<tr>
    <td>
        <input
        type="text" name="Firstname" required="required" placeholder="">

        </input>
    </td>
    <td>
        <input type= "text" name="Lastname" required="required" placeholder="">
        </input>
    </td>
    <td>
        <input type= "email" name="Email" required="required" placeholder="">
        </input>
        </td>
</tr>


)

}

export default Edit;