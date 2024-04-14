import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import TrackGoal from './components/TrackGoal';
import GetBurn from './components/GetBurn';
import Register from './components/Register';
import Login from './components/Login';
import WorkoutTracker from './components/WorkoutTracker';
import WorkoutSchedule from './components/WorkoutSchedule';
import ChooseYourGoal from './components/ChooseYourGoal';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App />}>
      
    </Route>
      <Route path="/page1" element={<TrackGoal />} />
      <Route path="/page2" element={<GetBurn />} />
      <Route path="/page3" element={<Register />} />
      <Route path="/page4" element={<Login />} />
      <Route path="/page5" element={<ChooseYourGoal />} />
      <Route path="/page6" element={<WorkoutTracker />} />
      <Route path="/page7" element={<WorkoutSchedule />} />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
