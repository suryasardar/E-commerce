import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { isAuthenticated, logout, user, isLoading, loginWithRedirect } =
    useAuth0();
  console.log(loginWithRedirect, "surya");
  console.log(logout, "prakash");
  const [myuser, setuser] = useState(null);
  useEffect(() => {
    console.log(`user':${user}`);
    console.log(`isautenticated':${isAuthenticated}`);
    console.log(`isloading':${isLoading}`);
    if (isAuthenticated) {
      setuser(user);
    } else {
      setuser(false);
    }
  }, [isAuthenticated]);
  return (
    <UserContext.Provider
      value={{ isAuthenticated, loginWithRedirect, user, isLoading, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
