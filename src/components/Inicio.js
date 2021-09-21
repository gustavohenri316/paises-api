import React from 'react'
import Modal from './modal'
import Transicao from './transicao'

const Header = () => {
  const changeTheme = () => {
    const header = document.querySelector(".header")
    const details = document.querySelectorAll('.details')
    const uls = document.querySelectorAll("ul")
    
  }

  return (
    <>
      <header className="inicio">
        <div>
    
          <Transicao/>
          <h1>Encontre informações sobre os países que deseja.</h1>

        </div>
      </header>
    </>
  )
}

export default Header
