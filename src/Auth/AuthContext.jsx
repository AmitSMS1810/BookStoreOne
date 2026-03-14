import { createContext, useContext, useState, useEffect } from "react";

// create context
const AuthContext = createContext();

// provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginModal,setLoginModal] = useState(false)
  const [signupModal,setSignupModal] = useState(false)

  // check user from localStorage on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  return (
    <AuthContext.Provider value={{ user,loginModal,setLoginModal,signupModal,setSignupModal}}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};