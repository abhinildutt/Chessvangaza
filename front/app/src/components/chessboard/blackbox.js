import React from 'react';
import './blackbox.css';
import * as i from '../../assets/assets.js';

var map = {"bb" : i.bb, "bk" : i.bk, "bn" : i.bn, "bp" : i.bp, 
"bq" : i.bq, "br" : i.br, "wb" : i.wb, "wk" : i.wk, "wn" : i.wn, "wp" : i.wp
, "wq" : i.wq, "wr": i.wr};


export function Blackbox(props) {
    function renderimage(){
        if(props.text != "")
           return <img src = {map[props.text]} className = 'bimg'/>
        return null;
    }
    return (
        <div id = {props.id} className='blackbox'>
            {renderimage()}
        </div>
    );
} 
