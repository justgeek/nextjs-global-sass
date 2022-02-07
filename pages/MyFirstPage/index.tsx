import React from 'react';
import './style.scss';

export default function MyFirstPage() {
  return (
    <div id="my-first-page">
      <h1 className="title-1">Title 1</h1>
      <h1 className="title-2">Title 2</h1>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </div>
  );
}
