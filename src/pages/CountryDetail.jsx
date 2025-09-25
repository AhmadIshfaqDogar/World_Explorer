import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'

const CountryDetail = () => {
  const { code } = useParams()
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        setLoading(true)
        
        const apiEndpoints = [
          `https://restcountries.com/v3.1/alpha/${code}`,
          `https://restcountries.com/v2/alpha/${code}`
        ]
        
        let data = null
        let lastError = null
        
        for (const endpoint of apiEndpoints) {
          try {
            const response = await fetch(endpoint)
            if (response.ok) {
              const result = await response.json()
              data = Array.isArray(result) ? result[0] : result
              break
            }
          } catch (err) {
            lastError = err
          }
        }
        
       
        
        setCountry(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCountry()
  }, [code])

  // Helper function to get country data in consistent format
  const getCountryData = (country) => {
    if (!country) return null
    
    // Handle both v3 and v2 API formats
    return {
      name: country.name || { common: country.name, official: country.name },
      cca3: country.cca3 || country.alpha3Code,
      population: country.population,
      region: country.region,
      subregion: country.subregion,
      capital: Array.isArray(country.capital) ? country.capital : [country.capital],
      flags: country.flags || { png: country.flag },
      tld: country.tld || country.topLevelDomain,
      currencies: country.currencies,
      languages: country.languages,
      borders: country.borders
    }
  }

  const countryData = getCountryData(country)

  if (loading) return <LoadingSpinner />
  if (error) return <div className="text-center py-12 text-red-500">Error: {error}</div>
  if (!countryData) return <div className="text-center py-12">Country not found</div>

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link 
        to="/countries" 
        className="inline-flex items-center text-primary hover:text-secondary mb-8"
      >
        <i className="fas fa-arrow-left mr-2"></i> Back to Countries
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={countryData.flags.png} 
              alt={`Flag of ${countryData.name.common}`}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold mb-6">{countryData.name.common}</h1>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <p><span className="font-semibold">Official Name:</span> {countryData.name.official}</p>
                <p><span className="font-semibold">Population:</span> {countryData.population?.toLocaleString()}</p>
                <p><span className="font-semibold">Region:</span> {countryData.region}</p>
                <p><span className="font-semibold">Subregion:</span> {countryData.subregion}</p>
                <p><span className="font-semibold">Capital:</span> {countryData.capital?.[0] || 'N/A'}</p>
              </div>
              <div className="space-y-2">
                <p><span className="font-semibold">Top Level Domain:</span> {countryData.tld?.[0] || 'N/A'}</p>
                <p><span className="font-semibold">Currencies:</span> {countryData.currencies ? Object.values(countryData.currencies).map(c => c.name).join(', ') : 'N/A'}</p>
                <p><span className="font-semibold">Languages:</span> {countryData.languages ? Object.values(countryData.languages).join(', ') : 'N/A'}</p>
              </div>
            </div>
            
            {countryData.borders && countryData.borders.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Border Countries:</h3>
                <div className="flex flex-wrap gap-2">
                  {countryData.borders.map(border => (
                    <span key={border} className="bg-gray-100 px-3 py-1 rounded text-sm">
                      {border}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}




export default CountryDetail