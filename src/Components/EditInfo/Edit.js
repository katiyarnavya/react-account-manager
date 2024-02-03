import React, {useState} from 'react'
import './Edit.css'
const Edit = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [dob, setDob] = useState();
  const [gender, setGender] = useState();
  return (
    <form onSubmit={(e) =>{
      e.preventDefault();
      setIsEdit(!isEdit)
    }}>
      <label>
        name:{""}
        {isEdit?(
            <input value = {name}
            onChange={(e) =>{
              setName(e.target.value);
            }}
            />
          ):(
            <b>{name}</b>
          )}
      </label>
      <label>
        contact:{""}
        {isEdit?(
            <input value = {contact}
            onChange={(e) =>{
              setContact(e.target.value);
            }}
            />
          ):(
            <b>{contact}</b>
          )}
      </label>
      <label>
        dob:{""}
        {isEdit?(
            <input value = {dob}
            onChange={(e) =>{
              setDob(e.target.value);
            }}
            />
          ):(
            <b>{dob}</b>
          )}
      </label>
      <label>
        gender:{""}
        {isEdit?(
            <input value = {gender}
            onChange={(e) =>{
              setGender(e.target.value);
            }}
            />
          ):(
            <b>{gender}</b>
          )}
      </label>

      <button type="submit" > {isEdit ? "save" : "Edit"} Profile</button>
      
    </form>
  )
}

export default Edit
