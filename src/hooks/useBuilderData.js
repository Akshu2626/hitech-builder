import { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import useLocationStore from "@/store/useLocationStore";
import { useShallow } from "zustand/react/shallow";

const useBuilderData = ({ model, fields, filters = {}, query = {}, limit, sortBy }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // Extract selectedLocale from Zustand store
  const { selectedLocale } = useLocationStore(
    useShallow((state) => ({
      selectedLocale: state.selectedLocale,
    }))
  );

  useEffect(() => {
    const fetchData = async () => {
      setError(null); // Reset error state before fetching
      try {
        const options = {
          locale: selectedLocale,
          userAttributes: {}, // Optional user-specific attributes
          options: { enrich: true }, // Fetch related content
          fields,
          filters,
          query,
        };

        // Only add limit if it’s defined and valid
        if (limit !== undefined && limit !== null && limit !== "") {
          options.limit = limit;
        }

        // If sorting is specified, include it in the options
        if (sortBy) {
          options.sort = {
            [sortBy.field]: sortBy.direction, // Dynamic field name
          };
        }

        const content = await builder.getAll(model, options);
        setData(content || []);
      } catch (err) {
        setData([]);
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, [selectedLocale, model, fields, JSON.stringify(filters), JSON.stringify(query)]);

  return { data, error };
};

export default useBuilderData;
