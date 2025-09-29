import { Link, NavLink } from "react-router";
import { FaBell, FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { MessageCircle } from "lucide-react";
import { Bell } from "lucide-react";
import { User } from "lucide-react";
import { Plus } from "lucide-react";
import { useState } from "react";
import GetStartModal from "../GetStartModal/GetStartModal";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] =useState(false);

    // Logout handler
    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure you want to logout?",
            text: "You will be returned to the home page.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, logout",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                signOutUser()
                    .then(() => {
                        Swal.fire({
                            icon: "success",
                            title: "Logged out!",
                            text: "You have been successfully logged out.",
                            timer: 1500,
                            showConfirmButton: false,
                        });
                    })
                    .catch((error) => {
                        console.error("Error logging out:", error);
                        Swal.fire({
                            icon: "error",
                            title: "Logout Failed",
                            text: error.message,
                        });
                    });
            }
        });
    };

    const navItems = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-black font-bold border-b" : "font-medium"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/discussions"
                    className={({ isActive }) =>
                        isActive ? "text-black font-bold border-b" : "font-medium"
                    }
                >
                    Discussions
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/pricing"
                    className={({ isActive }) =>
                        isActive ? "text-black font-bold border-b" : "font-medium"
                    }
                >
                    Pricing
                </NavLink>
            </li>
        </>
    );

    return (
        <>
            <div className="shadow-sm z-50  backdrop-blur-md text-white fixed top-0 w-full">
                <div className="navbar max-w-7xl mx-auto px-4">
                    {/* Navbar Start */}
                    <div className="navbar-start flex items-center gap-2">
                        {/* Mobile menu */}
                        <div className="dropdown">
                            <div tabIndex={0} className="btn btn-ghost pl-2 lg:hidden">
                                <FaBars className="text-xl" />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[50] p-3 shadow bg-base-100 rounded-box w-52 space-y-1"
                            >
                                {navItems}
                            </ul>
                        </div>

                        {/* Logo */}
                        <Link
                            to="/"
                        >
                            {/* Logo */}
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                                    <MessageCircle className="w-5 h-5 text-white" />
                                </div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                                    DevForum
                                </h1>
                            </div>

                        </Link>
                    </div>

                    {/* Large screen menu */}

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-2">{navItems}</ul>
                    </div>

                    {/* Navbar End */}
                    <div className="navbar-end space-x-4">
                        <label className="toggle text-base-content">
                            <input type="checkbox" value="synthwave" className="theme-controller" />

                            <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                            <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                        </label>
                        <button className="p-2 rounded relative hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                            <Bell className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
                        </button>

                        {user ? (
                            // Logged-in view: Profile Dropdown
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} className="btn btn-circle avatar online">
                                    <img
                                        src={user.photoURL || "/src/assets/user-default.jpg"}
                                        alt="Profile"
                                        className="rounded-full w-12 border"
                                    />
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="mt-3 z-[50] p-4 shadow menu menu-sm dropdown-content bg-base-100  rounded-box w-64 space-y-3"
                                >
                                    <li>
                                        <p className="text-center font-semibold">
                                            {user.displayName || "User Name"}
                                        </p>
                                    </li>
                                    <li>
                                        <Link to="/dashboard">
                                            <MdDashboard />
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogOut}
                                            className="flex items-center gap-1"
                                        >
                                            <FiLogOut />
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            // Not logged in: Join Us button
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="p-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                            >
                                <User className="w-5 h-5 " />
                            </button>
                        )}

                    </div>
                </div>
            </div>

            {/* Join Us Modal */}
            {isModalOpen && <GetStartModal closeModal={() => setIsModalOpen(false)} />}
        </>
    );
};

export default Navbar;

// import { Link, NavLink } from "react-router";
// import { FaBell, FaBars } from "react-icons/fa";
// import { FiLogOut } from "react-icons/fi";
// import { MdDashboard } from "react-icons/md";
// import JoinUsModal from "../GetStartModal/GetStartModal";
// import React, { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import Swal from "sweetalert2";
// import { MessageCircle } from "lucide-react";

// const Navbar = () => {
//     const { user, signOutUser } = useContext(AuthContext);
//     const [isModalOpen, setIsModalOpen] = React.useState(false);

//     // Logout handler
//     const handleLogOut = () => {
//         Swal.fire({
//             title: "Are you sure you want to logout?",
//             text: "You will be returned to the home page.",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, logout",
//             cancelButtonText: "Cancel",
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 signOutUser()
//                     .then(() => {
//                         Swal.fire({
//                             icon: "success",
//                             title: "Logged out!",
//                             text: "You have been successfully logged out.",
//                             timer: 1500,
//                             showConfirmButton: false,
//                         });
//                     })
//                     .catch((error) => {
//                         console.error("Error logging out:", error);
//                         Swal.fire({
//                             icon: "error",
//                             title: "Logout Failed",
//                             text: error.message,
//                         });
//                     });
//             }
//         });
//     };

//     return (
//         <>
//             <div className="shadow-sm z-50  backdrop-blur-md text-white fixed top-0 w-full">
//                 <div className="navbar max-w-7xl mx-auto px-4">
//                     {/* Navbar Start */}
//                     <div className="navbar-start flex items-center gap-2">
//                         {/* Mobile menu */}
//                         <div className="dropdown">
//                             <div tabIndex={0} className="btn btn-ghost pl-2 lg:hidden">
//                                 <FaBars className="text-xl" />
//                             </div>
//                             <ul
//                                 tabIndex={0}
//                                 className="menu menu-sm dropdown-content mt-3 z-[50] p-3 shadow bg-base-100 rounded-box w-52 space-y-1"
//                             >
//                                 {navItems}
//                             </ul>
//                         </div>

//                         {/* Logo */}
//                         <Link
//                             to="/"
//                         >
//                             {/* Logo */}
//                             <div className="flex items-center space-x-2">
//                                 <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
//                                     <MessageCircle className="w-5 h-5 text-white" />
//                                 </div>
//                                 <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
//                                     DevForum
//                                 </h1>
//                             </div>

//                         </Link>
//                     </div>

//                     {/* Large screen menu */}
//                     <div className="navbar-center hidden lg:flex">
//                         <ul className="menu menu-horizontal px-1 space-x-2">{navItems}</ul>
//                     </div>

//                     {/* Navbar End */}
//                     <div className="navbar-end">
// {user ? (
//     // Logged-in view: Profile Dropdown
//     <div className="dropdown dropdown-end">
//         <div tabIndex={0} className="btn btn-circle avatar online">
//             <img
//                 src={user.photoURL || "/src/assets/user-default.jpg"}
//                 alt="Profile"
//                 className="rounded-full w-12 border"
//             />
//         </div>
//         <ul
//             tabIndex={0}
//             className="mt-3 z-[50] p-4 shadow menu menu-sm dropdown-content bg-base-100  rounded-box w-64 space-y-3"
//         >
//             <li>
//                 <p className="text-center font-semibold">
//                     {user.displayName || "User Name"}
//                 </p>
//             </li>
//             <li>
//                 <Link to="/dashboard">
//                     <MdDashboard />
//                     Dashboard
//                 </Link>
//             </li>
//             <li>
//                 <button
//                     onClick={handleLogOut}
//                     className="flex items-center gap-1"
//                 >
//                     <FiLogOut />
//                     Logout
//                 </button>
//             </li>
//         </ul>
//     </div>
// ) : (
//     // Not logged in: Join Us button
//     <button
//         onClick={() => setIsModalOpen(true)}
//         className="btn btn-outline btn-secondary"
//     >
//         Join Us
//     </button>
// )}
//                     </div>
//                 </div>
//             </div>

//             {/* Join Us Modal */}
//             {isModalOpen && <JoinUsModal closeModal={() => setIsModalOpen(false)} />}
//         </>
//     );
// };

// export default Navbar;
