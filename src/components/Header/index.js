import React from 'react';
import { Link } from 'react-router-dom';

import MovieLogo from '../../images/react-movie-logo.svg';
import PageLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, PageLogoImg } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <LogoImg src={MovieLogo} alt='movie-logo' />
      </Link>
      <PageLogoImg src={PageLogo} alt='page-logo' />
    </Content>
  </Wrapper>
);

export default Header;
