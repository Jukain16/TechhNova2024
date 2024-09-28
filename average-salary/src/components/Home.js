import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        position: '',
        range: '',
        location: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/results', { state: formData })
    }

    return (
        <div className="home-container">
            <h1>Find Your Average Salary</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="position">Position:</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                        placeholder="e.g, Software Engineer"
                    />
                </div>
                <div>
                    <label htmlFor="range">Position:</label>
                    <select
                        id="range"
                        name="range"
                        value={formData.range}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Average Range</option>
                        <option value="Low_Wage_Salaire_Minium">Low</option>
                        <option value="Median_Wage_Salaire_Median">Median</option>
                        <option value="High_Wage_Salaire_Maximal">High</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Location</option>
                        <option value="Toronto">Toronto</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value="Kitchener--Waterloo--Barrie">Kitchener-Waterloo-Barrie</option>
                        <option value="Montréal">Montréal</option>
                        <option value="Ottawa">Ottawa</option>
                        <option value="Calgary">Calgary</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Home;