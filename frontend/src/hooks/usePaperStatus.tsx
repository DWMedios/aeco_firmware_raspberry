import { useEffect, useState } from 'react';

interface PaperStatusResponse {
  hasPaper: boolean;
}

const usePaperStatus = (): boolean => {
  const [hasPaper, setHasPaper] = useState<boolean>(false);

  useEffect(() => {
    // Primero, verificamos en sessionStorage si ya hay información
    const storedStatus = sessionStorage.getItem('hasPaper');
    if (storedStatus !== null) {
      setHasPaper(JSON.parse(storedStatus));
    } else {
      // Si no hay información, llamamos a la API
      fetch('https://api.api-onepiece.com/v2/sagas/en') // Aquí la URL de tu API
        .then((response) => response.json())
        .then((data: PaperStatusResponse) => { // Aquí tipamos la respuesta de la API
          const status = data.hasPaper;
          setHasPaper(status);
          sessionStorage.setItem('hasPaper', JSON.stringify(status));
        })
        .catch((error) => {
          console.error('Error fetching paper status:', error);
        });
    }
  }, []);

  return hasPaper;
};

export default usePaperStatus;
