import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

// dev - or2qtjv8y1jmwyi0.us.auth0.com; //
// Ttof2khi0ry8cUAgdf4dVjrcVrIRC8qo
// cd <your-project-directory>
// npm install @auth0/auth0-react
const AuthWrapper = () => {
  return <h4>AuthWrapper Component</h4>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export default AuthWrapper;
