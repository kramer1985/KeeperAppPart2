import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Entry from "./Entry";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((data) => (
        <Entry key={data.id} title={data.title} content={data.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
