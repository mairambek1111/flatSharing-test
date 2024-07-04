import React from "react";
import styles from "./Hero.module.scss";
import arrow from "@/assets/arrow.svg";
import Image from "next/image";
import image from "@/assets/image 1.png";
import images from "@/assets/photo Ivan.png";
function Hero() {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infobox}>
              <h1 className={styles.title}>Travel 2–3 times cheaper</h1>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <div className={styles.box}>
                <button className={styles.infobtn}>
                  Join the community
                  <span className={styles.infoIconWrap}>
                    <Image src={arrow} className={styles.iconArrow} alt="" />
                  </span>
                </button>
                <p className={styles.pretitle}>takes only 5 minutes</p>
              </div>
            </div>
            <div className={styles.infoboxImage}>
              <div className={styles.wrap}>
                <Image src={image} alt="" className={styles.imageinfo} />
              </div>
              <div className={styles.pricebox}>
                <h2 className={styles.title}>Central London</h2>
                <div className={styles.price}>130$+ night Airbnb 60$ night</div>
              </div>
              <div className={styles.live}>
                <div className={styles.liveinfo}>
                  <div className={styles.livewrap}>
                    <Image src={images} alt="" />
                  </div>
                  <div className={styles.namebox}>
                    <h4 className={styles.name}>Ivan</h4>
                    <p className={styles.text}>
                      Founder Ozma.io,AI Data consultant
                    </p>
                  </div>
                </div>

                <div className={styles.flat}>
                  <h2 className={styles.flattitle}>Live at Ivan s flat</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
