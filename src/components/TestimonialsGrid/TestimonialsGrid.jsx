import React from "react";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import styles from "./TestimonialsGrid.module.css";
import useTestimonials from "@/stores/useTestimonials"; // Import the hook

const TestimonialsGrid = ({ testimonials }) => {
  const { visibleItems, incrementVisibleItems } = useTestimonials();
  const visibleTestimonials = testimonials.slice(0, visibleItems);

  const columns = [[], [], []];
  visibleTestimonials.forEach((testimonial, index) => {
    columns[index % 3].push(testimonial);
  });

  return testimonials.length > 0 ? (
    <div className={styles.ClientStoriesTilesBlockWrapper}>
      <div className={styles.ContentWrapper}>
        <div className={styles.column}>
          {columns[0].map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        <div className={styles.column}>
          {columns[1].map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>

        <div className={styles.column}>
          {columns[2].map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>

      {visibleItems < testimonials.length && (
        <div className={styles.testimonaials_button_wrapper}>
          <button
            className={styles.loadMoreBtn}
            onClick={incrementVisibleItems}
          >
            Load More Student stories
          </button>
        </div>
      )}
    </div>
  ) : (
    <div className={styles.EmptytestimonialGrid}></div>
  );
};

export default TestimonialsGrid;
