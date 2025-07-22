import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage'
import logo from '../react.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="React logo " />

                    <ul>

                        <li>
                            <NavLink to="/about" className="nav-active" >About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className="nav-active">Users</NavLink>
                        </li>

                        <li>
                            <NavLink to="/shopping" className="nav-active">Shopping</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element={<ShoppingPage />} />
                   
                    <Route path="/users" element={<ShoppingPage />} />

                    <Route path="/" element={<ShoppingPage />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}