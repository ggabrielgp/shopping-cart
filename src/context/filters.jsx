import { createContext, useState } from 'react'

// SINGLETON -> Modulo de Javascript

// este se consume
export const FiltersContext = createContext()

// este nos provee de acceso al contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
