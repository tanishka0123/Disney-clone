import styled from "styled-components";
import imageOne from "../../assets/images/viewers-disney.png"
import imageTwo from "../../assets/images/viewers-pixar.png"
import imageThree from "../../assets/images/viewers-marvel.png"
import imageFour from "../../assets/images/viewers-starwars.png"
import imageFive from "../../assets/images/viewers-national.png"
import vidone from "./videos/1564674844-disney.mp4"
import vidtwo from "./videos/1564676714-pixar.mp4"
import vidthree from "./videos/1564676115-marvel.mp4"
import vidfour from "./videos/1608229455-star-wars.mp4"
import vidfive from "./videos/1564676296-national-geographic.mp4"



const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <img src={imageOne} alt="" />
        <video autoPlay loop playsInline muted>
  <source src={vidone} type="video/mp4" />
</video>

      </Wrap>
      <Wrap>
        <img src={imageTwo} alt="" />
        <video autoPlay loop playsInline muted>
          <source src={vidtwo} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={imageThree} alt="" />
        <video autoPlay loop playsInline muted>
          <source src={vidthree} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={imageFour} alt="" />
        <video autoPlay loop playsInline muted>
          <source src={vidfour} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={imageFive} alt="" />
        <video autoPlay loop playsInline muted>
          <source
            src={vidfive}
            type="video/mp4"
          />
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: auto;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img, video {
    
  }
  

  img {
    box-sizing: border-box;
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: contain;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;