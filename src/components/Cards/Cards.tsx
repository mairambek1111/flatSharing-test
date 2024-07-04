"use client";
import Image from "next/image";
import styles from "./cards.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Iworks } from "@/types/type";
import images from "@/assets/arrow.svg";
function Cards() {
  const [card, setCard] = useState<Iworks[]>([]);

  useEffect(() => {
    const getCard = () => {
      axios
        .get("https://e798bb1c21967d1e.mokky.dev/card")
        .then((res) => setCard(res.data));
    };
    getCard();
  }, []);

  console.log(card);

  return (
    <>
      <div className={styles.card}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.boxs}>
              {card.slice(0, 1).map((el, index) => (
                <div className={styles.box} key={index}>
                  <div className={styles.boxWrap}>
                    <Image
                      src={el.image}
                      alt=""
                      className={styles.images}
                      width={620}
                      height={570}
                    />
                  </div>
                  <div className={styles.infobox}>
                    <h3 className={styles.title}>{el.title}</h3>
                    <p className={styles.text}>{el.text}</p>
                  </div>
                </div>
              ))}
              {card.slice(1).map((el, index) => (
                <div className={styles.box2} key={index}>
                  <div className={styles.boxWrap2}>
                    <Image
                      src={el.image}
                      alt=""
                      className={styles.images2}
                      width={620}
                      height={570}
                    />
                  </div>
                  <div className={styles.infobox2}>
                    <h3 className={styles.title}>{el.title}</h3>
                    <p className={styles.text}>{el.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.btncard}>
              Browse apartments
              <span className={styles.cardwrap}>
                <Image src={images} alt="" />
              </span>
            </button>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default Cards;
