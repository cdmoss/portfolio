import Carousel, { CarouselProps } from "../components/Carousel";

export const CNP: CarouselProps = {
    blurb: "I did full-stack development on an app called the Atlas for a company called Click & Push. Atlas is a mapping application designed for users with accessibility limitations: users can post landmarks that highlight areas that either help or hamper travel for users.",
    photos: [
        "/img/atlas/map.jpg",
        "/img/atlas/profile.png",
        "/img/atlas/voice.png"
    ],
}

export const YARO: CarouselProps = {
    blurb: "I did full-stack development on a mobile app called YARO: an AI powered and AR enabled wellness buddy. The backend was built with Django/DRF, which I wrote; and the mobile app was built in Unreal, in which I built an auth system and wired up API calls to the backend. (I don't have photos available for this project due to NDA)"
}

export const Elixr: CarouselProps = {
    blurb: "I created a prototype webapp called Elixr, which was a marketplace for XR applications built for Academic research. It supported user authentication, uploading app files, and a multi-step app submission review process. I wrote the app using ASP.NET Razor pages.",
    photos: ["/img/elixr/product.PNG", "/img/elixr/upload.PNG"],
    imgSize: {
        height: 400,
        width: 600,
    },
};

export const Foodbank: CarouselProps = {
    blurb: "A peer and I created a prototype volunteer manager webapp for our local foodbank, which had features such as scheduling shifts, managing volunteer information, and volunteer signup. We build two iterations: the first was written using ASP.NET Razor pages, the second was written as a client/server app with the client written in ASP.NET Blazor and the backend written using the ASP.NET Web API project type.",
    photos: [
        "/img/foodbank/calendar.PNG",
        "/img/foodbank/login.PNG",
        "/img/foodbank/register_1.PNG",
        "/img/foodbank/register_2.PNG",
        "/img/foodbank/team_edit.PNG",
        "/img/foodbank/timesheet.PNG",
    ],
    imgSize: {
        height: 400,
        width: 600,
    },
};