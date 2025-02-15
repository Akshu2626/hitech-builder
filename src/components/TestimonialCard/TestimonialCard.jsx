import React, { useEffect } from "react";
import styles from "./TestimonialCard.module.css";

const TestimonialCard = ({ title, text, author, rating, highlight }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className={styles.FullStar}
          width={16}
          height={16}
          viewBox="0 0 18 18"
        >
          <path
            d="M9.513.386l1.928 5.983 6.023.073c.518.006.732.698.317 1.022l-4.832 3.77 1.795 6.027c.154.519-.407.946-.83.632L9 14.24l-4.914 3.652c-.422.314-.984-.114-.83-.632l1.795-6.027L.22 7.463C-.197 7.14.018 6.448.536 6.442l6.023-.073L8.487.386a.534.534 0 011.026 0z"
            fill={highlight ? "#fff" : "#007377"}
            fillRule="evenodd"
          ></path>
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half-star"
          className={styles.HalfStar}
          width={16}
          height={16}
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="halfGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor={highlight ? "#fff" : "#007377"} />
              <stop offset="50%" stopColor="grey" />
            </linearGradient>
          </defs>
          <path
            d="M9.513.386l1.928 5.983 6.023.073c.518.006.732.698.317 1.022l-4.832 3.77 1.795 6.027c.154.519-.407.946-.83.632L9 14.24l-4.914 3.652c-.422.314-.984-.114-.83-.632l1.795-6.027L.22 7.463C-.197 7.14.018 6.448.536 6.442l6.023-.073L8.487.386a.534.534 0 011.026 0z"
            fill="url(#halfGradient)"
            fillRule="evenodd"
          />
        </svg>
      );
    }

    return stars;
  };

  useEffect(() => {}, [rating]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: `${title} - ${text}\nBy ${author}`,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing", error));
    } else {
      alert("Sharing is not supported on your browser.");
    }
  };

  return (
    <div className={styles.TileBlockWrapper} id="st0">
      <div className={styles.ShareWrapper}>
        <div
          className={
            highlight
              ? styles.ClientStoriesTilehighlight
              : styles.ClientStoriesTile
          }
        >
          {highlight && (
            <div className={styles.highlightedBtn}>
              <p>Featured</p>
            </div>
          )}

          <h4 className={styles.Title}>{title}</h4>
          <p className={styles.Rating}>{renderStars()}</p>
          <p className={styles.Content}>{text}</p>
          <p className={styles.Author}>{author}</p>
        </div>
        <div className={styles.RowSocial} onClick={handleShare}>
          <svg
            className={styles.SocialIcon}
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            enableBackground="new 0 0 1000 1000"
            fill={highlight ? "#fff" : "#000"}
          >
            <g>
              <path d="M766.7,387c-55.4,0-104.8-23.8-139.7-61.1l-212.3,120c5.3,17.3,8.9,35.2,8.9,54.2c0,30.7-8.1,59.3-21.3,84.9l204.1,115.3c33.9-52.3,92.8-87.1,160.2-87.1c105.2,0,190.6,84.4,190.6,188.4C957.3,905.6,872,990,766.7,990c-105.2,0-190.6-84.4-190.6-188.5c0-7,1.3-13.6,2.1-20.4L347.5,650.8l0.8-1.5c-32,24.2-71.6,39.2-115.1,39.2C128,688.5,42.6,604.1,42.6,500c0-104.1,85.3-188.5,190.6-188.5c55.4,0,104.8,23.8,139.6,61.1l212.3-120c-5.3-17.3-8.9-35.2-8.9-54.2C576.2,94.4,661.5,10,766.8,10C872,10,957.4,94.4,957.4,198.5S872,387,766.7,387z M766.7,914.7c63.2,0,114.3-50.6,114.3-113.1c0-62.4-51.2-113.1-114.3-113.1c-63.2,0-114.3,50.6-114.3,113.1C652.4,864.1,703.6,914.7,766.7,914.7z M233.2,387c-63.2,0-114.3,50.6-114.3,113.1c0,62.4,51.2,113.1,114.3,113.1c63.2,0,114.3-50.6,114.3-113.1C347.5,437.6,296.3,387,233.2,387z M766.7,85.5c-63.2,0-114.3,50.6-114.3,113.1c0,62.4,51.2,113.1,114.3,113.1c63.2,0,114.3-50.6,114.3-113.1C881.1,136.1,829.9,85.5,766.7,85.5z"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
