import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Filter from "./Filtro"


const url = "https://restcountries.eu/rest/v2/all"

const Paises = () => {
  const [paises, setPaises] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPaises = async () => {
      const response = await fetch(url)
      const paises = await response.json()
      setPaises(paises)
      setIsLoading(false)
    }

    fetchPaises()
  }, [])



  return (
    <>
      <Filter
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setFiltered={setFiltered}
        setPaises={setPaises}
        paises={paises}
      />
      {isLoading ? (
        <h1 className="loading">Carregando...</h1>
      ) : searchInput.length > 1 ? (
        <section className="paises">
          {filtered.map((country) => {
            const { numericCode, name, flag, population, region, capital } =
              country

            return (
              <Link to={`/countries/${name}`} key={numericCode}>
                <article>
                  <div className="flag">
                    
                    <img src={flag} alt={name} />
                  </div>
                  <div className="detalhes">
                    <h4 className="pais-name">
                      Nome: <span>{name}</span>
                    </h4>
                    <h4>
                      População: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Regiao: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </article>
              </Link>
            )
          })}
        </section>
      ) : (
        <section className="paises">
          {paises.map((pais) => {
            const { numericCode, name, flag, population, region, capital } =
              pais

            return (
              <Link to={`/countries/${name}`} key={numericCode}>
                <article>
                  <div className="flag">
                    <img src={flag} alt={name} />
                  </div>
                  <div className="detalhes">
                    <h4 className="pais-name">
                      Nome: <span>{name}</span>
                    </h4>
                    <h4>
                      População: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Região: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </article>
              </Link>
            )
          })}
        </section>
      )}
    </>
  )
}

export default Paises
