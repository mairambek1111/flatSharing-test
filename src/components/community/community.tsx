"use client";
import styles from "./community.module.scss";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { Islide } from "@/types/type";
function Community() {
  const [data, setdata] = useState<Islide[]>([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get("https://e798bb1c21967d1e.mokky.dev/slide")
        .then((res) => setdata(res.data));
    };
    getData();
  }, []);
  return (
    <>
      <div className={styles.community}>
        <div className="container">
          <div className={styles.content}>
            <h2 className={styles.title}>Homes in the community</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>

            <Swiper
              modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
              keyboard={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
              }}
              loop={true}
              spaceBetween={50}
              slidesPerView={8}
            >
              {data.map((el, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.cards}>
                    <div className={styles.card}>
                      <div className={styles.wrap}>
                        <Image
                          src={el.img}
                          alt=""
                          width={130}
                          height={130}
                          className={styles.image}
                        />
                      </div>
                      <h3 className={styles.name}>{el.name}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Community;
