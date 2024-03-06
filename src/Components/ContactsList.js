import React, { useState } from "react";
import contactsData from "../contacts.json";
import ContactsCard from "./ContactsCard";

function ContactsList() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  //Delete button
  const deleteContact = (contactId) => {
    console.log("Deleting contact with ID:", contactId);

    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    console.log("Filtered Contacts:", filteredContacts);
    console.log("Deleting contact with ID:", contactId);
    setContacts(filteredContacts);
  };

  //Add a new contact
  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * contactsData.length);
    const newContact = contactsData[randomIndex];
    console.log("New Contact:", newContact);

    const contactExists = contacts.some(
      (contact) => contact.id === newContact.id
    );
    console.log("Contact Exists:", contactExists);

    if (!contactExists) {
      setContacts((prevContacts) => [...prevContacts, newContact]);
    } else if (contactsData.length > contacts.length) {
      addRandomContact();
    }
  };

  //Sort by popularity
  const sortByPopularity = () => {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(sortedContacts);
  };

  //Sort by name
  const sortByName = () => {
    const sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });
    setContacts(sortedContacts);
  };

  return (
    <div>
      <h2>List of contacts</h2>
      <button className="button" onClick={addRandomContact}>
        Add Random Contact
      </button>
      <button className="button" onClick={sortByPopularity}>
        Sort by popularity
      </button>
      <button className="button" onClick={sortByName}>
        Sort by name
      </button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <ContactsCard
              key={contact.id}
              contact={contact}
              clickToDelete={deleteContact}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsList;
