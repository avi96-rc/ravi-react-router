import "./styles.css";
import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AiiMeetups";
import Favourites from "./pages/Favourite";
import NewMeetups from "./pages/NewMeetups";

export default function App() {
  return (
    <div className="App">
      {" "}
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/new-meetup" element={<NewMeetups />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}
