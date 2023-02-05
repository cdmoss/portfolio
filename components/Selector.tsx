import classNames from "classnames";
import React, { useState } from "react";

interface HeadingListProps {
    headings: string[];
    views: Record<string, React.ReactNode>;
}

const Selector: React.FC<HeadingListProps> = ({ headings, views }) => {
    const [selectedHeading, setSelectedHeading] = useState<string | null>("Click & Push");

    return (
        <div className="heading-list flex">
            <div className="heading-list__sidebar w-1/6">
                {headings.map((heading) => (
                    <div
                        className={classNames(
                            "heading-list__heading",
                            "py-2",
                            "px-4",
                            "cursor-pointer",
                            "hover:bg-gray-100",
                            { "font-semibold": heading == selectedHeading }
                        )}
                        onClick={() => {
                            console.log(`previous heading: ${selectedHeading}`);
                            setSelectedHeading(heading);
                        }}
                        key={heading}
                    >
                        {heading}
                    </div>
                ))}
            </div>
            <div className="heading-list__view w-5/6 p-4">
                {selectedHeading && views[selectedHeading]}
            </div>
        </div>
    );
};

export default Selector;
