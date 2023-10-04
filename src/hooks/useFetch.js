import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useFetch(url) {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        const {
          data: { components },
        } = res;
        setApiData(components);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMessage(err);
        setIsLoading(false);
      });
  }, []);

  return { isLoading, apiData, errorMessage };
}
