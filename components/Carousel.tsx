import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

export interface CarouselProps {
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
        <div className="carousel flex">
            <p className="w-1/2">{blurb}</p>
            <div className="carousel__navigation">
                <button onClick={handlePreviousClick}>Previous</button>
                <button onClick={handleNextClick}>Next</button>
            </div>
            <div className="carousel__photos">
                {photos.map((photo, index) => (
                    <Image
                        width={200}
                        height={200}
                        src={photo}
                        alt=""
                        key={photo}
                        className={classNames(
                            "carousel__photo",
                            index === currentPhotoIndex
                                ? "carousel__photo--visible"
                                : "carousel__photo--hidden"
                        )}
                    />
                ))}
            </div>
            <div className="carousel__indicators">
                {photos.map((photo, index) => (
                    <div
                        key={photo}
                        className={classNames(
                            {"carousel__indicator--active": index === currentPhotoIndex},
                            "carousel__indicator"
                        )}
                        onClick={() => setCurrentPhotoIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
