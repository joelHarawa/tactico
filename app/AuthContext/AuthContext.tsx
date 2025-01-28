// /*
// Title: AuthContext.tsx
// Author: Joel Harawa
//  */
import React, { createContext, ProviderProps, ReactNode } from "react";

// Define AuthProps
interface AuthProps {
    authState?: {token: string | null; authenticated: boolean | null};
    signup?: (email: string, password: string) => Promise<any>;
    login?: (email: string, password: string) => Promise<any>;
    logout?: () => Promise<any>;
}