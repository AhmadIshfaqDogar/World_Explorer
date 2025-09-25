import { useState, useEffect } from 'react'

const useCountries = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true)
        
        // Try multiple API endpoints for reliability
        const apiEndpoints = [
          'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,cca3,population',
          'https://restcountries.com/v2/all'
        ]
        
        let data = null
        let lastError = null
        
        for (const endpoint of apiEndpoints) {
          try {
            const response = await fetch(endpoint)
            if (response.ok) {
              data = await response.json()
              break
            }
          } catch (err) {
            lastError = err
            console.log(`Failed with ${endpoint}, trying next...`)
          }
        }
        
        if (!data) {
          // If all APIs fail, use fallback data
          data = getFallbackCountries()
          console.log('Using fallback data')
        }
        
        setCountries(data)
      } catch (err) {
        setError(err.message)
        // If everything fails, use fallback data
        setCountries(getFallbackCountries())
      } finally {
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  return { countries, loading, error }
}

// Fallback data in case APIs are down
 const getFallbackCountries = () => {
//   return [
//     {
//       name: { common: 'United States', official: 'United States of America' },
//       cca3: 'USA',
//       population: 331002651,
//       region: 'Americas',
//       capital: ['Washington, D.C.'],
//       flags: { png: 'https://flagcdn.com/w320/us.png' }
//     },
//     {
//       name: { common: 'Canada', official: 'Canada' },
//       cca3: 'CAN',
//       population: 38005238,
//       region: 'Americas',
//       capital: ['Ottawa'],
//       flags: { png: 'https://flagcdn.com/w320/ca.png' }
//     },
//     {
//       name: { common: 'United Kingdom', official: 'United Kingdom of Great Britain and Northern Ireland' },
//       cca3: 'GBR',
//       population: 67215293,
//       region: 'Europe',
//       capital: ['London'],
//       flags: { png: 'https://flagcdn.com/w320/gb.png' }
//     },
//     {
//       name: { common: 'Germany', official: 'Federal Republic of Germany' },
//       cca3: 'DEU',
//       population: 83240525,
//       region: 'Europe',
//       capital: ['Berlin'],
//       flags: { png: 'https://flagcdn.com/w320/de.png' }
//     },
//     {
//       name: { common: 'France', official: 'French Republic' },
//       cca3: 'FRA',
//       population: 67391582,
//       region: 'Europe',
//       capital: ['Paris'],
//       flags: { png: 'https://flagcdn.com/w320/fr.png' }
//     },
//     {
//       name: { common: 'Japan', official: 'Japan' },
//       cca3: 'JPN',
//       population: 125836021,
//       region: 'Asia',
//       capital: ['Tokyo'],
//       flags: { png: 'https://flagcdn.com/w320/jp.png' }
//     },
//     {
//       name: { common: 'Australia', official: 'Commonwealth of Australia' },
//       cca3: 'AUS',
//       population: 25687041,
//       region: 'Oceania',
//       capital: ['Canberra'],
//       flags: { png: 'https://flagcdn.com/w320/au.png' }
//     },
//     {
//       name: { common: 'Brazil', official: 'Federative Republic of Brazil' },
//       cca3: 'BRA',
//       population: 212559409,
//       region: 'Americas',
//       capital: ['Brasília'],
//       flags: { png: 'https://flagcdn.com/w320/br.png' }
//     },
//     {
//       name: { common: 'India', official: 'Republic of India' },
//       cca3: 'IND',
//       population: 1380004385,
//       region: 'Asia',
//       capital: ['New Delhi'],
//       flags: { png: 'https://flagcdn.com/w320/in.png' }
//     },
//     {
//       name: { common: 'China', official: "People's Republic of China" },
//       cca3: 'CHN',
//       population: 1402112000,
//       region: 'Asia',
//       capital: ['Beijing'],
//       flags: { png: 'https://flagcdn.com/w320/cn.png' }
//     },
//     {
//       name: { common: 'South Africa', official: 'Republic of South Africa' },
//       cca3: 'ZAF',
//       population: 59308690,
//       region: 'Africa',
//       capital: ['Pretoria', 'Bloemfontein', 'Cape Town'],
//       flags: { png: 'https://flagcdn.com/w320/za.png' }
//     },
//     {
//       name: { common: 'Egypt', official: 'Arab Republic of Egypt' },
//       cca3: 'EGY',
//       population: 102334403,
//       region: 'Africa',
//       capital: ['Cairo'],
//       flags: { png: 'https://flagcdn.com/w320/eg.png' }
//     }
//   ]
 }

export default useCountries