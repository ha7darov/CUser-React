// style
import './NewUserForm.css'

import React from 'react'

function NewUserFrom() {
  return (
    <div className='modal-wrapper'>
        <div className='overlay'>
            <duv className="modal">
                <h2>Create New User</h2>
                <form >
                    <label>
                        <span>Image URL:</span>
                        <input type="url" required />
                    </label>
                    <label>
                        <span>First Name:</span>
                        <input type="text" required/>
                    </label><label>
                        <span>Last Name:</span>
                        <input type="text" required/>
                    </label>
                    <label>
                        <span>Age:</span>
                        <input type="number" required/>
                    </label>
                    <label>
                        <span>From:</span>
                        <input type="text" required/>
                    </label>
                    <label>
                        <span>Job:</span>
                        <input type="text" required/>
                    </label>
                    <div className='gender'>
                        <span>Gender:</span>
                        <label>
                            <small>Male</small>
                            <input type="radio" required name='gender' value="male" />
                        </label>
                        <label>
                            <small>Female</small>
                            <input type="radio" required name='gender' value="female" />
                        </label>
                    </div>
                    <button className='modal-btn'>Sumbit</button>
                </form>
            </duv>
        </div>
    </div>
  )
}

export default NewUserFrom
