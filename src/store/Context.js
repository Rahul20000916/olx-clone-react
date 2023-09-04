import { createContext, useState } from "react";



export const FirebaseContex = createContext(null); 

export const AuthContext = createContext(null);

export default function Context({children}){
    const [user,setUser] = useState("Hello");
    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}