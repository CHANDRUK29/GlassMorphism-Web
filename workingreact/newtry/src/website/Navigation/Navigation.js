import React,{Component} from "react";
import { withRouter } from "react-router-dom";
import  '../Navigation/nav.module.css';

class Navigation extends Component{

    constructor(props){
        super(props);
        this.state ={
            home: props.page == '0' ? 'active' : '',
            service: props.page == '1' ? 'active' : '',
            about: props.page == '2' ? 'active' : '',
            contact: props.page == '3' ? 'active' : '',
            pdf: props.page =='4' ? 'active' : '',
            // about: props.page == '4' ? 'active' : '',
            // returnAndRefound: props.page == '5' ? 'active' : '',
            // termsAndConditions: props.page == '6' ? 'active' : '',
            // privacyPolicy: props.page == '7' ? 'active' : '',
            // logo_512: 'https://storage.googleapis.com/webdashboard/webhomeImages/logos/logo_512.png'
        }
    }

    routeEvent =(router)=>{
        this.props.history.push(`${router}`);
    }

    render(){
        const { home, service, about, contact, pdf, returnAndRefound, termsAndConditions, privacyPolicy, logo_512 } = this.state;
        return(
            <React.StrictMode>
                <div className="">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-dark bg-primary" style={{backgroundColor:"#002e5b"}}>
                                <div className="navbar-header">
                                    <button className="navbar-toggle" data-toggle="collapse" data-target="#mynavbar">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    {/* <a onClick={() => this.routeEvent('home')} href=""><img className={`navbar-brand ${navigation.logo}`} src={logo_512} /></a> */}
                                </div>
                                <div className="collapse navbar-collapse" id="mynavbar" >
                                    <ul className="nav navbar-nav">
                                        <li onClick={() => this.routeEvent('home')}><a href="">RBP ItSolutions</a></li>
                                        <li className={home} onClick={() => this.routeEvent('home')}><a href='' >Home</a></li>
                                        <li className={service} onClick={() => this.routeEvent('service')}><a href=''>Service</a></li>
                                        <li className={about} onClick={() => this.routeEvent('about')}><a href="">About</a></li>
                                        <li className={contact} onClick={() => this.routeEvent('contact')}><a href="">Contact</a></li>
                                        <li className={pdf} onClick={() => this.routeEvent('pdf')}><a href="">PDF</a></li>

                                        {/* <li className={about} onClick={() => this.routeEvent('about')}><a href="">About</a></li>
                                        <li className={returnAndRefound} onClick={() => this.routeEvent('returnandrefound')}><a href="">Return&Refund</a></li>
                                        <li className={termsAndConditions} onClick={() => this.routeEvent('termsandconditions')}><a href="">Terms&Conditions</a></li>
                                        <li className={privacyPolicy} onClick={() => this.routeEvent('privacypolicy')}><a href="">PrivacyPolicy</a></li> */}
                                        {/* <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Courses<span className="caret"></span></a>
                                            <ul className="dropdown-menu" role="menu">
                                                <li><a href="#">C</a></li>
                                                <li><a href="#">C++</a></li>
                                                <li><a href="#">Javsa</a></li>
                                                <li><a href="#">JavaScript</a></li>
                                            </ul>
                                        </li> */}
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li onClick={() => this.routeEvent('login')} style={{ marginRight: '15px' }}><a href=""><i className="glyphicon glyphicon-log-in"> Login</i></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>


            </React.StrictMode>
        )
    }

}

export default withRouter(Navigation);