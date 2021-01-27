import React from 'react';
import Dropzone from "./Dropzone/Dropzone";

function ImageUpload() {
  return (
    <div className="container my-2">
      <p className="title text-center">Drag and Drop Image Upload</p>
      <div className="d-flex justify-content-center">
        <Dropzone />
      </div>
    </div>
  );
}

export default ImageUpload;