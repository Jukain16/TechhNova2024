import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Home.css';

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
            <div className="search-container">
                <p>✦ Together for Equal Pay</p>
                <h1>Find Her Worth</h1>
                <p>atform empowers women by providing data-driven insights into how much they should be earning based on their role, industry and location helping to bridge the gender pay gap. By offering transparent comparisons, we encourage women to confidently negotiate their salaries, backed by real numbers and statistics, fostering greater equity in the workplace.</p>
                <h1>Find Your Average Salary</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            required
                            placeholder="Search role..."
                        />
                    </div>

                    <div>
                        <select
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Choose location</option>
                            <option value="Toronto">Toronto</option>
                            <option value="British Columbia">British Columbia</option>
                            <option value="Kitchener--Waterloo--Barrie">Kitchener-Waterloo-Barrie</option>
                            <option value="Montréal">Montréal</option>
                            <option value="Ottawa">Ottawa</option>
                            <option value="Calgary">Calgary</option>
                        </select>
                    </div>

                    <div>
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

                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Home;