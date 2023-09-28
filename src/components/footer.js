import "./footer.css"
import NavElements from "./navbar-elements";
import tktk from "../assets/images/tktk.png"
import insta from "../assets/images/instagram.png"
import twit from "../assets/images/twitter.png"
import link from "../assets/images/linkedin.png"
function Footer(){
    const navigation=[
        {
          first:"About",
          link:""
        },
        {
          first:"Games",
          link:"https://luckyegg.co/"
        },
        {
          first:"Amazon UK",
          link:"https://www.amazon.co.uk/stores/LuckyEgg/page/8B42D7A8-E9E6-4CF9-9344-8AA8A747F991?ref_=ast_bln"
        },
        {
          first:"Amazon USA",
          link:"https://www.amazon.com/stores/LuckyEgg/page/4EC94B4B-C421-48DF-8455-1A0CDF8CED53?ref_=ast_bln"
        },
        {
          first:"Socials",
          link:""
        },
      ]
    return(
        <div className="footer-body">
            <div className="footer-all">
                <div className="foot-mail">
                    <h2>For Questions <br></br><a href="mailto:ojadhav250@gmail.com">Ojadhav250@gmail.com</a></h2>
                </div>
                <div className="socials">
                    <div className="media"><a href=""><img src={tktk} width="30px"></img></a></div>
                    <div className="media"><a href=""><img src={insta} width="30px"></img></a></div>
                    <div className="media"><a href=""><img src={twit} width="30px"></img></a></div>
                    <div className="media"><a href=""><img src={link} width="30px"></img></a></div>
                </div>
                <div className="footer-navbar">
                <NavElements nav={navigation[0].first} link={navigation[0].link}></NavElements>
            <NavElements nav={navigation[1].first} link={navigation[1].link}></NavElements>
            <NavElements nav={navigation[2].first} link={navigation[2].link}></NavElements>
            <NavElements nav={navigation[3].first} link={navigation[3].link}></NavElements>
            <NavElements nav={navigation[4].first} link={navigation[4].link}></NavElements>
                </div>
            </div>
        </div>
    )
}
export default Footer;
