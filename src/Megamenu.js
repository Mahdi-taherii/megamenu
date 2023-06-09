import MenuItem from './components/MenuItem'

const MegaMenu = ({ menuItems }) => {
  return (
    <ul className="menu">
      {menuItems.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default MegaMenu;