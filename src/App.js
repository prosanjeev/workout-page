
import { Link } from 'react-router-dom';
import './App.css';
import ChooseYourGoal from './components/ChooseYourGoal';
import GetBurn from './components/GetBurn';
import Login from './components/Login';
import Register from './components/Register';
import TrackGoal from './components/TrackGoal';
import WorkoutSchedule from './components/WorkoutSchedule';
import WorkoutTracker from './components/WorkoutTracker';

function App() {
  return (
    <div className="App">
       <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">All 7 Pages</h1>
      <div className="grid grid-cols-2 gap-2">
        <Link to="/page1" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Page 1
        </Link>
        <Link to="/page2" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Page 2
        </Link>
        <Link to="/page3" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Page 3
        </Link>
        <Link to="/page4" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Page 4
        </Link>
        <Link to="/page5" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Page 5
        </Link>
        <Link to="/page6" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Page 6
        </Link>
        <Link to="/page7" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Page 7
        </Link>
      </div>
    </div>
    {/* <TrackGoal/> */}
    {/* <GetBurn/> */}
    {/* <Register/> */}
    {/* <Login /> */}
    {/* <ChooseYourGoal /> */}
    {/* <WorkoutTracker/> */}
    {/* <WorkoutSchedule/> */}
    </div>
  );
}

export default App;
