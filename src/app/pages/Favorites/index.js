import React from 'react';
import { ProductCard } from '../../components';
import './index.scss';

function Error() {
  return <p>there is no favorites</p>;
}

function Favorites({ favorites, products = [], cart, ...restProps }) {
  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  return (
    <div className="Favorites">
      {!favoriteProducts.length && <Error />}
      {favoriteProducts.map(data => {
        const { count = 0 } = cart.find(({ id }) => id === data.id) || {};
        return <ProductCard {...restProps} {...data} key={data.id} isFavorite cartCount={count} />;
      })}
    </div>
  );
}

export default Favorites;
