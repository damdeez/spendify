import React from 'react'
import { css } from '@emotion/core'
import { NavLink, Link } from 'react-router-dom'

const Nav = () => (
  <header css={layoutStyle} role='heading'>
    <nav css={navStyle}>
      <Link css={logoStyle} to='/dashboard'>
        <img alt='Divvy logo' id='divvy-logo' src='https://app.divvy.co/assets/icons/firefox_app_512x512.png' />
      </Link>
      <ul >
        <li>
          <NavLink activeClassName='current' to='/dashboard'>DASHBOARD</NavLink>
        </li>
        <li>
          <NavLink activeClassName='current' to='/upload'>UPLOAD</NavLink>
        </li>
      </ul>
    </nav>
    <button css={userLayout} onClick={() => window.alert('Sorry! But this functionality doesnt exist yet. (Also, I am sorry about this alert 😬)')}>
      USER
    </button>
  </header>
)

const layoutStyle = css`
  background-color: #000000;
  color: #ffffff;
  display: grid;
  grid-template-columns: 80% 20%;
  padding: 20px 40px;
`

const navStyle = css`
  align-items: center;
  display: grid;
  grid-template-columns: 8% 92%;
  
  & > ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;

    a {
      color: #ffffff;
      font-family: 'Calibre-Bold';
      font-size: 13px;
      text-decoration: none;

      &.current {
        border-bottom: 2px solid #ffffff;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
  
  & > ul > li:not(:first-of-type) {
    margin-left: 15px;
  }
`

const userLayout = css`
  appearance: none;
  align-items: center;
  background-color: transparent;
  border: none;
  color: #FFFFFF;
  display: flex;
  font-family: 'Calibre-Bold';
  font-size: 13px;
  justify-content: flex-end;
`

const logoStyle = css`
  height: 50px;

  #divvy-logo {
    height: 50px;
  }
`

export default Nav
