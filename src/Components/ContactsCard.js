import React from "react";

function ContactsCard(props) {
  const { contact, clickToDelete } = props;

  const handleClick = () => {
    clickToDelete(contact.id);
  };

  if (!contact) {
    return <div></div>;
  }
  return (
    <tr>
      <td>
        <img
          src={contact.pictureUrl}
          alt={contact.name}
          style={{ height: "200px" }}
        />
      </td>
      <td>{contact.name}</td>
      <td>{contact.popularity}</td>
      <td>{contact.wonOscar ? "Yes" : "No"}</td>
      <td>{contact.wonEmmy ? "Yes" : "No"}</td>
      <td>
        <button onClick={handleClick}>Delete</button>
      </td>
    </tr>
  );
}

export default ContactsCard;
