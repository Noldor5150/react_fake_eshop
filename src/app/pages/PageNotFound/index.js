import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants';
import './index.scss';

function PageNotfound() {
  return (
    <div className="PageNotFound">
      <p>New Found Power</p>
      <Link to={ROUTES.defaultPage}>Go home</Link>
    </div>
  );
}

export default PageNotfound;
