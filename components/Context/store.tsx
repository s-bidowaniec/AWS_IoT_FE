"use client"; // Because we're inside a server component
import React, { createContext, useState, useContext, ReactNode  } from 'react';

type DataType = {
    id: string;
    name: string;
    email: string;
}
interface Props {
    children?: ReactNode
    // any props that come into the component
}
interface AppContextInterface {
    state: DataType[];
    setState: React.Dispatch<React.SetStateAction<DataType[]>>;
}
// Create the context
 const AppContext = createContext<AppContextInterface>({
    state: [],
    setState: () => {},
 }
 );
// Create a provider component
 export const AppProvider = ({children}: Props) => {
    const [state, setState] = useState<[]|DataType[]>([]);
    // Define any functions or values you want to provide
    const value = {
    state,
    setState,
    };
    return <AppContext.Provider value={{state, setState}}>
        {children}
        </AppContext.Provider>;
 };
// Export the context
 export const useAppContext=()=> useContext(AppContext)