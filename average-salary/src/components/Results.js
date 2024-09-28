

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import sweSalaries from '../data/swe-salaries.json'; 

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { position, range, location: userLocation } = location.state || {};
  const [averageSalary, setAverageSalary] = useState(null);
  const [salaryRange, setSalaryRange] = useState(null);
  const [dataCount, setDataCount] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!position || !range || !userLocation) {
      setError('Missing search criteria. Please go back and enter all fields.');
      return;
    }
  
    const pos = position.toLowerCase();
    const lvl = range; // use range as a key, no need to lowercase
    const loc = userLocation.toLowerCase();
  
    const filteredData = sweSalaries.filter((item) => {
      return (
        item.NOC_TITLE_FRA.toLowerCase().includes(pos) && 
        item[lvl] && // use correct salary key (Low, Median, High)
        item.ER_Name.toLowerCase() === loc // match location
      );
    });
  
    if (filteredData.length === 0) {
      setError('No data found for the selected criteria.');
    } else {
      const salaries = filteredData.map((item) => item.Average_Wage_Salaire_Moyen);
      const avg = salaries.reduce((acc, curr) => acc + curr, 0) / salaries.length;
      const min = Math.min(...salaries);
      const max = Math.max(...salaries);
      setAverageSalary(avg.toFixed(2));
      setSalaryRange(`${min} - ${max}`);
      setDataCount(salaries.length);
    }
  }, [position, range, userLocation]);

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="results-container">
      <h1>Salary Results</h1>
      {error ? (
        <div>
          <p>{error}</p>
          <button onClick={handleGoBack}>Go Back</button>
        </div>
      ) : averageSalary !== null ? (
        <div>
          <p>
            The average salary for a <strong>{range}</strong> <strong>{position}</strong> in{' '}
            <strong>{userLocation}</strong> is:
          </p>
          <h2>${averageSalary}</h2>
          <p>Salary Range: ${salaryRange}</p>
          <p>Based on {dataCount} data point(s).</p>
          <button onClick={handleGoBack}>Search Again</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Results;
