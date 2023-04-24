import React from 'react';
import SignUp from './Components/SignUp';
import Form from './Components/Form';
import { Routes, Route } from 'react-router-dom';
import Authentification from './Components/Authentification';
import Login from './Components/Login';
import Choice from './Components/Choice';
import Menu from './Components/UTILISATION/PagesProprio/Menu'
import Menu2 from './Components/UTILISATION/PagesParent/Menu2';
import Home from './Components/HomePage/Home';
import Search from './Components/SearchPage/Search';
import Description from './Components/SearchPage/Description';
import MesEnfants from './Components/UTILISATION/MesEnfants';
import MesCreches from './Components/UTILISATION/PagesProprio/MesCreches';


// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {
  return (

    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Search" element={< Search />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Authentification" element={<Authentification />} />
      <Route path="/Choice" element={<Choice />} />
      <Route path="/MenuProprio" element={<Menu />} />
      <Route path="/MenuParent" element={<Menu2 />} />
      <Route path="/Description" element={<Description/>}></Route>
      <Route path='/kkkk' element={<App/>}> </Route>
      <Route path='/MesEnfants' element={<MesEnfants/>}></Route>
      <Route path='/MesCreches' element={<MesCreches/>}></Route>
    </Routes>
      

    {/* <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper> */}
       </>
  );
}

export default App;
