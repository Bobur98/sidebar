import React, { useRef, useState, useEffect } from 'react';
import axios from '../../api/axios';
import styles from './login.module.scss';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
const LOGIN_URL = '/auth';

const Login = () => {
  const { setAuth } = useAuth();

  const nivagate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser('');
      setPwd('');
      Navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthourized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      <section>
        <p ref={errRef} className={errMsg ? styles.errmsg : styles.offscreen}>
          {errMsg}
        </p>
        <h1>Sign In</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button>Sign In</button>
        </form>
        <p>
          Need an Accoun? <br />
          <span className={styles.line}>
            <Link href="#">Sign up</Link>
          </span>
        </p>
      </section>
    </>
  );
};

export default Login;
