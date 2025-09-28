import { Link, NavLink } from "react-router";
import { FaBell, FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import JoinUsModal from "./JoinUsModal";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

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

    // Dynamic NavItems
    const navItems = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-b font-bold border-b" : "font-medium"
                    }
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/membership"
                    className={({ isActive }) =>
                        isActive ? "text-b font-bold border-b" : "font-medium"
                    }
                >
                    Membership
                </NavLink>
            </li>

            {/* Dashboard route only if logged in */}
            {user && (
                <li>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive
                                ? "text-b font-bold border-b flex items-center gap-1"
                                : "font-medium flex items-center gap-1"
                        }
                    >
                        <MdDashboard />
                        Dashboard
                    </NavLink>
                </li>
            )}

            {/* Notification icon */}
            <li>
                <Link to="/announcement" className="btn btn-ghost text-xl">
                    <FaBell />
                </Link>
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
                            className="text-2xl font-bold italic underline decoration-wavy decoration-secondary"
                        >
                            pawfect
                        </Link>
                    </div>

                    {/* Large screen menu */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 space-x-2">{navItems}</ul>
                    </div>

                    {/* Navbar End */}
                    <div className="navbar-end">
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
                                    className="mt-3 z-[50] p-4 shadow menu menu-sm dropdown-content bg-base-100 text-black rounded-box w-64 space-y-3"
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
                                className="btn btn-outline btn-secondary"
                            >
                                Join Us
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Join Us Modal */}
            {isModalOpen && <JoinUsModal closeModal={() => setIsModalOpen(false)} />}
        </>
    );
};

export default Navbar;
