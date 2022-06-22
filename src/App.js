import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from '../src/Components/Pages/Header/Header';
function App() {
  return (
    <div className="">
      {/* <h1>Landing page</h1> */}
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
