import { create } from "zustand";

const useLocationStore = create((set) => ({
    selectedLocale: "en", // Default locale

    // Function to update locale
    setSelectedLocale: (locale) => set({ selectedLocale: locale }),
}));

export default useLocationStore;
