import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLinks
} from './styles';

import { FaBars } from 'react-icons/fa';

interface HandleCloseProps {
  isOpen: boolean;
  handleClose: () => void;
}

export function Navbar({ handleClose }: HandleCloseProps) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            Healthy Food
          </NavLogo>
          <MobileIcon onClick={handleClose}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='healthy'>Healthy Recipes</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='blog'>Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='join'>Join</NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnLinks to='register'>Register</NavBtnLinks>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}