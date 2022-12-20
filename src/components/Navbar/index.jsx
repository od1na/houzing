import React from 'react';
import {
  activeStyle,
  Container,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from './styles';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import { Button } from '../Generic/Button';

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const gotoSignIn = () => {
    navigate('/signin');
  };
  const logout = () => {
    localStorage.removeItem('token');
    if (location?.pathname?.includes('profile')) {
      navigate('/home');
    } else {
      navigate(location.pathname);
    }
  };

  var button;

  localStorage.getItem('token')
    ? (button = (
        <Button onClick={() => navigate('/profile')} width={'120px'}>
          Profile
        </Button>
      ))
    : (button = (
        <Button onClick={gotoSignIn} width={'120px'}>
          Log In
        </Button>
      ));
  location.pathname.includes('profile') &&
    (button = (
      <Button onClick={logout} width={'120px'} type='red'>
        Log out
      </Button>
    ));
  console.log();
  return (
    <Wrapper className='nocopy'>
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate('/home')}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map((value) => {
              return (
                !value.hidden && (
                  <NavLink style={activeStyle} key={value.id} to={value.path}>
                    {value.title}
                  </NavLink>
                )
              );
            })}
          </NavbarBody>
          <Logo>{button}</Logo>
        </NavbarWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  );
};
export default Navbar;
