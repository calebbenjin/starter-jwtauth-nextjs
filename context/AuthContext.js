import { useState, useEffect, createContext } from 'react'
import { useRouter } from 'next/router'
import {NEXT_URL} from '../config/index'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  // Register user
  const register = async ({ fullname, email, password }) => {
    setIsLoading(true)
    console.log(fullname, email, password)
  }

  // Login user
const login = async ({email, password}) => {
  setIsLoading(true)
  console.log(email, password)
}

  // Logout user
  const logout = () => {
    console.log("User Logged out")
  }

  // Check if user id Logged in
  const checkedUserLoggedIn = async (user) => {
    console.log('Checked')
  }

  return (
    <AuthContext.Provider value={{ register, login, logout, isLoading, user, error}}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthContext