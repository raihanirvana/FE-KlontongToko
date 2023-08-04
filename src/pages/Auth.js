import React, { useState } from "react";
import LoginForm from "../components/Login";
import SignUpForm from "../components/SignUp";

function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {showLogin ? (
        <LoginForm showLogin={showLogin} setShowLogin={setShowLogin} />
      ) : (
        <SignUpForm showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
    </div>
  );
}

export default Auth;
