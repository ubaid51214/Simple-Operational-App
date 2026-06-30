import React from 'react'
// import { Link } from 'react-router-dom'
function Nav(props) {
  return (
     <div className={`navbar-${props.mode === 'light' ? '#00b7ff' : 'dark'} bg-${props.mode}`} style={{ height: '35px' }} >
                <ul style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', margin: '-2px 0px 0px 0px', paddingTop: '5px', color: '#03658C' }}>
                    <li style={{ listStyle: 'none', margin: '0px 0px 0px -15px' }}>
                        <a style={{textDecoration:'none',color: '#03658C' }} href='#'>
                                                   HOME
 
                        </a>
                    </li >
                    {/* <li style={{ margin: '0px 0px 0px 20px', listStyle: 'none' }}>
                        <Link style={{textDecoration:'none',color: '#03658C' }} to='/about'>
                           ABOUT 
                        </Link>
                        
                    </li>
                    <li style={{ margin: '0px 0px 0px 20px', listStyle: 'none' }}>
                        <Link style={{textDecoration:'none',color: '#03658C' }} to='contact' >
                            CONTACT
                        </Link>
                        
                    </li> */}
                </ul>
                <div className='container'>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ margin: '-25px 0px 0px 1070px' }}>
                        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="switchCheckDefault" />
                        <label className="form-check-label" htmlFor="switchCheckDefault">Darkmode</label>
                    </div>
                </div>

            </div>
  )
}

export default Nav
