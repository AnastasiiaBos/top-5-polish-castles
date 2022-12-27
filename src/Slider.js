import { useState } from 'react';

function Slider ({images}) {
    const [imgIndex, setImgIndex] = useState(0);

    const previousImage = () => {
        setImgIndex( imgIndex => {
            imgIndex --;

            if (imgIndex  < 0) {
                imgIndex = images.length - 1;
            }

            return imgIndex;
        })
    };

    const nextImage = () => {
        setImgIndex( imgIndex => {
            imgIndex ++;

            if (imgIndex > images.length -1) {
                imgIndex = 0;
            }
            
            return imgIndex;
        })
    };

    return (
        <div className="imageContainer">
            <button id="prev" className="btn btn-prev" onClick={previousImage}>
                <span className="visually-hidden">Previous</span>
            </button>
            <div className="imageWrapper">
                <img src={images[imgIndex]} width="600px" alt="Castle"/>
            </div>
            <button id="next" className="btn btn-next" onClick={nextImage}>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slider;