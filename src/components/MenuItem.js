import React, { useState } from 'react';

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="menu-item" onMouseEnter={toggleSubMenu} onMouseLeave={toggleSubMenu}>
      {item.title}
      {isOpen && (
        <ul className="sub-menu">
          {item.children.map((child) => (
            <MenuItem key={child.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;