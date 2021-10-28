import React, { useEffect } from 'react';

import CIndex from '../components/components.index.js';

const HomePageContent = () => {
  const { Button } = CIndex;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Button />
      <Button color="blue" />
      <Button color="green" />
    </div>
  );
};

export default HomePageContent;
