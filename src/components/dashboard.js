import { Routes, Route, Link } from 'react-router-dom';
import Overview from './overview';
import Status from './status';
import Views from './views';

export default function Dashboard() {
  return (

    <>
      
      <nav>
        <Link to="status">status </Link>
        <Link to="views">Views</Link>
      </nav>
      this is dashboard corps
        <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="status" element={<Status />} />
            <Route path="views" element={<Views />} />
      </Routes>
    </>
  )
}