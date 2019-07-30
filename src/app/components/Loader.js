import React from 'react';
import LoaderSpinner from 'react-loader-spinner';

const loaderProps = {
  type: 'Audio',
  color: 'salmon',
};

function Loader(params) {
  return <LoaderSpinner {...loaderProps} />;
}

export default Loader;
