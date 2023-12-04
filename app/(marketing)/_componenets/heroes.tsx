import Image from "next/image";
import React from "react";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] ">
          <Image
            src={"/document.png"}
            fill
            alt="hero"
            className="object-contain dark:hidden"
          />
          <Image
            src={"/document-dark.png"}
            fill
            alt="hero"
            className="object-contain hidden dark:block"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image
            src={"/management.png"}
            fill
            alt="management"
            className="object-contain dark:hidden"
          />
          <Image
            src={"/management-dark.png"}
            fill
            alt="management"
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
