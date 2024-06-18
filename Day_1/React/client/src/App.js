import './App.css';
import{ Route, Routes} from "react-router-dom";
import CondtionalRoute from './routes/condtionalRoute';
import UserNavBar from "./component/navigation/usernavbar";


function App() {
  return (
    <div className="App">
      <UserNavBar/>
      <Routes>
        <Route path='/*' element={<CondtionalRoute />}/>
      </Routes>
    </div>
  );
}

export default App;
