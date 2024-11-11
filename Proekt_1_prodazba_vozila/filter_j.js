import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Slider from '@/components/ui/slider';
import Select from '@/components/ui/select';

const CarSearchPage = () => {
  const [model, setModel] = useState('');
  const [year, setYear] = useState([1900, 2024]);
  const [fuel, setFuel] = useState('');
  const [km, setKm] = useState([0, 200000]);

  // Sample car data
  const carData = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      fuel: 'Benzin',
      km: 35000,
      power: '190 PS (140 kW)',
      consumption: '8.1 l/100 km',
      imageUrl: '/api/placeholder/400/220'
    },
    // ... other car data
  ];

  // Filter the car data based on the selected options
  const filteredCars = carData.filter(car =>
    car.model.toLowerCase().includes(model.toLowerCase()) &&
    car.year >= year[0] && car.year <= year[1] &&
    car.fuel.toLowerCase().includes(fuel.toLowerCase()) &&
    car.km >= km[0] && car.km <= km[1]
  );

  return (
    <div>
      <div className="filter-container">
        <div className="filter-section">
          <h3>Marke & Modell</h3>
          <input
            type="text"
            placeholder="Suchen..."
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>

        <div className="filter-section">
          <h3>Aufbauart</h3>
          <Select
            value={fuel}
            onChange={(value) => setFuel(value)}
            options={['Alle', 'Limousine', 'SUV', 'Kombi']}
          />
        </div>

        <div className="filter-section">
          <h3>Jahr</h3>
          <div className="range-slider">
            <Slider
              min={1900}
              max={2024}
              value={year}
              onChange={setYear}
            />
            <div className="value-display">{year[0]} - {year[1]}</div>
          </div>
        </div>

        <div className="filter-section">
          <h3>Kilometerstand</h3>
          <div className="range-slider">
            <Slider
              min={0}
              max={200000}
              value={km}
              onChange={setKm}
            />
            <div className="value-display">{km[0].toLocaleString()} - {km[1].toLocaleString()} km</div>
          </div>
        </div>

        <button className="more-filters">Mehr Filter</button>
      </div>

      <div className="car-selection">
        {filteredCars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.imageUrl} alt={`${car.make} ${car.model}`} />
            <div>
              <h3>{car.make} {car.model}</h3>
              <p>{car.year} | {car.fuel} | {car.km.toLocaleString()} km</p>
              <p>{car.power}</p>
              <p>{car.consumption}</p>
              <button>Zu den Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(<CarSearchPage />);