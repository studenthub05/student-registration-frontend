import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get("https://your-backend.onrender.com/api/students")
            .then(res => setStudents(res.data))
            .catch(error => alert("Error: " + error.response.data.msg));
    }, []);

    return (
        <div>
            <h2>Registered Students</h2>
            <ul>
                {students.map((student) => (
                    <li key={student._id}>{student.name} - {student.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
// Compare this snippet from backend/models/Student.js:
// const mongoose = require("mongoose");