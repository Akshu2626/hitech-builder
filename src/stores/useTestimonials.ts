import { create } from "zustand";

type TestimonialsState = {
    visibleItems: number;
    incrementVisibleItems: () => void;
};

const useTestimonials = create<TestimonialsState>((set) => ({
    visibleItems: 6,
    incrementVisibleItems: () =>
        set((state) => ({ visibleItems: state.visibleItems + 3 })),
}));

export default useTestimonials;
