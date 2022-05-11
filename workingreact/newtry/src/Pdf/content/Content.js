import {header, headerInfo, line,clientFolio}  from './Header';
import {to, address1,address2,address3,address4,addline} from './Address';
import {tablehead} from './Table';
import { clientheading } from './clientHead';
import{ clienttable1} from './clientTable';
import{ tdsline, notes, note1, note2,forline} from './Tds';
import {sign,author,tan,mobile,email,email1} from './signature';
// import{tablenewhead} from './newtable';

export const content = ()=>[
    header(),
    // headerInfo(),
    line(),
    clientFolio(),
    to(),
    address1(),
    address2(),
    address3(),
    address4(),
    addline(),
    tablehead(),
    clientheading(),
    clienttable1(),
    tdsline(),
    notes(),
    note1(),
    note2(),
    forline(),
    sign(),
    author(),
    tan(),
    mobile(),
    email(),
    email1()

]
   
