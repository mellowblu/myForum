import { Routes, Route } from "react-router-dom";
import ForumF from './pages/ForumF';
import ForumD from './pages/ForumD'; // Assuming ForumD is your discussion details component

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ForumF />} />
        <Route path="/discussionpost" element={<ForumD />} />
      </Routes>
     
    </>
  );  
}

export default App;
