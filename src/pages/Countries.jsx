import React, { useState, useMemo } from 'react'
import useCountries from '../hooks/useCountries'
import SearchFilter from '../components/SearchFilter'
import CountryCard from '../components/CountryCard'
import LoadingSpinner from '../components/LoadingSpinner'

const Countries = () => {
  const { countries, loading, error } = useCountries()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRegion, setFilterRegion] = useState('All')

  const filteredCountries = useMemo(() => {
    return countries.filter(country => {
      const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesRegion = filterRegion === 'All' || country.region === filterRegion
      return matchesSearch && matchesRegion
    })
  }, [countries, searchTerm, filterRegion])

  if (loading) return <LoadingSpinner />
  if (error) return <div className="text-center py-12 text-red-500">Error: {error}</div>

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <SearchFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterRegion={filterRegion}
        setFilterRegion={setFilterRegion}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCountries.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
      
      {filteredCountries.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No countries found matching your criteria.
        </div>
      )}
    </div>
  )
}

export default Countries