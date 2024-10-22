import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import SparklesText from "@/components/ui/sparkles-text";
import React from "react";
import { SKILL_CONFIG } from "../config";

const BoxText = () => {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#efefef"} duration={0.2}>
        <div className="text-[3.5rem] font-semibold">
          <SparklesText text="程序快搭" />
        </div>
      </BoxReveal>
      <BoxReveal boxColor={"#efefef"} duration={0.2}>
        <div className="mt-6">
          <p>
            -&gt; 10+ 低价建站模板.
            <br />
            -&gt; 技能方向：
            {SKILL_CONFIG.map((item, index) => {
              return (
                <span key={item} className="font-semibold text-[#5046e6]">
                  {item}
                  {index === SKILL_CONFIG.length - 1 ? "..." : ", "}
                </span>
              );
            })}
            <br />
            -&gt; 100% 服务到位 绝对专业. <br />
          </p>
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#efefef"} duration={0.2}>
        <Button className="mt-[1.6rem] bg-[#5046e6]">联系我吧</Button>
      </BoxReveal>
    </div>
  );
};

export default BoxText;
