import React, { useContext } from "react";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { AppSidebarContext } from "..";
import LayoutAccount from "./LayoutAccount";

const LayoutLogin = () => {
  const sidebarContext = useContext(AppSidebarContext);

  return sidebarContext?.isLogin ? (
    <LayoutAccount {...(sidebarContext?.user || {})} />
  ) : (
    <RainbowButton className=" h-8 bg-[#5046e6]">登录</RainbowButton>
  );
};

export default LayoutLogin;
