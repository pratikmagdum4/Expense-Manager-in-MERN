import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ExpenseTracker from './components/ExpenseTracker.jsx';
import './App.css';
import Home from './components/Home.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tracker" element={<ExpenseTracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
