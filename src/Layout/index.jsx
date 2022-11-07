import React from 'react';
import { Outlet } from 'react-router-dom';
import { Body } from '../components/body/body';
import { Sidebar } from '../routes/sidebar/sidebar';
import styles from './styles.layout.scss';
const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className={styles.outlet}>
        <Body />
      </div>
    </>
  );
};

export default Layout;
