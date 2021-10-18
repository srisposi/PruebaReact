import React from 'react';
import { Link } from 'react-router-dom';

import MovieLogo from '../../images/react-movie-logo.svg';
import PageLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, PageLogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={MovieLogo} alt='rmdb-logo' />
      </Link>
      <PageLogoImg src={PageLogo} alt='tmdb-logo' />
    </Content>
  </Wrapper>
);

export default Header;
