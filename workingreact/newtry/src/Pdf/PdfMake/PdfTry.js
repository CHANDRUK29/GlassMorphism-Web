import React,{Component} from 'react';
import pdfMake from 'pdfmake/build/pdfmake.js';
import pdfFonts from 'pdfmake/build/vfs_fonts.js';
import {content} from '../content/Content.js';
import {footer} from '../content/Footer';
import imag from '../../website/images/img3.jpeg';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default class PdfTry extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

        makepdf = async() => {
            var docDefinition = {
                permission :{
                    printing: 'highResolution', //'lowResolution'
                    modifying: false,
                    copying: false,
                    annotating: true,
                    fillingForms: true,
                    contentAccessibility: true,
                    documentAssembly: true
                },
                watermark :{ text: 'RBP INVESTMENTS PVT LTD', color: 'red', opacity: 0.05, bold: true, italics: false },
                content: content(),
                footer : footer(),
                pageMargins: [14, 14, 14, 70],
                    
           };
           pdfMake.createPdf(docDefinition).open();
            
        }
 

    render(){
        return(
            <React.StrictMode>
                <button type="button" class="btn btn-primary" onClick={this.makepdf}>Primary</button>
            </React.StrictMode>
        )
    }
}

// export default PdfTry;


// var pdfMake = require('pdfmake/build/pdfmake.js');
// var pdfFonts = require('pdfmake/build/vfs_fonts.js');
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// const pdfTry = async()=>{

//     var docDefinition ={
//         Permissions:{
//             printing :'highResolution',
//             modifying : false,
//             copying : false,
//             annotating : true,
//             fillingForms: true,
//             contentAccessibility : true,
//             documentAssembly : true,
//             watermark: { text: 'RBP INVESTMENTS PVT LTD', color: 'red', opacity: 0.1, bold: true, italics: false },
//             content:['hello world'],

//         }

//     }
//     pdfMake.createPdf(docDefinition).open();
// }

// module.exports={pdfTry};