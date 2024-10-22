import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx/lite";

import { MENU_CONFIG } from "../config";

const LayoutMenu = () => {
  const pathname = usePathname();
  const currentPath = pathname.split("/")[1] || "/";

  return (
    <ul className="max-h-0 opacity-0 flex flex-col items-start mt-4 text-sm  md:flex-row md:space-x-1 md:mt-0 md:border-0 w-full md:max-h-screen h-screen md:h-auto md:opacity-100 md:w-auto">
      {MENU_CONFIG.map((item) => {
        return (
          <li key={item.key}>
            <Link
              className="block px-3 py-2 outline-none no-underline hover:no-underline "
              href={item.link}
            >
              <div
                className={clsx(
                  item.key === currentPath && "text-gray-800 font-bold",
                  "text-gray-800 hover:text-gray-500  focus:text-white  text-sm lg:text-base transition-colors duration-300"
                )}
              >
                {item.title}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LayoutMenu;
