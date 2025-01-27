/*
Title: AuthContext.tsx
Author: Joel Harawa
 */
import React, { createContext, ReactNode } from "react"

// Create the context
interface AuthContextType {
    login: () => void
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const login = async (email: string, password: string) => {
        const response = await fetch("http://localhost:4000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
            
        })
    } 
}


