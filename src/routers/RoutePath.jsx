//import React from 'react';
import { Route,Routes,} from 'react-router-dom';
import MainPage from '../page/MainPage';
import ErrorPage from '../page/ErrorPage';
import LoginPageMember from '../module/Login/loginMember';
import RegisterPage from '../module/Register/registerMember';
import MainPage_Login from '../page/MainPage_Login';
import BarberPage from '../page/BarberPage';
import ProfilePage from '../page/ProfilePage';

import Haircut from '../module/b_Reserve/Haircut';



const RoutePath = () => {
    return (
      
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/mainpage" element={<MainPage/>} />
          <Route path="/login_member" element={<LoginPageMember/>} />
          <Route path="/*" element={<ErrorPage/>} />
          <Route path="/register_member" element={<RegisterPage/>} />
          <Route path="/barbershop" element={<MainPage_Login/>} />
          <Route path="/barberpage" element={<BarberPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />

          <Route path="/haircut" element={<Haircut/>} />
        </Routes>
    )
  }
  
  export default RoutePath
  