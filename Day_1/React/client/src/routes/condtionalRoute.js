import { Route,Routes } from "react-router-dom"
import Home from "../pages/01-homePage"
import Services from "../pages/02-servicespage"
import Contactus from "../pages/03-contactpage"


function CondtionalRoute(){

    return(<>
    
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/contact-us' element={<Contactus/>}/>
        </Routes>
    </>)

}

export default CondtionalRoute