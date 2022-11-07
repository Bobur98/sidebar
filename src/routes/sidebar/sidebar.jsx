import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { data } from '../../data';
import styles from './sidebar.module.scss';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow_right.svg';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow_left.svg';
import toggleSidebar from '../../store/sidebarOnClose';
import { useLocation } from 'react-router-dom';
import { Body } from '../../components/body/body';
export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState([]);
  const { isClose, setSidebar } = toggleSidebar();
  const location = useLocation();
  useEffect(() => {
    setIsOpen([]);
  }, [isClose]);

  const onOpen = (id) => {
    if (!isClose) {
      if (isOpen.includes(id)) {
        let res = isOpen.filter((vl) => vl !== id);
        setIsOpen(res);
      } else setIsOpen([...isOpen, id]);
    }
  };
  return (
    <div
      className={
        isClose ? `${styles.container} ${styles.close}` : styles.container
      }
    >
      <span className={styles.logo}>Logo</span>

      {data.map((value, _) => {
        const { Icon, ArrowDown, ArrowUp } = value;
        return value?.child?.length || value?.child?.child?.length ? (
          <div key={value.id}>
            <div
              onClick={() => onOpen(value.id)}
              className={
                isClose
                  ? `${styles.link} ${styles.sidebar_on_close} `
                  : `${styles.link}`
              }
              style={{
                justifyContent: 'space-between',
              }}
            >
              {/* Title */}
              <div
                style={{
                  display: 'flex',
                }}
                // className={styles.link}
              >
                {Icon && <Icon className={styles.pageIcon} />}
                {!isClose && value.title}
              </div>

              {/* Arrow Icons */}
              {!isClose && (
                <div className={styles.iconContainer}>
                  {ArrowDown && !isOpen.includes(value.id) ? (
                    <ArrowDown className={styles.arrowIcon} />
                  ) : (
                    <ArrowUp className={styles.arrowIcon} />
                  )}
                </div>
              )}
              {/* child menu as a tooltip when sidebar is closed*/}
              <div
                className={
                  isOpen.includes(value.id) && isClose
                    ? ``
                    : `${styles.childContainer} ${styles.onOpen}`
                }
              >
                {value?.child.map((child, index) => {
                  return (
                    <NavLink
                      to={child.pathname}
                      key={index}
                      className={
                        location.pathname === child.pathname
                          ? `${styles.childLink} ${styles.active}`
                          : styles.childLink
                      }
                    >
                      <div>{child?.title}</div>
                    </NavLink>
                  );
                })}
              </div>
            </div>

            {/* child menu when sidebar is open*/}
            <div
              className={
                isOpen.includes(value.id) && !isClose
                  ? `${styles.childContainer}`
                  : `${styles.childContainer} ${styles.onOpen}`
              }
            >
              {value?.child.map((child, index) => {
                return (
                  <NavLink
                    to={child.pathname}
                    key={index}
                    className={
                      location.pathname === child.pathname
                        ? ` ${styles.childLink} ${styles.active}`
                        : `${styles.childLink}`
                    }
                  >
                    <div>{child?.title}</div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ) : (
          <div key={value.id}>
            <NavLink
              to={value.pathname}
              className={
                location.pathname === value.pathname
                  ? `${styles.link} ${styles.active}`
                  : `${styles.link}`
              }
            >
              {Icon && <Icon className={styles.pageIcon} />}
              <div className={isClose ? styles.onClose : ''}>{value.title}</div>
            </NavLink>
          </div>
        );
      })}
      <button
        onClick={() => setSidebar(!isClose)}
        className={styles.btn}
        style={isClose ? { width: '80px' } : { width: '250px' }}
      >
        {isClose ? (
          <ArrowRight className={styles.closeIcon} />
        ) : (
          <ArrowLeft className={styles.closeIcon} />
        )}
      </button>
    </div>
    // {/* <div className={styles.outlet}>
    //   <Outlet />
    //   <Body />
    // </div> */}
  );
};
