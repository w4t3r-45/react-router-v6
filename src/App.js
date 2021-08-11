import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/dashboard';

function App() {
  return (
   <>
    <Router>
      <Routes>
          <Route path="/" element={<>Home component</>} />
         <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
