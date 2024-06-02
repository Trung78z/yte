"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Thiết bị đo khí",
    description: "Phân tích thành phần khí trong môi trường hoặc mẫu khí nén.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Kính hiển vi điện tử quét (SEM)",
    description:
      "Quan sát bề mặt mẫu vật với độ phân giải cao và hình ảnh chi tiết.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Máy phân tích nhiệt lượng",
    description:
      "Đo lường nhiệt lượng phát ra hoặc hấp thụ trong các phản ứng hóa học và vật lý.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Máy phân tích vi sinh",
    description:
      "Đo lường và xác định các vi sinh vật trong mẫu thực phẩm, nước, và môi trường.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Máy phân tích khí độc",
    description:
      "Phát hiện và đo nồng độ các khí độc hại trong môi trường làm việc hoặc không gian hạn chế.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Máy chuẩn độ tự động",
    description:
      "Tự động hóa quy trình chuẩn độ, đảm bảo độ chính xác và nhất quán trong các phân tích hóa học.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Máy đo độ nhớt",
    description:
      "Xác định độ nhớt của chất lỏng, phục vụ cho các ngành công nghiệp thực phẩm, hóa chất...",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Sản phẩm mới</h2>
          <p className="subtitle mb-8">Khởi Lộc Phát - Đối Tác Tin Tậy</p>
          <Link href="/projects">
            <Button>Tất Cả</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 7).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
