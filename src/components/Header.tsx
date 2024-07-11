"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import { IoMdCart } from "react-icons/io";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../type";
import FormattedPrice from "./FormattedPrice";
import Link from "next/link";
import { addUser, deleteUser } from "@/redux/shoppingSlice";
import { BsBookmarks } from "react-icons/bs";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Carts", href: "/cart" },
];

const Header = () => {
  const dispatch = useDispatch();
  const pathName = usePathname();
  const { data: session } = useSession();
  const { productData, orderData } = useSelector(
    (state: StateProps) => state.shopping
  );

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    } else {
      dispatch(deleteUser());
    }
  }, [session, dispatch]);

  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    let amt = 0;
    productData.map((item: Products) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmt(amt);
  }, [productData]);

  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50">
      <Container className="h-full flex items-center justify-between md:gap-x-5">
        <Logo />
        {/* Nav Links */}
        <nav className="hidden gap-6 lg:flex 2xl:ml-16">
          {links.map((link, id) => (
            <div key={id}>
              {pathName === link.href ? (
                <Link href={link.href} className="text-base text-orange-500">
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-base text-black transition duration-300 hover:text-orange-500"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {/* Login/Register */}
          {!session && (
            <div onClick={() => signIn()} className="headerDiv cursor-pointer">
              <AiOutlineUser className="text-2xl" />
              <p className="text-sm font-semibold">Login/Register</p>
            </div>
          )}
          {/* Cart button */}
          <Link href={"/cart"}>
            <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
              <IoMdCart className="text-xl" />
              <p className="hidden md:inline text-sm font-semibold">
                <FormattedPrice amount={totalAmt ? totalAmt : 0} />
              </p>
              <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
                {productData ? productData?.length : 0}
              </span>
            </div>
          </Link>
          {/* user Image */}
          {session && (
            <Image
              src={session?.user?.image as string}
              alt="user image"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          )}
          {/* Order button */}
          {orderData?.order?.length > 0 && session && (
            <Link
              href={"/order"}
              className="headerDiv px-2 gap-x-1 cursor-pointer"
            >
              <BsBookmarks className="text-2xl" />
              <p className="hidden md:inline text-sm font-semibold">Orders</p>
            </Link>
          )}
          {/* Logout button */}
          {session && (
            <div
              onClick={() => signOut()}
              className="headerDiv px-2 gap-x-1 cursor-pointer"
            >
              <FiLogOut className="text-2xl" />
              <p className="hidden md:inline text-sm font-semibold">Logout</p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
