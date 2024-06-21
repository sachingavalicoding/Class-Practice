// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "./Card";

const data = [
  {
    name: "Alice Johnson",
    role: "Software Engineer",
    department: "IT",
    location: "San Francisco, CA",
    email: "alice.johnson@example.com",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Femployee&psig=AOvVaw1WUT76AMWcEF3I8O4RHfdt&ust=1718901136694000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODspfCL6IYDFQAAAAAdAAAAABAE",
  },
  {
    name: "Bob Smith",
    role: "Project Manager",
    department: "Operations",
    location: "New York, NY",
    email: "bob.smith@example.com",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Femployee&psig=AOvVaw1WUT76AMWcEF3I8O4RHfdt&ust=1718901136694000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODspfCL6IYDFQAAAAAdAAAAABAE",
  },
  {
    name: "Carol Lee",
    role: "Data Analyst",
    department: "Marketing",
    location: "Chicago, IL",
    email: "carol.lee@example.com",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Femployee&psig=AOvVaw1WUT76AMWcEF3I8O4RHfdt&ust=1718901136694000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODspfCL6IYDFQAAAAAdAAAAABAE",
  },
  {
    name: "David Brown",
    role: "Human Resources Specialist",
    department: "HR",
    location: "Los Angeles, CA",
    email: "david.brown@example.com",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Femployee&psig=AOvVaw1WUT76AMWcEF3I8O4RHfdt&ust=1718901136694000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODspfCL6IYDFQAAAAAdAAAAABAE",
  },
  {
    name: "Eve Davis",
    role: "Sales Manager",
    department: "Sales",
    location: "Austin, TX",
    email: "eve.davis@example.com",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Femployee&psig=AOvVaw1WUT76AMWcEF3I8O4RHfdt&ust=1718901136694000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODspfCL6IYDFQAAAAAdAAAAABAE",
  },
];

const Slider = () => {
  return (
    <>
      <section className="main__section">
        <Swiper
          className="testimonial__slider"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map((ele, index) => {
            return (
              <SwiperSlide key={index}>
                <Card image={ele.image} title={ele.name} title2={ele.email} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Slider;
