import React, { useState } from "react";
import "./SignupPage.css";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("en");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailValidness, setEmailValidness] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const messages = [
    { id: 1, lang: "de", text: "Hallo" },
    { id: 2, lang: "en", text: "Hello" },
    { id: 3, lang: "fi", text: "Moi" },
    { id: 4, lang: "fr", text: "Bonjour" },
  ];

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = () => {
    setEmail(email);
    if (!validateEmail(email)) {
      setEmailError("formatted incorrectly.");
      setEmailValidness("invalid");
    } else {
      setEmailError("correct.");
      setEmailValidness("valid");
    }
  };

  const checkPassStrength = (password) => {
    const length = password.length;
    return length > 8;
  };

  const handlePassStrength = (e) => {
    const password = e.target.value;
    setPassword(password);
    if (!checkPassStrength(password)) {
      setPasswordStrength("weak");
    } else {
      setPasswordStrength("strong");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleEmailChange();
    const messageObj = messages.find((m) => m.lang === language);
    if (messageObj) {
      setMessage(messageObj.text);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={onSubmit} className="form">
        <div className="email-box">
          <h2 className="email-title">Email</h2>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={
              emailValidness === "valid"
                ? "input-valid"
                : emailValidness === "invalid"
                ? "input-invalid"
                : "input"
            }
          />
          <p>
            {emailValidness === "valid"
              ? "Valid email address"
              : emailValidness === "invalid"
              ? "Invalid email address"
              : ""}
          </p>
        </div>
        <div className="password-box">
          <h2 className="password-title">Password</h2>
          <input
            type="password"
            onChange={handlePassStrength}
            value={password}
            className={
              passwordStrength === "strong"
                ? "password-strong"
                : "password-weak"
            }
          />
          <p className={passwordStrength === "strong" ? "pwts" : "pwtw"}>
            {passwordStrength === "strong"
              ? "Your password is strong"
              : "Your password is too weak"}
          </p>
        </div>
        <div className="nationality-box">
          <h2>Nationality</h2>
          <select
            name="nationality"
            id="nationality"
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
          >
            <option value="de">De</option>
            <option value="en">En</option>
            <option value="fi">Fi</option>
            <option value="fr">Fr</option>
          </select>
        </div>
        <button className="signup-btn">Sign up</button>
      </form>
      <hr className="line" />
      <div className="result-box">
        <p>{message}</p>
        <p>Your email address is: {email}</p>
        <p>Your email address is: {emailError} </p>
      </div>
    </div>
  );
}

export default SignupPage;
