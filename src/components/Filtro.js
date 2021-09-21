import React, { useEffect } from "react"

const Filter = ({
  searchInput,
  setSearchInput,
  setFiltered,
  setPaises,
  paises,
}) => {
  const regions = [
    {
      name: "Filter by region",
      desc: "All",
    },
    {
      name: "Africa",
      desc: "Africa",
    },
    {
      name: "Americas",
      desc: "Americas",
    },
    {
      name: "Asia",
      desc: "Asia",
    },
    {
      name: "Europe",
      desc: "Europe",
    },
    {
      name: "Oceania",
      desc: "Oceania",
    },
  ]

  // Prevent page reload when submitting the form
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // Search countries
  const searchPaises = (searchValue) => {
    setSearchInput(searchValue)

    if (searchInput) {
      const filteredpaises = paises.filter((pais) =>
        Object.values(pais)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFiltered(filteredpaises)
    } else {
      setFiltered(paises)
    }
  }

  // Filter by region

  const filterRegions = async (region) => {
    const url = `https://restcountries.eu/rest/v2/region/${region}`
    const res = await fetch(url)
    const data = await res.json()
    setPaises(data)
  }

  useEffect(() => {
    filterRegions()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <form className="form" id="form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Pesquisar País"
          onChange={(e) => searchPaises(e.target.value)}
        />

        <div className="select">
          <select
            name="select"
            id="select"
            onChange={(e) => filterRegions(e.target.value)}
            value={regions.name}
          >
            <option value="Africa">África</option>
            <option value="Asia">Ásia</option>
            <option value="Europe">Europa</option>
            <option value="Americas">América</option>
            <option value="Oceania">Oceânia</option>
          </select>
        </div>
      </form>
    </>
  )
}

export default Filter
