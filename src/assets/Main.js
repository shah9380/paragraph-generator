import Para from './Para';
import ParagraphList from '../Paragraphs.json';
import { useState } from 'react';

const Main = (props)=>{
        console.log(props.nums,"Hi llskd");
        if(props.nums>8){
            alert("O bhau ye kya hai 8 paragraph zyada nai hora");
        }
    const limitedList = ParagraphList.slice(0, props.nums);
    return(
        <div>
            {
                limitedList.map((data, index)=>{
                    return (<Para content={data.content} paranumber={index+1} id={Date.now()} ></Para>)
                }
                    
                )
            }
        </div>
    )
};
export default Main;