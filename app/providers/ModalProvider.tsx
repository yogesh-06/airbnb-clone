'use client';

import LoginModal from "../components/models/LoginModel";
import RegisterModal from "../components/models/RegisterModel";
import RentModal from "../components/models/RentModel";
import SearchModal from "../components/models/SearchModel";

const ModalsProvider = () => {
  return ( 
    <>
      <LoginModal />
      <RegisterModal />
      <SearchModal />
      <RentModal />
    </>
   );
}
 
export default ModalsProvider;