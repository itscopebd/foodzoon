import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';

const Header = () => {
    const { user,userLogOut } = useContext(AuthContext);
const navigate=useNavigate()
   const handleLogOut=()=>{
    userLogOut()
    .then(result=>{
        navigate("/login")
    }).catch(error=>{

    })
   }


    // const {displayName,photoURL}=user;
    // console.log(displayName)
    return (
        <div className='bg-neutral-900'>
            <div className='container mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-neutral-900 rounded-box w-52">
                                <li> <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-500" : "text-white")}>Home</NavLink> </li>

                                <li> <NavLink to="/blog" className={({ isActive }) => (isActive ? "text-blue-500" : "text-white")}>Blog</NavLink> </li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl custom__animation">FoodZoon</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 bg-neutral-900">
                        <li> <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-500" : "text-white")}>Home</NavLink> </li>


                        <li> <NavLink to="/blog" className={({ isActive }) => (isActive ? "text-blue-500" : "text-white")}>Blog</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end">


                        {
                            user &&  user ? <><label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                               
                               <div className="w-10 rounded-full" title={user?.displayName}>
                                    
                                    <img src={user?.photoURL} />
                                    
                                </div>
                               
                               

                               
                            </label> <button className="btn btn-warning text-white" onClick={handleLogOut}>Log Out</button></> :
                            <><Link to="/login" className="btn btn-warning text-white">LogIn</Link></>
}


                        
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;