import React from 'react';
const List = (props) => {
  const { records } = props;
  if (!records || records.length === 0) return <p>No records, sorry</p>;
  return (
    <ul>
      {records.map((record) => {
        return (
          <li key={record.id} className='list'>
            <span className='record-id'><b>Id</b> : {record.id} </span>
            <span className='record-categoty'><b>Categoty : </b>Test </span>
            <span className='record-title'><b>Title</b> : {record.title} </span>
            <span className='record-body'><b>Body</b> : {record.body}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
