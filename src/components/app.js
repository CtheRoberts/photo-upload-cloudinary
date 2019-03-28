import React, { Component } from 'react';

import Photos from "./photos";
import PhotoReturn from "./photoreturn";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="page-headers">
          <h1>Cloudinary Project</h1>
          <h2>Image Uploader and Retriever</h2>
        </div>
        <Photos />
      </div>
    );
  }
}
