import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { ACCOUNT_CONFIG } from "../config";

const LayoutAccount: React.FC<IUser> = ({ name }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className=" cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>{name || ""}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {ACCOUNT_CONFIG.map((item) => {
          return item.type === "separator" ? (
            <DropdownMenuSeparator key={item.key} />
          ) : (
            <DropdownMenuItem key={item.key} className=" cursor-pointer">
              {item.title}
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuItem className=" text-red-500 font-bold cursor-pointer">
          退出登录
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LayoutAccount;
