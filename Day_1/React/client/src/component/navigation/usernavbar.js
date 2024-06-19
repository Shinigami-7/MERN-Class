import{useNavigate} from "react-router-dom"

const UserNavBar =() =>{
    const navigate = useNavigate()
    return(
        <>
            <div>
                <h2>LOGO</h2>
           <div onClick={()=> navigate("/")}>
                Home
            </div>
            <div onClick={()=> navigate("/services")}>
                Services
            </div>
            <div onClick={()=> navigate("/contact-us")}>
                Contact-us
            </div>
            </div>
        
        </>
    )
}
export default UserNavBar;