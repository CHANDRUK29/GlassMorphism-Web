import React,{Component} from "react";

class Marquee extends Component{

    render(){
        return(
            <React.StrictMode>

                <div className="container-fluid m-5" style={{ backgroundColor: 'green', height: 'auto' }}>
            <marquee className="text text-center p-2" style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', textStyle: 'bold' }}>
            RBP INVESTMENTS PVT LTD WORK ON MODERN IDEAS WITH THE BEST INVESTMENTS RICHER JOURNEY THAT LEADS TO SUCCESS  </marquee>
        </div>
            </React.StrictMode>
        )
    }

}

export default Marquee;