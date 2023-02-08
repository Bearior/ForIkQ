import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const Upload = () => {
  const [PH1, setPH1] = useState("");
  const [PH2, setPH2] = useState("");
  const [PH3, setPH3] = useState("");
  console.log(PH1);
  console.log(PH2);

  const Submithandle = () => {
    const db = firebase.firestore();
    setPH1("");
    setPH2("");
    setPH3("");

    

    
    const fileRef = db.collection("IKQ").doc(); 
        fileRef.set({ 
        PH1 : PH1,
        PH2 : PH2,
        PH3 : PH3
      });
      
      alert("Data uploaded");
  }

  return (
    <>
      <div>hello</div>
        
          <label> PH1

           <input type="text" 
              onChange={(e) => setPH1(e.target.value)}
              value={PH1}
           />
        </label><br></br>
        
        <label> PH2
          <input type="text"
            onChange={(e) => setPH2(e.target.value)}
            value={PH2}/>
        </label><br></br>


        <label> PH3
           <input type="text" 
           onChange={(e) => setPH3(e.target.value)}
           value={PH3}/>
        </label><br></br>
        <button onClick={Submithandle}> Submit</button>
      
      
      
    </>
   
  );
}

export default Upload;