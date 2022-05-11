import React,{Component} from "react";
import bodyimg from '../images/img4.jpeg';
import css from'./body.module.css';

export default class Body extends Component {
    
    render() {
        return (
            <React.StrictMode>
                <figure className="pos">
                    <img src ={`${bodyimg}`} class={css.profile} width="100%" height={'1000px'} ></img>
                    <figcaption>WELCOME to Rbp ItSolutions</figcaption>
                </figure>
               {/* <div class="container">
               <h1>About Me</h1>
                    <div class="row">
                    <div class="col-md-12">
                            <img style='float:left;width:200px;height:200px; margin-right:10px;' src={`${img1}`} />
                                <p>Lots of text here...With the four tiers of grids available you're bound to run into issues where, at certain breakpoints, your columns don't clear quite right as one is taller than the other. To fix that, use a combination of a .clearfix and o</p>
                    </div>
                </div>
               </div> */}
                    
                {/* <div className="section-inner">
                    <img className="profile-img" src={`${img1}`} width="100%">

                    <h1 className="animate-character">Welcome To RBP IT Solutions</h1>
                </div>      */}
                     
           
   
            </React.StrictMode>
        );
    }
}


{/* <div class="section-inner">
             
{/* <img src="./LOG copy 5 (1) (1).png" class="profile-imgs" style="margin-top: -306px;"/>
<img src="./LOG copy 5 (1) (1).png" class="profile-imgs" style="margin-top: -306vh;"/> */}
// <div style="margin-top: -85px;"><h1 class="animate-charcter" style="margin-top: -85px;">WELCOME TO RBP IT SOLUTION.</h1>
//           <img src="./Software-Development-Free-PNG-Image.png" class="item" style="padding-right: 30px;
//           width: 290px;
//           flex: 0 0 290px;
//           margin-bottom: -200px;margin-left: 200px;margin-right: 150px;"/>
//     </div>
//       </div> */}