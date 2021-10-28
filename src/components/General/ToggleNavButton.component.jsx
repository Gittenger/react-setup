import React from 'react';

import { ReactComponent as Chevron } from '../../assets/icons/chevron-up.svg';

const ToggleNavButton = ({ showNavList, onClickFunc, className }) => (
  <div
    className={showNavList ? `${className} active` : `${className} inactive`}
    onClick={onClickFunc}
  >
    <Chevron />
  </div>
);

export default ToggleNavButton;
