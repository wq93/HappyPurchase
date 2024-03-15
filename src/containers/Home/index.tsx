import "swiper/css"
import './style.scss'
import { ResponseType } from "./types";
import {useState} from "react"
import useRequest from "@/hooks/useRequest";

import Banner from "@/containers/Home/components/Banner";
import Categories from "./components/Categories";
import Card from "./components/Card";

const defaultRequestData = {
  url: "https://www.fastmock.site/mock/f307fca25de6a901228480d6513e9950/api/home",
  method: "get",
  manual: true,
};

function HomeIndex() {
  const [requestData, setRequestData] = useState(defaultRequestData);
  const { data } = useRequest<ResponseType>(requestData);

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
