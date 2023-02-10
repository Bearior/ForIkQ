import React, { useState } from "react";
import app from "../../firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const Upload = () => {
  const [PH1, setPH1] = useState("");
  const [PH2, setPH2] = useState("");
  const [PH3, setPH3] = useState("");
  const [file, setFile] = useState(null);
  const [base64, setBase64] = useState(null);

  console.log(PH1);
  console.log(PH2);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
        const base64 = fileReader.result;
        setBase64(base64);
        console.log(base64)
    };
};

  const Submithandle = () => {
    const db = app.firestore();
    setPH1("");
    setPH2("");
    setPH3("");

    

    
    const fileRef = db.collection("IKQ").doc(); 
        fileRef.set({ 
        PH1 : PH1,
        PH2 : PH2,
        PH3 : PH3,
        File : base64
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

        <label> Picture upload
           <input type="file" 
           onChange={handleChange}
           value={PH3}/>
        </label><br></br>
        <button onClick={Submithandle}> Submit</button>
      
      
      
    </>
   
  );
}

export default Upload;