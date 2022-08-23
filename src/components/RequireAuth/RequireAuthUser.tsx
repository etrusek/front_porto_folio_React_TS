import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';


export const RequireAuthUser = () => {
  // const navigate = useNavigate();
  //
  // useEffect(() => {
  //   if (false) //@TODO dodać autoryzację
  //     navigate('/login');
  // }, [navigate]);

  return <div>
    autoryzacja
  </div>;
  <Outlet/>
};