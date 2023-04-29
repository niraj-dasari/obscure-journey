import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Employees from './components/Employees';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import NoPage from './components/NoPage';
import Employee_details from './components/widgets/Employee-details';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="certification" element={<Certifications />} />
          <Route path="project" element={<Projects />} />
          <Route path="*" element={<NoPage />} />
          <Route path='/employees/details' element={<Employee_details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
