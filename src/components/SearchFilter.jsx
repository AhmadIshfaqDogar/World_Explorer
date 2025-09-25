import React from 'react'

const SearchFilter = ({ searchTerm, setSearchTerm, filterRegion, setFilterRegion }) => {
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  return (
    <div className="mb-8 space-y-4 md:space-y-0 md:flex md:justify-between md:items-center">
      <div className="relative md:w-1/3">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className="fas fa-search text-gray-400"></i>
        </div>
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      
      <div className="relative md:w-1/4">
        <select
          value={filterRegion}
          onChange={(e) => setFilterRegion(e.target.value)}
          className="w-full px-4 py-3 rounded-lg shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
        >
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  )
}

export default SearchFilter