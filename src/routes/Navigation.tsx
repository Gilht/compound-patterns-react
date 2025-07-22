import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Provisional } from '../02-component-patterns/provisional'
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
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element={<Provisional />}>
                   
                    </Route>
                    <Route path="/users" element={<Provisional />}>
                    </Route>

                </Routes>

            </div>
        </BrowserRouter>
    )
}