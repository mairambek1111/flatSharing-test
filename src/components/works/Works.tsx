"use client";
import Image from "next/image";
import styles from "./works.module.scss";
import imagecard from "@/assets/arrow.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Iworks } from "@/types/type";
function Works() {
  const [data, setdata] = useState<Iworks[]>([]);

  useEffect(() => {
    const getData = () => {
      axios
        .get("https://e798bb1c21967d1e.mokky.dev/flatsharing")
        .then((res) => setdata(res.data));
    };
    getData();
  }, []);

  return (
    <>
      <div className={styles.works}>
        <div className="container">
          <div className={styles.content}>
            <h1 className={styles.title}>How it works</h1>
            <div className={styles.cards}>
              {data.map((el, index) => (
                <div className={styles.card} key={index}>
                  <Image
                    src={el.image}
                    alt=""
                    className={styles.image}
                    width={295}
                    height={430}
                  />
                  <h4 className={styles.pretitle}>{el.title}</h4>
                  <p className={styles.text}>{el.text}</p>
                </div>
              ))}
            </div>
            <div className={styles.btnbox}>
              <button className={styles.btn}>
                See more
                <span className={styles.wrapimg}>
                  <Image src={imagecard} alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
