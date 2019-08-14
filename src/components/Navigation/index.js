import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link className='nav-text' style={{ textDecoration: 'none', color: 'black' }} to={ROUTES.SIGN_IN}>Sign In  </Link>  {' | '}
      </li>
      <li>
        <Link className='nav-text' style={{ textDecoration: 'none', color: 'black' }} to={ROUTES.LANDING}>Landing </Link> {' | '}
      </li>
      <li>
        <Link className='nav-text' style={{ textDecoration: 'none', color: 'black' }} to={ROUTES.HOME}>Home </Link> {' | '}
      </li>
      <li>
        <Link className='nav-text' style={{ textDecoration: 'none', color: 'black' }} to={ROUTES.ACCOUNT}>Account </Link> {' | '}
      </li>
      <li>
        <Link className='nav-text' style={{ textDecoration: 'none', color: 'black' }} to={ROUTES.ADMIN}>Admin</Link> {' | '}
      </li>
    </ul>
  </div>
);

export default Navigation;