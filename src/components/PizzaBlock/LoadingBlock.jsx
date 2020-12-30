import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className='pizza-block'
      speed={5}
      width={280}
      height={456.4}
      viewBox='0 0 280 456.4'
      backgroundColor='#fcfcfc'
      foregroundColor='#ebebeb'
    >
      <rect x='-45' y='270' rx='0' ry='0' width='364' height='24' />
      <circle cx='146' cy='131' r='123' />
      <rect x='-1' y='335' rx='0' ry='0' width='0' height='1' />
      <rect x='1' y='310' rx='10' ry='10' width='280' height='84' />
      <rect x='40' y='370' rx='0' ry='0' width='1' height='3' />
      <rect x='7' y='416' rx='0' ry='0' width='104' height='26' />
      <rect x='137' y='406' rx='9' ry='9' width='135' height='45' />
      <rect x='205' y='440' rx='0' ry='0' width='0' height='3' />
    </ContentLoader>
  );
}

export default LoadingBlock;
