import styled from 'styled-components';
import LogoOne from '../../assets/images/logo.svg';

const Footer = () => {
  return (
    <Container>
      <Content>
        <Logo src={LogoOne} alt="Disney+" />
        <FooterNav>
          <FooterNavItem>Home</FooterNavItem>
          <FooterNavItem>Movies</FooterNavItem>
          <FooterNavItem>Shows</FooterNavItem>
          <FooterNavItem>Originals</FooterNavItem>
          <FooterNavItem>My List</FooterNavItem>
        </FooterNav>
      </Content>
      <BottomText>
        Disney+ Clone - Created by Your Name &copy; {new Date().getFullYear()}
      </BottomText>
    </Container>
  );
};

const Container = styled.footer`
  background-color: #090b13;
  padding: 2rem 0;
  color: #fff;
  margin-top: 70px;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  backdrop-filter: blur(10px);
`;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
`;

const FooterNavItem = styled.span`
  margin-right: 20px;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-radius 0.3s ease;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: gray;
    border-radius: 8px;
  }
`;

const BottomText = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  font-family: 'Arial', sans-serif;
  opacity: 0.8;
`;

export default Footer;
