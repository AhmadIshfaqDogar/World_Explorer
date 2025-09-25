import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6">
          Explore the World
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover detailed information about every country. Learn about populations, 
          capitals, currencies, and much more with our comprehensive country database.
        </p>
        <Link 
          to="/countries"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary transition duration-300"
        >
          Start Exploring
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-search text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Easy Search</h3>
            <p className="text-gray-600">Quickly find any country with our powerful search functionality.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-filter text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Filter by Region</h3>
            <p className="text-gray-600">Browse countries by continent with our region filter.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-info-circle text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Detailed Information</h3>
            <p className="text-gray-600">Get comprehensive details about each country's demographics and geography.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Global Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary">250+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">7</div>
              <div className="text-gray-600">Continents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">8B+</div>
              <div className="text-gray-600">Population Data</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-gray-600">Currencies</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home