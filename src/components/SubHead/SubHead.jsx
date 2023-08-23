import React from 'react'
import "./SubHead.css"
const SubHead = ({title}) => {
  return (
    <div style={{marginBottom:"1rem"}}>
      <p className='p_font'>
        {title}
      </p>
      <img src='/Restaurant.png' style={{width:"10%"}} alt='' className='p_img'/>
    </div>
  )
}

export default SubHead