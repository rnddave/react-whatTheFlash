import Categories from '../../components/categories/categories.component';

const Home = () => {

  // we want an array to hold the categories
  const categories = [
    
    {
      "id": 10,
      "title": "Sonoma on 2012 MacMini",
      "imageUrl": "img/wtf-e10.png",
      "url": "https://youtu.be/7fnipYQmyx4"
    },
    {
      "id": 9,
      "title": "cMP 2,1 vs cMP 3,1",
      "imageUrl": "img/wtf-e9.png",
      "url": "https://youtu.be/8IcPSWYXisA"
    },
    {
      "id": 8,
      "title": "Surface Duo",
      "imageUrl": "img/wtf-e8.png",
      "url": "https://youtu.be/n8CCRdQxaEE"
    },
    {
      "id": 7,
      "title": "Classic Mac Pro 2,1 (part 3)",
      "imageUrl": "img/wtf-e7.png",
      "url": "https://youtu.be/EwcmSVNsxi4"
    },
    {
      "id": 6,
      "title": "Classic Mac Pro 2,1 (part 2)",
      "imageUrl": "img/wtf-e6.png",
      "url": "https://youtu.be/Xy01NmP0wh4"
    },
    {
      "id": 5,
      "title": "El Capitan on an iMac in 2023",
      "imageUrl": "img/wtf-e5.png",
      "url": "https://youtu.be/FQKydfvDowg"
    },
    {
      "id": 4,
      "title": "Android 13 on a Note 10+",
      "imageUrl": "img/wtf-e4.png",
      "url": "https://youtu.be/OBmILwgbztQ"
    },
    {
      "id": 3,
      "title": "Classic Mac Pro 2,1 (part 1)",
      "imageUrl": "img/wtf-e3.png",
      "url": "https://youtu.be/9K0qtBtAlnw"
    },
    {
      "id": 2,
      "title": "iMac goes Minty",
      "imageUrl": "img/wtf-e2.png",
      "url": "https://youtu.be/ohtavnQk1HA"
    },
    {
      "id": 1,
      "title": "CyberPower PC",
      "imageUrl": "img/wtf-e1.png",
      "url": "https://youtu.be/JN9sHtRCppM"
    },
  ];

  // we want to call our categories component (which will then call the category items)
  return <Categories categories={categories} />;
};

export default Home;


