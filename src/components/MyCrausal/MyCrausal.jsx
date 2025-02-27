import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./MyCrausal.module.css";

// Sample data
const MyCrausal = ({ crausalData = [] }) => {
  const [isNavigationEnabled, setIsNavigationEnabled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsNavigationEnabled(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return crausalData.length > 0 ? (
    <div className={styles.crausal_wrapper}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={isNavigationEnabled}
        pagination={{ clickable: true }}
        loop={true}
        className={styles.crausal_container}
      >
        {crausalData.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={item.title} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  ) : (
    <div className={styles.empty_crausal}>No Crausal available</div>
  );
};

export default MyCrausal;
