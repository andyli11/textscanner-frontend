"use client";
import React from 'react';
import { UploadButton } from "@bytescale/upload-widget-react";

const FileUpload: React.FC = () => {
  const options = {
    apiKey: "public_kW15cArD9hSLXaqrkzpuZ3EzwkUp",
    maxFileCount: 10000,
    editor: {
      images: {
        crop: false
      }
    },
    locale: {
      "finishBtn": "Extract Content",
    }
  };
  
  const handleComplete = async (files: { fileUrl: string }[]) => {
    const fileUrls = files.map(x => x.fileUrl);
  
    try {
      const URL = "https://deploying-to-heroku-101-3e887d6094a2.herokuapp.com/upload"
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urls: fileUrls }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Files uploaded successfully:', data);
        alert(`Files uploaded successfully: ${JSON.stringify(data)}`);
        window.location.reload();
      } else {
        console.error('Failed to upload files:', response.statusText);
        // alert('Failed to upload files.');
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Error uploading files.');
    }
  };
  
  

  return (
    <div className="bg-white w-60 h-10 rounded-lg flex items-center justify-center">
      <UploadButton options={options} onComplete={handleComplete}>
        {({ onClick }) => (
          <button 
            onClick={onClick} 
            className="bg-white text-blue-500 py-2 px-4 rounded"
          >
            Upload a file...
          </button>
        )}
      </UploadButton>
    </div>
  );
}

export default FileUpload;
