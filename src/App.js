import React from "react";
import "./App.css";
import ContactsCard from "./Components/ContactsCard";
import ContactsList from "./Components/ContactsList";

function App() {
  return (
    <div className="App">
      <ContactsCard />
      <ContactsList />
    </div>
  );
}

export default App;
