import React from "react";
import "./home.css";
import { getDocs, collection } from 'firebase/firestore';
import ImgSlider from "../imgSlider/ImgSlider";
import Viewers from "../viewers/Viewers";
import Recommends from "../recommended/Recommends";
import NewDisney from "../newDisney/NewDisney";
import Trending from "../trending/Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from '../../firebase'
import { setMovies } from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/UserSlice";
import Footer from "../footer/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let trending = [];

useEffect(() => {
  const fetchMovies = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'movies'));

      snapshot.docs.forEach((doc) => {
        const movie = {
          id: doc.id,
          ...doc.data()
        };

        switch (movie.type) {
          case "recommend":
            recommends = [...recommends, movie];
            break;
          case "new":
            newDisneys = [...newDisneys, movie];
            break;
          case "trending":
            trending = [...trending, movie];
            break;
          
          default:
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          trending: trending,
        })
      );
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  fetchMovies();
}, [userName]);

  

  return (
    <div>
      <div className="container">
        <ImgSlider></ImgSlider>
        <Viewers></Viewers>
        <Recommends></Recommends>
        <NewDisney></NewDisney>
       
        <Trending></Trending> 
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;
