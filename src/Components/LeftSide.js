import React from 'react'
import AppFrame from './common/app-frame'; //where can I take it?
import {
  SideNavigation,
  Section,
  NavigationHeader,
  Header,
  NestableNavigationContent,
  ButtonItem,
  NestingItem,
  Footer,
  NavigationFooter,
} from "@atlaskit/side-navigation";

const LeftSide = () => {
  return (
    <AppFrame hideAppBar hideBorder>
      <SideNavigation label="project">
        <span />
      </SideNavigation>
    </AppFrame>
  );
};

export default LeftSide;
