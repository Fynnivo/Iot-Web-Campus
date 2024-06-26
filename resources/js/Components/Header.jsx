import React, { useState } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
} from "@material-tailwind/react";
import {
    HomeIcon,
    NewspaperIcon,
    UserCircleIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    Bars2Icon,
    ChatBubbleLeftRightIcon,
    UserIcon,
    UserPlusIcon,
} from "@heroicons/react/24/solid";

// profile menu component
const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
    },
    {
        label: "Help",
        icon: LifebuoyIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                        }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${
                                isLastItem
                                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                    : ""
                            }`}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${
                                    isLastItem ? "text-red-500" : ""
                                }`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

// nav list menu
const navListMenuItems = [
    {
        title: "Sejarah",
        description:
            "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
    },
    {
        title: "Struktur Organisasi",
        description:
            "Learn how to use @material-tailwind/react, packed with rich components for React.",
    },
    {
        title: "Kegiatan",
        description:
            "A complete set of UI Elements for building faster websites in less time.",
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMenuMobile, setIsMenuMobile] = useState(false);

    const renderItems = navListMenuItems.map(({ title, description }) => (
        <a href="#" key={title}>
            <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                    {title}
                </Typography>
                <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                >
                    {description}
                </Typography>
            </MenuItem>
        </a>
    ));

    return (
        <React.Fragment>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        className="font-normal"
                    >
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                            <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
                            About Us{" "}
                            <ChevronDownIcon
                                strokeWidth={2}
                                className={`h-3 w-3 transition-transform ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
                    {/* <Card
            color="blue"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card> */}
                    <ul className="col-span-7 flex w-full flex-col gap-1">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
                <MenuItem onClick={() => setIsMenuMobile(!isMenuMobile)} className=" flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
                    <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500"  />{" "}
                    About Us{" "}
                    <ChevronDownIcon
                        strokeWidth={2}
                        className={`h-3 w-3 transition-transform ${
                            isMenuMobile ? "rotate-180" : ""
                        }`}
                    />
                </MenuItem>
                  { isMenuMobile? <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden ">
                        {renderItems}
                  </ul> : <div></div>}
        </React.Fragment>
    );
}

// nav list component
const navListItems = [
    {
        label: "Home",
        icon: HomeIcon,
    },
    {
        label: "News",
        icon: NewspaperIcon,
    },
    {
        label: "Contact",
        icon: ChatBubbleLeftRightIcon,
    },
];

const navListItemsMobile = [
    {
        label: "Home",
        icon: HomeIcon,
    },
    {
        label: "News",
        icon: NewspaperIcon,
    },
    {
        label: "Contact",
        icon: ChatBubbleLeftRightIcon,
    },
    {
        label:  "Login to Your Account",
        icon: UserIcon
    },
    {
        label: "Sign Up",
        icon: UserPlusIcon
    }
];

function NavList() {
    return (
        <ul className="mt-2 mb-4 ml-28 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            {navListItems.map(({ label, icon }, key) => (
                <Typography
                    key={label}
                    as="a"
                    href="#"
                    variant="small"
                    color="gray"
                    className="font-medium text-blue-gray-500"
                >
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, {
                            className: "h-[18px] w-[18px]",
                        })}{" "}
                        <span className="text-gray-900"> {label}</span>
                    </MenuItem>
                </Typography>
            ))}
            <NavListMenu />
        </ul>
    );
}
function NavListMobile() {
    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center h-screen">
            {navListItemsMobile.map(({ label, icon }, key) => (
                <Typography
                    key={label}
                    as="a"
                    href="#"
                    variant="small"
                    color="gray"
                    className="font-medium text-blue-gray-500"
                >
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, {
                            className: "h-[18px] w-[18px]",
                        })}{" "}
                        <span className="text-gray-900"> {label}</span>
                    </MenuItem>
                </Typography>
            ))}
            <NavListMenu />
        </ul>
    );
}

export function ComplexNavbar(props) {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false)
        );
    }, []);

    return (
        <Navbar className="!max-w-full rounded-none">
            <div className=" flex items-center justify-between text-blue-gray-900">
                <img src={props.img} className="w-[80px] h-[50px]" alt="" />
                <div className="hidden lg:block">
                    <NavList />
                </div>

                {props.user ? "" :<div className="hidden lg:flex gap-2">
                    <Button variant="text">Log In</Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-500">Sign Up</Button>
                </div>}
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="lg:hidden"
                >
                    <Bars2Icon className="h-6 w-6" />
                </IconButton>
                {props.user ? <ProfileMenu /> : ""}
            </div>
            <MobileNav open={isNavOpen} className="">
                <NavListMobile />
            </MobileNav>
        </Navbar>
    );
}
