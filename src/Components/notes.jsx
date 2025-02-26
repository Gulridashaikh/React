import React, { useState, useEffect } from "react";

function Notes({ selectedGroup }) {
  const [notes, setNotes] = useState("");
  const [isEditing, setIsEditing] = useState(false); // ✅ Track edit mode

  useEffect(() => {
    console.log("Notes - Selected Group:", selectedGroup); // ✅ Debug log
    if (selectedGroup) {
      const savedNotes = localStorage.getItem(`notes-${selectedGroup.name}`);
      setNotes(savedNotes ? JSON.parse(savedNotes) : ""); // Load notes or set empty
    }
  }, [selectedGroup]);

  useEffect(() => {
    if (selectedGroup) {
      localStorage.setItem(`notes-${selectedGroup.name}`, JSON.stringify(notes));
    }
  }, [notes, selectedGroup]);
  const handleSave = () => {
    localStorage.setItem(`notes-${selectedGroup.name}`, JSON.stringify(notes));
    console.log("Notes Saved:", notes);
    setIsEditing(false); // ✅ Exit edit mode after saving
  };

  return (
    <div style={{ 
      width: "50vw", // ✅ Take full right-side width
      height: "100vh", // ✅ Full height
      display: "absolute",
      flexDirection: "column",
      justifyContent: "center", // ✅ Align content to the top
      backgroundColor: "white",
      padding: "20px",
      boxSizing: "border-box",
      overflow:'hidden',
      alignItems:'center'
    }}>
      <h2 style={{ color: "black", textAlign: "left", marginBottom: "10px" }}>
        Notes for {selectedGroup.name}
      </h2>

      {/* Notes Text Area - Full Width & Height */}
      <textarea 
        style={{ 
          width: "40vw", // ✅ Full width
          height: "85%", // ✅ Take up most of the right-side space
          padding: "10px", 
          margin:'10px',
          fontSize: "16px",
          color: "black",
          border: "1px solid gray",
          resize: "none", // ✅ Prevent resizing
          outline: "none",
          boxSizing:'border-box'
        }}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write your notes here..."
      />

      {/* Save/Edit Button */}
      <button 
        onClick={() => setIsEditing(!isEditing)} 
        style={{
          marginTop: "10px",
          padding: "10px 15px",
          fontSize: "16px",
          backgroundColor: "#327eb0",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
          alignSelf: "flex-start"
        }}
      >
        Save
      </button>
    </div>
  );
}

export default Notes;
