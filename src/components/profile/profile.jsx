import React from 'react'
import propTypes from 'prop-types'
const profile = ({fullName , bio , profession}) => {
  function handleName(e)
  {
    alert(fullName)
    e.preventDefault( )
  }
  return (
    <div onClick={handleName} style={{cursor:'pointer',color:'#fff',backgroundColor:'#5E8C61',width:'500px',borderRadius:'20px', height:'auto',display:"flex",alignItems:'center',justifyContent:'space-around'}}>
      <div className='text'>
        <h1>{fullName}</h1>
        <h3>{profession}</h3>
        <p>{bio}</p>
      </div>
      <img src="https://m.media-amazon.com/images/I/718hsRQzjvL._SL1400_.jpg" alt="" width="100px" height="auto" style={{borderRadius:'50%'}}/>
      
    </div>
  )
}
profile.defaultProps = {
  fullName:'Amir',
  bio:'A very nice person',
  profession:'Singer'
} 
profile.propTypes = {
  fullName:propTypes.string,
  bio:propTypes.string,
  profession:propTypes.string
}
export default profile