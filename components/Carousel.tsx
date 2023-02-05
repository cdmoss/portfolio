import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface CarouselProps {
    blurb: string;
    photos?: string[];
    imgSize?: {height: number, width: number};
    blurbWidth?: string
}

const Carousel: React.FC<CarouselProps> = ({ blurb, blurbWidth, photos, imgSize }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const handlePreviousClick = () => {
        if (photos) {
            setCurrentPhotoIndex(
                (currentPhotoIndex - 1 + photos.length) % photos.length
            );
        }
    };

    const handleNextClick = () => {
        if (photos) {
            setCurrentPhotoIndex((currentPhotoIndex + 1) % photos.length);
        }
    };

    return (
        <div className="carousel flex justify-between">
            <p style={{maxWidth: "60%"}}>{blurb}</p>
            {photos && (
                <div className="flex flex-col">
                    <div className="flex">
                        <FontAwesomeIcon
                            onClick={handlePreviousClick}
                            icon={faChevronLeft}
                            className="self-center carousel__nav-button"
                        />
                        {photos.map((photo, index) => (
                            <Image
                                width={200}
                                height={200}
                                // width={imgSize ? imgSize.width : 250}
                                // height={imgSize ? imgSize.height : 250}
                                src={photo}
                                alt=""
                                key={photo}
                                className={classNames(
                                    "carousel__photo",
                                    "mx-5",
                                    {
                                        "carousel__photo--hidden":
                                            index !== currentPhotoIndex,
                                    }
                                )}
                            />
                        ))}
                        <FontAwesomeIcon
                            onClick={handleNextClick}
                            icon={faChevronRight}
                            className="self-center carousel__nav-button"
                        />
                    </div>
                    <div className="carousel__indicators">
                        {photos.map((photo, index) => (
                            <div
                                key={photo}
                                className={classNames(
                                    {
                                        "carousel__indicator--active":
                                            index === currentPhotoIndex,
                                    },
                                    "carousel__indicator"
                                )}
                                onClick={() => setCurrentPhotoIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carousel;
