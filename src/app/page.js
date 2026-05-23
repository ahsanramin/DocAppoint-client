import BlogHighlights from "@/components/BlogHighlights";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimoials";
import TopRatedDoctors from "@/components/TopRatedDoctors";
import HowItWorks from "@/components/HowItWorks";
import Specialties from "@/components/Specialties";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
   <div>
      <Hero></Hero>
      <TopRatedDoctors></TopRatedDoctors>
      <Specialties></Specialties>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <BlogHighlights></BlogHighlights>
   </div>
  );
}
