import React from 'react';
import styles from './body.module.scss';
import toggleSidebar from '../../store/sidebarOnClose';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Body = () => {
  const location = useLocation();
  const { isClose } = toggleSidebar();

  const capitalizeFirst = (str) => {
    return str.slice(1).charAt(0).toUpperCase() + str.slice(2);
  };

  return (
    <div className={styles.container}>
      <div
        className={
          isClose ? `${styles.content} ${styles.true}` : styles.content
        }
      >
        {capitalizeFirst(location.pathname)}
      </div>
      <div className={styles.body}>
        <Outlet />
      </div>
      <div className={styles.footer}>Footer</div>
    </div>
  );
};
