import React from 'react';
import { IconsTypeWithOnlyFill } from '../IconsTypes';

function Menu({ size, width, height, fill }: IconsTypeWithOnlyFill) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || '45'}
      height={size || height || '21'}
      aria-hidden="true"
      className="main-nav__logo__image"
      viewBox="0 0 45 21"
      fill={fill || '#000'}
    >
      <path d="M0 0h3v21H0zm6 0h3v21H6zm6 0h3v21h-3zm6 0h3v21h-3zm6 18h21v3H24zm0-6h21v3H24zm0-6h21v3H24zm0-6h21v3H24z"></path>
    </svg>
  );
}

export default Menu;
