import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { ReactComponent as Logo } from '../../assets/wtf-logo.svg';
import { UserContext } from '../../contexts/user.context';

import './main-menu.styles.scss'

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
              <Logo className='logo' />
          </Link>
          <div className='nav-links-container'>

          </div>
        </div>
        <Outlet />
      </Fragment>
    );
};

export default Navigation;


