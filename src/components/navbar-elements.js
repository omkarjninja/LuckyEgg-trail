import "./navbar.css";

function NavElements(props){
    return(
        <div>
            <div className="nav-ele">
                <a href={props.link}>{props.nav}</a>
            </div>
        </div>
    )
}
export default NavElements