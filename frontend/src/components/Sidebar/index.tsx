import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute
} from './styles';

interface HandleCloseProps {
  isOpen: boolean;
  handleClose: () => void;
}

export function Sidebar({ isOpen, handleClose }: HandleCloseProps) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={handleClose}>
      <Icon onClick={handleClose}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="healthy">
            Healthy Recipes
          </SidebarLink>
          <SidebarLink to="blog">
            Blog
          </SidebarLink>
          <SidebarLink to="join">
            Join
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to='/register'>Register</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}