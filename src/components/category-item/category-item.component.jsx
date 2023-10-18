import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title, url } = category;
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <a href={url}><h2>{title}</h2></a>
      </div>
    </div>
  );
};

export default CategoryItem;