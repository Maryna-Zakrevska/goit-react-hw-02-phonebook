import React from 'react'

export const ContactItem = ({ id, name, number }, onDeleteContact) => {
    return (
           <li key={id}>
      <span>{name}</span>&nbsp;<span>{number}</span>
     <button onClick={() => onDeleteContact(id)} >Delete</button> 
    </li> 
    )
}