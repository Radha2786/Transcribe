import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "../mode-toggle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="border border-spacing-8 flex justify-between p-2">
      <Menubar>
        <MenubarMenu >
          <MenubarTrigger
            className="text-md subpixel-antialiased cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger
            className="text-md subpixel-antialiased cursor-pointer"
            onClick={() => navigate("/chart")}
          >
            Chart
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <div>
        <div className="flex gap-4">
          <ModeToggle />

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
