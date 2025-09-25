import React from 'react'
import { Link } from 'react-router-dom'

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.cca3}`}>
      <div className="country-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <div className="h-48 overflow-hidden">
          <img 
            src={country.flags.png} 
            alt={`Flag of ${country.name.common}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold mb-3 text-dark truncate">{country.name.common}</h3>
          <div className="space-y-1 text-sm text-gray-600">
            <p><span className="font-medium">Population:</span> {country.population?.toLocaleString() || 'N/A'}</p>
            <p><span className="font-medium">Region:</span> {country.region || 'N/A'}</p>
            <p><span className="font-medium">Capital:</span> {country.capital?.[0] || 'N/A'}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CountryCard