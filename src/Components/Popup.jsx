import React from 'react';
import { useEffect, useState } from "react";
// import "./Popup.css"

function Popup({ groupNamesParent=[], setGroupNamesParent, onClose }) {
  const [groupName, setGroupName] = useState("");
  const [bgColor, setBgColor] = useState("");
  const handleGroupName = (e) => {
    setGroupName(e.target.value);
  };
  const handleColor = (e) => {
    const div = e.target;
    setBgColor(getComputedStyle(div).backgroundColor);
  };
  // 
  const saveName = () => {
    if (!groupName.trim()) return; // Prevent empty values
  
    const newGroup = { name: groupName, color: bgColor };
    console.log("Popup - New Group to Add:", newGroup);
    const updatedGroups = [...groupNamesParent, newGroup];
    setGroupNamesParent(updatedGroups);

    // Save to local storage immediately
    localStorage.setItem("groupNames", JSON.stringify(updatedGroups));

    // // Ensure `setGroupNamesParent` updates state properly
    // setGroupNamesParent((prevGroups) => [...prevGroups, newGroup]);
  
    // // Save to local storage
    // localStorage.setItem("groupNames", JSON.stringify([...groupNamesParent, newGroup]));
  
    setGroupName(""); // Clear input after saving
    setBgColor(""); // Reset color selection
  
    if (onClose) {
      onClose();
    }
  };
  return (
    <><div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'absolute',
      // alignItems:'center',
      width: '25rem',
      height: '15rem',
      // top:'50',
      bottom: '10vh',
      padding: '10px',
      gap: '1rem',
      border: '1px solid black',
      margin: '50px',
      textAlign: 'left',
      fontSize: '3vh',
      fontWeight: '300',
      borderRadius: '20px'
    }}>
      <span style={{
        bottom: '20vh'
      }}>Group Name</span>
      <input style={{
        width: '20rem',
        height: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
        gap: '1rem'
      }}
        value={groupName}
        onChange={handleGroupName}
        type="text"
        placeholder="Enter Group Name..." />
    </div><div style={{
      fontSize: '3vh',
      fontWeight: '300',
      display: 'flex',
      justifyContent: 'center',
      gap: '3vw',
      alignItems: 'center',
      position: 'absolute',
      bottom: '10vh',
      margin: '60px',
      // padding:'5px'
    }} className="popup__color__input">
        <span>Group Color</span>
        <div className="popup__color__input__color">
          <div
            className={`popup__color__input__color__1 ${bgColor === "rgb(179, 139, 250)" ? `highlight` : null}`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup__color__input__color__2 ${bgColor === "rgb(255, 121, 242)" ? `highlight` : null}`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup__color__input__color__3 ${bgColor === "rgb(67, 230, 252)" ? `highlight` : null}`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup__color__input__color__4 ${bgColor === "rgb(241, 149, 118)" ? `highlight` : null}`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup__color__input__color__5 ${bgColor === "rgb(0, 71, 255)" ? `highlight` : null}`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup__color__input__color__6 ${bgColor === "rgb(102, 145, 255)" ? `highlight` : null}`}
            onClick={handleColor}
          ></div>
        </div>
        <div className="popup__close">
          <button onClick={saveName} disabled={groupName.length === 0}>
            Create
          </button>
          <button onClick={onClose}>Close</button>
        </div>
      </div></>
  );
}

export default Popup
