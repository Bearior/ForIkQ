import './App.css';
import Upload from './components/Pages/UploadData';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
 
  return (
      <Router>
        <div>        
          <Route exact path="/" component={Upload} />      
        </div>
      </Router>
   
  );
}

export default App;
