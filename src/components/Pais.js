import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import "../country.css"
import Transicao from './transicao'
const Pais = () => {
  const [pais, setPais] = useState([])
  const { name } = useParams()

  useEffect(() => {
    const fetchPaisData = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
      )
      const pais = await response.json()
      setPais(pais)
    }

    fetchPaisData()
  }, [name])

  return (
    <>
      <section className="pais">
      <Link to="/" className="btn btn-light">
          <i className="fas fa-arrow-left"></i> Voltar
        </Link>
        {pais.map((c) => {
          const {
            numericCode,
            flag,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          } = c

          return (
            <article key={numericCode}>
              <div className="pais-inner">
                <div className="flag">
                  <img src={flag} alt={name} />
                </div>

                <div className="pais-detalhes">
                  <div>
          
                    <h2>{name}</h2>
                    <h5>
                      Nome Nativo: <span>{nativeName}</span>
                    </h5>
                    <h5>
                      População: <span>{population.toLocaleString()}</span>
                    </h5>
                    <h5>
                      Região: <span>{region}</span>
                    </h5>
                    <h5>
                      Sub-região: <span>{subregion}</span>
                    </h5>
                    <h5>
                      Capital: <span>{capital}</span>{" "}
                    </h5>
                  </div>

                  <div>
                    <h5>
                      Domínio de nível superior: <span>{topLevelDomain}</span>
                    </h5>
                    <h5>
                      Moedas: <span>{currencies[0].name}</span>
                    </h5>
                    <h5>
                      Línguas: <span>{languages[0].name}</span>
                    </h5>
                  </div>
                </div>
              </div>

              <div>
                <h3>Paises que fazem fronteiras: </h3>
                <div className="borders">
                  {borders.map((border) => {
                    return (
                      <ul key={border}>
                        <li>{border}</li>
                      </ul>
                    )
                  })}
                </div>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Pais
