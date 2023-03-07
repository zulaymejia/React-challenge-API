import React, { createContext,useState,useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const url = "https://randomuser.me/api/?results=3";

export const DataProvider = ({children}) =>{


  const usersFecht = async () => {
    try {
      const { data } = await axios.get(url);
      setUser(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    usersFecht();
  }, []);
    const [users, setUser] = useState([]);

    return(
        
        <DataContext.Provider value={{users, setUser
        }}> 
            {children}
            </DataContext.Provider>)
}