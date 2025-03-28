import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [student, setStudent] = useState({
        name: "", email: "", phone: "", address: "", dob: "", course: "", password: ""
    });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://your-backend.onrender.com/api/students/register", student);
            alert("Student Registered Successfully!");
        } catch (error) {
            alert("Error: " + error.response.data.msg);
        }
    };

    return (
        <div>
            <h2>Student Registration</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
                <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
                <input type="date" name="dob" onChange={handleChange} required />
                <input type="text" name="course" placeholder="Course" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
// Compare this snippet from backend/server.js:
// const express = require("express");