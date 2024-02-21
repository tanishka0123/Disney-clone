import React, { useEffect } from "react";
import "./header.css";
import logo from "../../assets/images/logo.svg";
import homeicon from "../../assets/images/home-icon.svg";
import originalicon from "../../assets/images/original-icon.svg";
import searchicon from "../../assets/images/search-icon.svg";
import watchicon from "../../assets/images/watchlist-icon.svg";
import moviesicon from "../../assets/images/movie-icon.svg";
import seriesicon from "../../assets/images/series-icon.svg";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserPhoto,
  selectUserName,
  setUserLoginDetails,
  setSignOutState,
} from "../../features/user/UserSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [username]);

  const handleAuth = () => {
    if (!username) {
      signInWithPopup(auth, new GoogleAuthProvider())
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (username) {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <div className="nav">
      <img src={logo} alt="" />

      {!username ? (
        <a className="btn" onClick={handleAuth}>
          Login
        </a>
      ) : (
        <>
          <div className="nav-menu">
            <a href="/home">
              <img src={homeicon} alt="" />
              <span>HOME</span>
            </a>

            <a>
              <img src={searchicon} alt="" />
              <span>SEARCH</span>
            </a>

            <a>
              <img src={watchicon} alt="" />
              <span>WATCHLIST</span>
            </a>

            <a>
              <img src={originalicon} alt="" />
              <span>ORIGINALLS</span>
            </a>

            <a>
              <img src={moviesicon} alt="" />
              <span>MOVIES</span>
            </a>

            <a>
              <img src={seriesicon} alt="" />
              <span>SERIES</span>
            </a>
          </div>
          <div className="signout">
            <div className="userimg">
              <img src={userPhoto} alt={username} />
            </div>
            <div className="dropdown">
              <span onClick={handleAuth}>Sign Out</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
