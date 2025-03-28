import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import StudentList from "./components/StudentList";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/students" element={<StudentList />} />
            </Routes>
        </Router>
    );
}

export default App;
