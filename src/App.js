import React, { useState } from 'react';
import './App.css';

function Alkometri() {
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('male');
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(1);
  const [promille, setPromille] = useState(0);

  const calculate = () => {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);

    let result;
    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }

    // Ensure the result is not negative
    if (result < 0) {
      result = 0;
    }

    setPromille(result.toFixed(2));
  };

  return (
    <div id="container">
      <h1>Alkometri</h1>
      <div>
        <label>Paino (kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Sukupuoli:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label>Pullot:</label>
        <select value={bottles} onChange={(e) => setBottles(e.target.value)}>
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Aika(Tunteina):</label>
        <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>
      <button onClick={calculate}>Laske</button>
      <div>
        <p>Promille määrä: {promille}</p>
      </div>
    </div>
  );
}

export default Alkometri;