
import React from "react";
import ReactDOM from "react-dom/client";
import { useState,useEffect} from 'react';
import RestaurantCard from "./RestoCard";
import resList from '../utils/mockData';
import Shimmer from "./Shimmer";



// const Body = () => {
  
//   const [listOfRestaurants, setListOfRestaurants] = useState(resList);
//   const [searchText,setsearchText]=useState('');

//   // useEffect(()=>{
//   //   fetchData();
//   // },[]);

 
//   // const fetchData = async () => {
//   //   const data = await fetch(
//   //     'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
//   //   );
//   //   const json= await data.json();
//   //    console.log(json);
//   //   setListOfRestaurants(resList);
//   //   }

//       if (listOfRestaurants.length === 0) {
//        return <Shimmer />;
//       }
      
//     return (

//       <div className="body">

       
      
//       <div className="filter">

//       <div className="search">
//           <input type="text" value={searchText} 

//             onChange={(e)=>{
//               setsearchText(e.target.value);

//             }}

//           />
//           <button className="search-btn" onClick={()=>{

//              const filterdRes= listOfRestaurants.filter(
//               (res)=>{
//                 res.data.name.includes(searchText);    
//                 console.log(res.data.name);
//                 console.log
//               });
//             setListOfRestaurants(filterdRes);
//             console.log(filterdRes);
//           }}
//           >Search
          
//           </button>
//         </div>

//         <button
//           className="filter-btn"
//           onClick={() => {
       
//             const filteredList = listOfRestaurants.filter(
//               (res) => res.data.avgRating > 4
//             );

//             setListOfRestaurants(filteredList);
//             console.log(filteredList);
//           }}
//         >
//           Top Rated Restaurants
//         </button>
//       </div>
//       <div className="res-container">
        

//         {listOfRestaurants.map((restaurant) => (
//           <RestaurantCard key={restaurant.data.id} resData={restaurant} />
//         ))}
//       </div>
//     </div>
//     );

// };

// export default Body;

const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State Variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [filteredRestaurant, setFilteredRestaurant] = useState(resList);

  const [searchText, setSearchText] = useState('');

  // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
  console.log('Body rendered');

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
  //   );
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8467126&lng=80.9460872&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
//   data.cards.card.card.imageGridCards.info
  //   const json = await data.json();

  //   console.log(json);
  //   // * optional chaining
  //   // setListOfRestaurants(json.data.cards[2].data.data.cards);
  //   setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  //   setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  // };

  // // * Conditional Rendering
  // // if (listOfRestaurants.length === 0) {
  // //   return <Shimmer />;
  // // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // * Filter th restaurant cards and update the UI
              // * searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );

            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;



/////////////////////////


import React from "react"
import RouterDOM from "react-dom/client";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";

const RestorentMenuCard=()=>{

    const [resInfo,setresInfo]=useState(null);
    const menu=resInfo?.cards[2]?.card?.card?.info;
    
    useEffect(()=>{
    fetchMenu();

    },[]);

        const fetchMenu=async()=>{
            const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8467126&lng=80.9460872&restaurantId=59122&catalog_qa=undefined&submitAction=ENTER");
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