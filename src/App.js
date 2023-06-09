import './App.css';
import MegaMenu from './Megamenu';

function App() {
  const menuItems = [
    {
      id: 1,
      title: 'منوی 1',
      children: [
        {
          id: 2,
          title: 'زیرمنو 1-1',
          children: [
            {
              id: 3,
              title: 'زیرمنو 1-1-1',
              children: [{id : 1 , title : 'زیر منو 1-1-1-1' , children: []}],
            },
            {
              id: 4,
              title: 'زیرمنو 1-1-2',
              children: [],
            },
          ],
        },
        {
          id: 5,
          title: 'زیرمنو 1-2',
          children: [],
        },
      ],
    },
    {
      id: 6,
      title: 'منوی 2',
      children: [
        {
          id: 7,
          title: 'زیرمنو 2-1',
          children: [],
        },
        {
          id: 8,
          title: 'زیرمنو 2-2',
          children: [
            {
              id: 9,
              title: 'زیرمنو 2-2-1',
              children: [],
            },
          ],
        },
      ],
    },
  ];
  
  return (
    <>
    <MegaMenu menuItems={menuItems}/>
    </>
  )
            
}

export default App;
