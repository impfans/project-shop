"use client";
import React, { useMemo, useState } from "react";
import LayoutNav from "./_components/LayoutMenu";
import LayoutLogin from "./_components/LayoutLogin";

export const AppSidebarContext =
  React.createContext<IAppSidebarContextValue | null>({});

const AppSidebar = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const contextValue = useMemo<IAppSidebarContextValue>(
    () => ({ user, setUser, isLogin, setIsLogin }),
    [user, setUser, isLogin, setIsLogin]
  );

  return (
    <AppSidebarContext.Provider value={contextValue}>
      <nav className=" 2xl:max-w-7xl mx-auto px-3 lg:px-6 py-3">
        <div className=" flex flex-wrap items-center justify-between ">
          <div>
            <div>Logo</div>
          </div>
          <div className=" flex items-center">
            <div className=" mr-2">
              <LayoutNav />
            </div>
            <LayoutLogin/>
          </div>
        </div>
      </nav>
    </AppSidebarContext.Provider>
  );
};

export default AppSidebar;
