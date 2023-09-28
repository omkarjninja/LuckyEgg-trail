import "./content.css"
import logo from "../assets/images/logo.png"

function ContentHead(){
    return(
        <div>
            <div>
                <h1 className="content-title">We're Lucky Egg and we make Ridiculusly fun party games!</h1>
            </div>
            <div className="para-group">
            <p>Hover Me!</p>
            <p>For Surprise</p>
            </div>
            <img className="logo" src={logo} width="200px" height="200px"></img>
           <p className="scroll-text">Scroll to continue</p>
        </div>
    )
}
export default ContentHead;