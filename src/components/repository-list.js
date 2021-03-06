import { h, Component } from 'preact';
import Repository from './repository';

const repositoryList = ({items}) => (
  <div className="repositories">
    {items.map((item, key) => (
      <Repository item={item} key={key} />
    ))}
  </div>
);

export default repositoryList;
