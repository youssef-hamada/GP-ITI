import React, { useState } from "react";
import styles from "./Login.module.css";
import GoogleLogin from "react-google-login";
// import { GoogleLogout } from "react-google-login";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    let str = e.target.value;
    if (str.includes("@") && str.includes(".")) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };


  const responseGoogle = (res) => {
    // console.log(res);
    let data = { ...res.profileObj, events: {} };
    // console.log(data);
    localStorage.setItem("login", JSON.stringify(data));
  };

  return (
    <div className={styles.login}>
      

      <div className={styles.form}>
        <h2 className={styles.formheading}>Sign in or create an account</h2>
        <form action="">
          <label htmlFor="email">Email address</label>
          <input
            onChange={handleChange}
            className={styles.input}
            type="email"
            name="email"
            id="email"
            autoFocus
          />
          {showPassword ? (
            <div>
              <label htmlFor="password1">Password</label>
              <input
                className={styles.input}
                type="password"
                name="password1"
                id="password1"
              />
              <label htmlFor="password2">Confirm Password</label>
              <input
                className={styles.input}
                type="password"
                name="password2"
                id="password2"
              />
            </div>
          ) : null}
          <input
            className={styles.button}
            type="submit"
            value="Create account"
          />
        </form>
      </div>

      <div className={styles.line}>
        <hr className={styles.hr} />
        <p className={styles.p}>or use one of these options</p>
        <hr className={styles.hr} />
      </div>

      <div className={styles.authlogin}>
        <button className={styles.google}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEU6VZ////82Up4zUJ1UbKx4ibswTpyMmsQ5V6EtTJupss8nSJnN0+WVosgqSpo4U56eqcyDksDj5vBwgbb3+PxFXqNabqt9jb3S2OhidbC9xdy3v9l0hLjZ3etLY6bq7fTEyt4dQpdJYqekrs2uttK97JEgAAADFUlEQVR4nO3c2XLiMBBAUUZmM3IsFsNgSIAk/P83TsLzjCNbI3c3de9rqlw+BV7VZDIhIiIiIiIiIiIiIiIiIlJeCM4VxbzsrJDey8G50s/3h91ss3jp7LdJYii8262rbfPr545eem/753y9qWJwjypzwqJuT7E6i0JX7459fOaEvn3r5zMmLPy5r8+W0L9Gn15MCkO9GuAzJHSh9xFoS1hcrsOAVoTzdsghaEhYTAcDbQjdfjjQhDAshx6DRoShrhKAFoR+nQI0ICzaJKABYZlyEFoQ1p9pQPVCd0m4UJgQ+lsiULvQXVKB2oW+1ysZg8KwTAYqF5ZpF3sDQr99cqFLvJ3RL0y+2usXDnw1Y0YYUh58TQiL3X8Aql57Kvschs3xdF/9pftC8fphj3vSalZ6X5tbA/axJ5rtzhdBem+HVEeeaKq55s+po1DHAW/vJj+/yfdifdxX1OYX9LuwjxIejH5Fv3LTGOBJ8eXup+KEH056P4cXJby+S+9mQlHCUy29mwlFCddz6d1MKEq4sXsmjRTOEGoOIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQR27+78qYucRX37GFR7Jrb65ddBQz1Hbv2sCjpSixvEcgEitlhcN+cNenRnZxagThm+wK6ghC4TXiEYSr8tmFwstvIwhb2XX+EYR72St+fmEj6htDuBW+a8svPArPauQXnp9e+CI8jZJfKP38mF8ofDnML2wuwsOn2YVX6ena7MKt9PRpduHt6YUr6eHM7MKF9HBmduGr9OvU7MKp9BR4bmEjDcwulJ9zzy2U/+1hbqH0s1N+4afsq8QRhPKT/LmFB+kb7+xC6Tua7ELhdacRhOLPTtmFCv7ZQOY14LP4xWISlh2FqFkM17UF8VPpF7Hjb3HTJl2nSwXAzp5jnqYrhAj1hxCh/hAi1B9ChPpDiFB/CBHqDyFC/SFEqD+ECPWHEKH+ECLUH0KE+kOIUH8IEeoPIUL9IUSoP4QI9YcQof4QItQfQoT6Q4hQfwgR6g8hQv0hRKg/hAj1hxCh/hAi1B9ChD36A+1ASVvVoq0WAAAAAElFTkSuQmCC"
            alt="img"
          />
        </button>
        <GoogleLogin
          clientId="378817930652-26drd8dhlmr4qet0ilu2qts92m12mpdr.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className={styles.google}
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <img
                className={styles.googleimage}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC-KxlZ9aqVMbPO3Ll49gBa3Ro245LV3KdLR2w4kQO4gy_PYVGJTPv4mBaJmVRNK4WPp4&usqp=CAU"
                alt=""
              />
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          isSignedIn={true}
          cookiePolicy={"single_host_origin"}
        />
        <button className={styles.google}>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </button>
      </div>
      <div className={styles.line1}>
        <hr />
        <p className={styles.p1}>
          By signing in or creating an account, you agree with our{" "}
          <span style={{ color: "blue" }}>Terms & Conditions</span> and{" "}
          <span style={{ color: "blue" }}>Privacy Statement</span>
        </p>
        <hr />
      </div>
      <div className={styles.line1}>
        <p className={styles.p1}>All rights reserved.</p>
        <p className={styles.p1}>Copyright (2006-2021) – Booking.com™</p>
      </div>
    </div>
  );
};

export default Login;