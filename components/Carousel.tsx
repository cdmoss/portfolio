import React, { useState } from "react";
import Image from "next/image";

interface CarouselProps {
    blurb: string;
    photos: string[];
}

const Carousel: React.FC<CarouselProps> = ({ blurb, photos }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentPhotoIndex(
            (currentPhotoIndex - 1 + photos.length) % photos.length
        );
    };

    const handleNextClick = () => {
        setCurrentPhotoIndex((currentPhotoIndex + 1) % photos.length);
    };

    return (
        <div className="carousel">
            <p>{blurb}</p>+

            
            <div className="carousel__navigation">
                <button onClick={handlePreviousClick}>Previous</button>
                <button onClick={handleNextClick}>Next</button>
            </div>
            <div className="carousel__photos">
                {photos.map((photo, index) => (
                    <Image
                        src={photo}
                        alt=""
                        key={photo}
                        className={
                            index === currentPhotoIndex
                                ? "carousel__photo--visible"
                                : "carousel__photo--hidden"
                        }
                    />
                ))}
            </div>
            <div className="carousel__indicators">
                {photos.map((photo, index) => (
                    <div
                        key={photo}
                        className={
                            index === currentPhotoIndex
                                ? "carousel__indicator--active"
                                : "carousel__indicator"
                        }
                        onClick={() => setCurrentPhotoIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};
