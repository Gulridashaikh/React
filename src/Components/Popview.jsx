import React from "react";
import Popup from "./Popup";

function PopView({ groupNames, onSelectGroup }) {
  console.log("PopView - Received Groups:", groupNames); // Debugging log

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px", width: "100%" ,maxHeight: "calc(100vh - 80px)" , overflow:'auto',maxHeight: "100%" }}>
      {/* <h2>Saved Groups</h2> */}
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "15px", 
        alignItems: "center", 
        width: "100%", 
        overflowY: "auto",
        maxHeight: "80vh" }}>
        {groupNames.length > 0 ? (
          groupNames.map((group, index) => (
            <div 
              key={index}   
              onClick={() => {
                console.log("PopView - Group Clicked:", group); 
                onSelectGroup(group);
              }} style={{ 
                backgroundColor: group.color || "lightgray", 
                width: "60px", // Circular width
                height: "60px", // Circular height
                borderRadius: "50%", // Makes it circular
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection:'column',
                textAlign: "center",
                cursor: "pointer",
                color: "white",
                fontSize: "14px",
                fontWeight: "bold",
                margin:'1px',
                // border: "2px solid black",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)"
              }}>
              {group.name.charAt(0).toUpperCase()}
            </div>
          ))
        ) : (
          <p>No groups created yet.</p>
        )}
      </div>
    </div>
  );
}

export default PopView;
