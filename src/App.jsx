
import { useEffect, useState } from "react";
import Sticky from 'react-stickynode';
import './App.css';
import home from "../src/assets/home.png";
import lock from "../src/assets/Icon/lock.png";
// import './popup.css';
import Popup from "../src/Components/Popup.jsx";
import PopView from "../src/Components/Popview.jsx";
import Notes from "../src/Components/notes.jsx";

function App() {
  const [openPop, setOpenpop] = useState(false);
  const [groupNames, setGroupNames] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  // console.log("App - Current Groups:", groupNames);
  console.log("App - Selected Group:", selectedGroup);
  useEffect(() => {
    const savedGroups = JSON.parse(localStorage.getItem("groupNames")) || [];
    if (savedGroups.length > 0) {
      setGroupNames(savedGroups);
    }
    // setGroupNames(savedGroups);
    
    console.log("App - Loaded Groups from Storage:", savedGroups);
  }, []);

  // Save updated groups to localStorage whenever groupNames changes
  // useEffect(() => {
  //   localStorage.setItem("groupNames", JSON.stringify(groupNames));
  //   console.log("App - Saving Groups to Storage:", groupNames);
  // }, [groupNames]);
  useEffect(() => {
    if (groupNames.length > 0) {
      localStorage.setItem("groupNames", JSON.stringify(groupNames));
      console.log("App - Saving Groups to Storage:", groupNames);
    }
  }, [groupNames]);

  return (
    
      <div style={{
      display: 'flex',
      alignItems: 'center',
      minHeight: '100vh',
      maxHeight: '100vh',
      overflow: 'hidden',
      padding:'20px',
      justifyContent: "flex-start" 
    }}>
      <div className='left' style={{
        width: '30vw',
        // position: 'relative'
      }}>
        <Sticky enabled={true} top={0} innerz={1000}>
          <h1 style={{
            bottom: '35vh',
            position: 'sticky',
            // margin: '10px',
            // marginBottom: "90px",
            // top:'0.1vh',
            // bottom:'200px',
            alignItems: 'center',
            justifyContent: 'center',
            left: '7vw',
            // alignSelf: "flex-start"
          }}>
            Pocket notes
          </h1></Sticky>
          <div  style={{ flexGrow: 1, overflowY: "auto", paddingTop: "10px",maxHeight: "calc(100vh - 60px)"     }}>
          <PopView groupNames={groupNames}onSelectGroup={(group) => {
            console.log("App - Group Selected:", group); // ✅ Debug log
            setSelectedGroup(group);}} /></div>
          
      </div >
      
      <div style={{ flex: 1, padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        
        <button onClick={() => { setOpenpop(true); } } style={{
          backgroundColor: '#327eb0',
          border: 'none',
          width: '4rem',
          height: '4rem',
          borderRadius: '40px',
          fontSize: '3rem',
          color: 'White',
          bottom: '4vh',
          left: '45vh',
          position: 'absolute',
        }}>+</button>
      </div>
      <div className='right' style={{
        width: '75wh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // position:'relative',
        margin: '550px',
        padding: '20px',
        // gap:'0.5vh'
        gap: '1rem'
        // left:'200vw'
        // bottom:'50vh'
      }}>{selectedGroup ? (
        <> <h2 style={{ color: "black" }}>Notes for {selectedGroup.name}</h2>
        <Notes key={selectedGroup.name} selectedGroup={selectedGroup} /></>
      ) : (
        <>
        <img style={{
          // margintop:'20vh',
          width: '70vh',
          height: '35vh',
          // padding:'10px',
          // margin:'10px',
          // gap:'20rem',
          bottom: '45vh',
          position: 'absolute',
        }} src={home} alt="home" />
        <h1 style={{
          margin: '10px',
          bottom: '35vh',
          position: 'absolute',
          // alignContent:'center',
          // justifyContent: 'center',
          // alignItems:'center',
        }}>Pocket Notes</h1>
        <h5 style={{
          bottom: '30vh',
          position: 'absolute'
        }}>Send and recieve messages without keeping your phone online <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone</h5>
        <div className="desktop__home__bottom" style={{
          bottom: '7vh',
          position: 'absolute',
          // display: flex,
          alignContent: 'center',
          justifycontent: 'center',
          gap: ' 0.5rem',
          margintop: '10vh',
          fontsize: '1rem',
          fontWeight: '600'
        }}>
          <img style={{
            width: '1.2vw',
            height: '1.2vw'
          }} src={lock} alt="lock" />
          <span>end-to-end encrypted</span>
        </div>
        </>)}
      </div>
      {openPop && ( <Popup
        groupNamesParent={groupNames}
        setGroupNamesParent={setGroupNames} 
        onClose={() => setOpenpop(false)}/>)}
        
    </div>
  );
}

export default App
