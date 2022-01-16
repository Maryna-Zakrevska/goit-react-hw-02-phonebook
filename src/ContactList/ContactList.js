import React from 'react';
import { ContactItem } from '../ContactItem/ContactItem';



export const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>{contacts.map(contact => ContactItem(contact, onDeleteContact))}</ul>
  );
