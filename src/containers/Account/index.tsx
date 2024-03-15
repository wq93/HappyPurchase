import React, { Fragment, useEffect} from "react";
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom"
import "./style.scss";

function Account() {
  const navigate = useNavigate()
  const location = useLocation()

  const isLoginActivated = location.pathname === '/account/login';
  const loginActiveClass = isLoginActivated ? 'tab-item-active' : '';
  const regsiterActiveClass = !isLoginActivated ? 'tab-item-active' : '';

  // 如果已经登录, 重定向到/home
  useEffect(() => {
    if(localStorage.getItem('token')) {
      navigate('/home')
    }
  }, [navigate]);

  return (
    <>
      <div className="page login-page">
        <div className="tab">
          <div className={`tab-item tab-item-left ${loginActiveClass}`}>

            <Link to="/account/login">登录</Link>
          </div>
          <div className={`tab-item tab-item-right ${regsiterActiveClass}`}>
            <Link to="/account/register">注册</Link>
          </div>
        </div>
        <Outlet/>
      </div>
    </>
  )
}

export default Account
