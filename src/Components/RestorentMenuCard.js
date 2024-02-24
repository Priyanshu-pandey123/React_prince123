import React from "react"
import RouterDOM from "react-dom/client";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";


const RestorentMenuCard=()=>{

    const [resInfo,setresInfo]=useState(null);
    const {id}=useParams();
    console.log('param',id);
    const menu=resInfo?.cards[2]?.card?.card?.info;
    
    useEffect(()=>{
    fetchMenu();

    },[]);

        const fetchMenu=async()=>{
            const data= await fetch(  MENU_API + id );
            console.log(id,"id");
             const json = await data.json();
             console.log(json);
             setresInfo(json.data);
             console.log(resInfo,"info");
        }

        if(resInfo===null){
            return <Shimmer/>
        }

        const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
        console.log(itemCards,"itemCard");
    return (
        <div>
            <h1>{menu?.name}</h1>
        
            <h3>{menu?.cuisines.join(',')}-{menu?.costForTwoMessage}</h3>
        
           
            <ul> 
             {itemCards.map((item)=>
                    <li key={item.card.info.id}>{item.card.info.name}-{item.card.info.price || item.card.info.defaultPrice}</li>
             )}  
               
          </ul>
        </div>
    )
}

export default RestorentMenuCard;