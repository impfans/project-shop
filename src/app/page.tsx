import GridPattern from "@/components/ui/grid-pattern";
import BoxText from "./_components/home/BoxText";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className=" mx-auto px-2 md:px-5 lg:px-8 2xl:max-w-7xl">
      <section className=" pt-10 pb-12 relative">
        <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-10 items-start">
          <div className=" p-2 pb-20 md:pb-10 flex flex-col justify-center items-start lg:pt-10 xl:max-w-xl">
            <BoxText />
            <GridPattern
              width={30}
              height={30}
              x={-1}
              y={-1}
              className={cn(
                "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
              )}
            />
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}
