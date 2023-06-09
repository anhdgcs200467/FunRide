import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/home";
import DefaultLayout from "./Components/Layout/DefaultLayout";
import Contact from "./Components/Pages/contact";
import PrivateTrip from "./Components/Pages/privateTrip";
import SearchTrip from "./Components/Pages/searchTrip";
import Trips from "./Components/Pages/trips";
import Login from "./Components/Pages/Login";
import Settings from "./Components/Pages/Settings";
import Discount from "./Components/Pages/discount";
import AddAdmin from "./Components/Pages/Admin/add";
import AddDiscount from "./Components/Pages/discount/add";
import PrivateOrder from "./Components/Pages/PrivateOrder";
import TripOrder from "./Components/Pages/Trip Order";
import Dis1VT from "./Components/Pages/RecommendTrip/Dis1-VT";
import Dis1BL from "./Components/Pages/RecommendTrip/Dis1-BL";
import BtDisVT from "./Components/Pages/RecommendTrip/BtDis-VT";
import BtDisBL from "./Components/Pages/RecommendTrip/BtDis-BL";
import VTDis1 from "./Components/Pages/RecommendTrip/VT-Dis1";
import VTBtDis from "./Components/Pages/RecommendTrip/VT-BtDis";
import BLDis1 from "./Components/Pages/RecommendTrip/BL-Dis1";
import BLBtDis from "./Components/Pages/RecommendTrip/BL-BtDis";
import SearchBarTrip from "./Components/Pages/SearchBarTrip";
import Booking from "./Components/Pages/searchTrip/Booking";
import TripOrderID from "./Components/Pages/Trip Order/TripOrderID";
import EnterCode from "./Components/Pages/Login/RecoverPassword/EnterCode";
import ChangePassword from "./Components/Pages/Login/RecoverPassword/EnterCode/ChangePassword";

import { AnimatePresence } from "framer-motion";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";
import { Flip } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import Protected from "./Components/Protected";
import Admin from "./Components/Pages/Admin";
import OrderID from "./Components/Pages/Trip Order/OrderID";
import ForgotPassword from "./Components/Pages/Login/RecoverPassword";

axios.defaults.baseURL = `http://127.0.0.1:5000`;
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
export const loginContext = createContext();

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isManager, setIsManager] = useState(false);
  const location = useLocation();
  useEffect(() => {
    axios.post("admin/my-profile").then((resp) => {
      const role = resp.data.msg.role;
      console.log(resp.data.msg.role);
      if (role === "Admin") {
        setIsAdmin(true);
      }
      if (role === "Manager") {
        setIsManager(true);
      }
    });
  });

  return (
    <loginContext.Provider value={{ isAdmin: isAdmin, isManager: isManager }}>
      <Navbar></Navbar>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <Home></Home>
              </DefaultLayout>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <DefaultLayout>
                <Contact></Contact>
              </DefaultLayout>
            }
          ></Route>
          <Route
            path="/searchTrip"
            element={
              <DefaultLayout>
                <SearchTrip></SearchTrip>
              </DefaultLayout>
            }
          >
            <Route path=":id" element={<Booking></Booking>}></Route>
          </Route>
          <Route
            path="/searchBarTrip"
            element={
              <DefaultLayout>
                <SearchBarTrip></SearchBarTrip>
              </DefaultLayout>
            }
          >
            <Route path=":id" element={<Booking></Booking>}></Route>
          </Route>
          <Route
            path="/Dis1-VT"
            element={
              <DefaultLayout>
                <Dis1VT></Dis1VT>
              </DefaultLayout>
            }
          >
            <Route path=":id" element={<Booking></Booking>}></Route>
          </Route>
          <Route
            path="/Dis1-BL"
            element={
              <DefaultLayout>
                <Dis1BL></Dis1BL>
              </DefaultLayout>
            }
          >
            <Route path=":id" element={<Booking></Booking>}></Route>
          </Route>
          <Route
            path="/BtDis-VT"
            element={
              <DefaultLayout>
                <BtDisVT></BtDisVT>
              </DefaultLayout>
            }
          >
            <Route path=":id" element={<Booking></Booking>}></Route>
          </Route>
          <Route
            path="/BtDis-BL"
            element={
              <DefaultLayout>
                <BtDisBL></BtDisBL>
              </DefaultLayout>
            }
          >
            <Route path=":id" element={<Booking></Booking>}></Route>
          </Route>
          <Route
            path="/VT-Dis1"
            element={
              <DefaultLayout>
                <VTDis1></VTDis1>
              </DefaultLayout>
            }
          >
            <Route path=":id" element={<Booking></Booking>}></Route>
          </Route>
          <Route
            path="/VT-BtDis"
            element={
              <DefaultLayout>
                <VTBtDis></VTBtDis>
              </DefaultLayout>
            }
          >
            <Route path=":id" element={<Booking></Booking>}></Route>
          </Route>
          <Route
            path="/BL-Dis1"
            element={
              <DefaultLayout>
                <BLDis1></BLDis1>
              </DefaultLayout>
            }
          >
            <Route path=":id" element={<Booking></Booking>}></Route>
          </Route>
          <Route
            path="/BL-BtDis"
            element={
              <DefaultLayout>
                <BLBtDis></BLBtDis>
              </DefaultLayout>
            }
          >
            <Route path=":id" element={<Booking></Booking>}></Route>
          </Route>
          <Route
            path="/privateTrip"
            element={
              <DefaultLayout>
                <PrivateTrip></PrivateTrip>
              </DefaultLayout>
            }
          ></Route>

          <Route
            path="/trips"
            element={
              <DefaultLayout>
                <Trips></Trips>
              </DefaultLayout>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <DefaultLayout>
                <Login></Login>
              </DefaultLayout>
            }
          >
            <Route
              path="ForgotPassword"
              element={<ForgotPassword></ForgotPassword>}
            >
              <Route path="EnterCode" element={<EnterCode></EnterCode>}>
                <Route
                  path="ChangePassword"
                  element={<ChangePassword></ChangePassword>}
                ></Route>
              </Route>
            </Route>
          </Route>
          <Route
            path="/Admin"
            element={
              <Protected>
                <Admin></Admin>
              </Protected>
            }
          >
            <Route path="add" element={<AddAdmin></AddAdmin>}></Route>
          </Route>
          <Route
            path="/Settings"
            element={
              <Protected>
                <Settings></Settings>
              </Protected>
            }
          ></Route>
          <Route
            path="/Discountcode"
            element={
              <Protected>
                <Discount></Discount>
              </Protected>
            }
          >
            <Route path="add" element={<AddDiscount></AddDiscount>}></Route>
          </Route>
          <Route
            path="/TripOrder"
            element={
              <Protected>
                <TripOrder></TripOrder>
              </Protected>
            }
          >
            <Route path=":id" element={<TripOrderID></TripOrderID>}></Route>
          </Route>
          <Route
            path="/PrivateOrder"
            element={
              <Protected>
                <PrivateOrder></PrivateOrder>
              </Protected>
            }
          >
            <Route path=":id" element={<OrderID></OrderID>}></Route>
          </Route>
        </Routes>
      </AnimatePresence>
      <ToastContainer
        theme="dark"
        position={"bottom-right"}
        transition={Flip}
      />
    </loginContext.Provider>
  );
}

export default App;
