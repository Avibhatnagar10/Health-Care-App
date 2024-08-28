import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto flex items-center">
        <div className="sub-container max-w-[496px]"></div>
        <Image
          src="/assets/images/Premium Photo _ Animated illustration of 3d doctor character caricature.jpeg"
          height={1000}
          width={1000}
          alt="patient"
          className="mb-30 h-[45%] w-auto"
        />

        <div className="absolute top-0 left-0 m-4">
          <Image
            src="/assets/images/curacare.png"
            height={100}
            width={100}
            alt="logo"
            className="h-auto w-auto"
          />
        </div>
      </section>
    </div>
  );
}
