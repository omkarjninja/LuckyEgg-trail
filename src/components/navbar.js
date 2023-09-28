import "./navbar.css";
import NavElements from "./navbar-elements";
function Navbar(){
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
    <div>
        <div className="nav-first-group">
            <h1 className="navbar-title">Lucky<span>Egg</span></h1>
            <p className="navbar-para">Games are more<br></br> than Fun</p>
            <div className="nav-ele-group">
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
export default Navbar