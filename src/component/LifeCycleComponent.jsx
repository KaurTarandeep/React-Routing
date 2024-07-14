import {NavLink, Outlet} from 'react-router-dom';
function LifeCycleComponent(){
  return(
    <>
     <div className='container1'>
        <h1>Life Cycle Component</h1>
        <NavLink to="/mountcomponent"
        className='nav'> Mounting </NavLink>
        <NavLink to="/unmountcomponent"
          className='nav'> UnMounting </NavLink>
        <NavLink to="/updatecomponent"
          className='nav'> Updating </NavLink>
      </div>
      <div className='container2'>
      <Outlet/>
      </div>
    </>
  )
}

export default LifeCycleComponent;