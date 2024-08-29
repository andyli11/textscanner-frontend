import React from 'react';

interface UploadProgressProps {
    file: File;
    removeFile: () => void;
}

// FC = function component
const UploadProgress: React.FC<UploadProgressProps> = ({file, removeFile}) => {
    // states

    // effects

    // helper functions
    const getFileSize = () => {
        const kb = file.size/1000;
        if (kb > 1000) {
            return `${(kb / 1000).toFixed(1)} MB`
        }
        return `${Math.floor(kb)} KB`
    }

    // jsx
    return (
        <div className="flex flex-col bg-gray-100 p-4 rounded-lg mt-4">
        <div className="flex items-center">
            {/* file details */}
            {file.type === 'application/pdf' ? (
                <i
                className="fas fa-file-alt text-2xl mr-4"
                style={{ color: '#0086fe' }}
                ></i>
            ) : (
                <i
                className="fa-solid fa-file-image text-2xl mr-4"
                style={{ color: '#0086fe' }}
                ></i>
            )}

            <p className="text-xs text-gray-600 flex-1">
                {file.name} <span className="ml-2">{getFileSize()}</span>
            </p>
            {/* X button */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                viewBox="0 0 320.591 320.591" onClick={removeFile}>
                <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"></path>
                <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"></path>
            </svg>

        </div>
        {/* progress */}
        {/* <div className="bg-gray-300 rounded-full w-full h-2 my-2">
            <div className="w-1/3 h-full rounded-full bg-blue-600 flex items-center relative">
                <span className="absolute text-xs right-0 bg-white w-2 h-2 rounded-full"></span>
            </div>
        </div> */}

        {/* <p className="text-xs text-gray-600 flex-1">35% done</p> */}
    </div>
    )
}

export default UploadProgress;