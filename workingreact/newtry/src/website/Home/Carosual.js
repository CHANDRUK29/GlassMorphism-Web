import React,{Component} from "react";
import homestyle from './home.module.css';
import img1 from '../images/image1.jpeg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image1.jpeg';

class Carosual extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <React.StrictMode>

            <div className="container-fluid">
                    <div className="row">
                        <div className="">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                {/* <!-- Indicators --> */}
                                <ol className="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                </ol>

                                {/* <!-- Wrapper for slides --> */}
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <img className={homestyle.sliderImg} src={`${img1}`} alt="Slider - 1"
                                        ></img>
                                    </div>

                                    <div className="item">
                                        <img className={homestyle.sliderImg} src={`${img1}`} alt="Slider - 2"
                                        ></img>
                                    </div>

                                    <div className="item">
                                        <img className={homestyle.sliderImg} src={`${img3}`} alt="Slider - 3"
                                        ></img>
                                    </div>
                                </div>

                                {/* <!-- Left and right controls --> */}
                                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        {/* <div className="col-md-3 thumbnail">
                            <div className="img-responsive">
                                <img src={`https://storage.googleapis.com/webdashboard/webhomeImages/websideposter.jpg`} height="525px" width="100%" alt="alt" className="img"></img>
                                <div className="caption bg-info">
                                    <h2 className="text text-center text-success">+91 9791805388</h2>
                                    <a href='https://play.google.com/store/apps/details?id=com.rbpinvestments.rbp' target='_blank'><img src='https://storage.googleapis.com/webdashboard/webhomeImages/slider2/slider2.jpg' width={'100%'} /></a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </React.StrictMode>
        )
    }

}

export default Carosual;