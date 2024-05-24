import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import Contact from "../Contact/Contact";
import { List } from '@mui/material';

export default function ContactList() {

  const contacts = useSelector(selectVisibleContacts);

  return (
    Array.isArray(contacts) &&
    <List sx={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", gap:"12px", mt:2}}>
        {contacts.map((contact) => {
            return <Contact key={contact.id} contact={contact} />
        })}
    </List>
  )

}