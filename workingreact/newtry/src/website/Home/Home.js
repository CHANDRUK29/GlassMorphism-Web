import React,{Component} from 'react';
import Navigation from '../Navigation/Navigation';
import Carosual from '../Home/Carosual';
import Marquee from '../Home/Marquee';
import Body from './Body';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return(

            <React.StrictMode>
                <Navigation/>
                <Carosual/>
                <Marquee/>
                <Body/>
                
            </React.StrictMode>
            // // <h1>Welcome</h1>
            // <div className='container-fluid well'>
            //     <h1 className="text text-center">Our services</h1>
            // </div>
        )
    }
}
export default Home;


// export default class Home extends Component {

//     constructor(props){
//         super(props);
//         this.state ={

//         }
//     }
    
//     render() {
//         return (
//             // <h1>Welcome</h1>
//             <header>
//             <img src="" class="profile-img"/>
//      <nav>
//       <ul>
//           <li><a href="#hero" style="color:white;">Home</a></li>
//           <li><a href="#service" style="color:white;">service</a></li>
//           <li><a href="#about" style="color:white;">About</a></li>
//           <li><a href="#contact" style="color:white;">Contact</a></li>
      
//         </ul>
//     </nav>
// </header>
//         );
//     }
// }