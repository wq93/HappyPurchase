import "swiper/css"
import './style.scss'
import { ResponseType } from "./types";
import {useState, useEffect} from "react"
import useRequest from "@/hooks/useRequest";

import Banner from "@/containers/Home/components/Banner";
import Categories from "./components/Categories";
import Card from "./components/Card";

const defaultRequestData = {
  url: "home.json",
  method: "get",
  manual: true,
};

function HomeIndex() {
  const [requestData, setRequestData] = useState(defaultRequestData);
  const { data } = useRequest<ResponseType>(requestData);
  console.log(data, 'data');
  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position, 'position');
        },
        (error) => {
          console.log(error, 'getCurrentPositionError');
        }, { timeout: 1000})
    }
  }, [])

  return (
    <div className="page home-page">
      <Banner />
      <Categories />

      <Card />
      <Card />

      <div className="bottom">- 我是有底线的 -</div>
      {/*<Docker />*/}
    </div>
  );
}

export default HomeIndex
