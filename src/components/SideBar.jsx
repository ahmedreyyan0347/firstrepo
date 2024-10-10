import React from 'react'

const SideBar = (props) => {

  const { handleDisplayModel ,data } = props
  return (
    <div className='sidebar'>
      <div className="bgOverlay" onClick={handleDisplayModel}></div>
      <div className="sidebarContents" >
      <h2>{data?.title}</h2>
      <div className='DescriptionContainer'>
        <p className='descriptionTitle'>{data?.date}</p>
        <p>{data?.explanation}</p>
      </div>
      <button>
        <i onClick={handleDisplayModel} className="fa-solid fa-arrow-right"></i>
      </button></div>
    </div>
  )
}

export default SideBar
