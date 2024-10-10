import React from 'react'

const Footer = (props) => {
  const {showModel , handleDisplayModel,data} = props

  return (
    <footer>
      <div className="bgGradient"></div>
        <div>
            <h2>{data?.title}</h2>
            <h1>APOD Project</h1>
        </div>
        <button onClick={handleDisplayModel}>
          <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer> 
  )
}

export default Footer
