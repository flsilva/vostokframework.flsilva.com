"use client";

import "client-only";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { Logo } from "./logo/Logo";
import { MainMenu } from "./MainMenu";
import { MainMenuMobile } from "./MainMenuMobile";
import { HamburgerMenuSvg } from "@/features/shared/ui/svg/HamburgerMenuSvg";
import { XIcon } from "@/features/shared/ui/svg/XIcon";
import { ClassNamePropsOptional } from "./ClassNameProps";

export const MainHeader = ({ className }: ClassNamePropsOptional) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={twMerge(
        "flex flex-col w-full justify-center border-b-4 border-white lg:px-12 py-6 lg:flex-row",
        className
      )}
    >
      <div className="flex flex-row items-center justify-between px-8 lg:px-0 lg:w-5xl">
        <Logo onClick={() => setIsMobileMenuOpen(false)} />
        {!isMobileMenuOpen && (
          <button
            type="button"
            className="lg:hidden -m-2.5 mt-6 p-2.5"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HamburgerMenuSvg aria-hidden="true" />
          </button>
        )}
        {isMobileMenuOpen && (
          <button
            type="button"
            className="lg:hidden -m-2.5 mt-6 p-2.5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XIcon aria-hidden="true" />
          </button>
        )}
        <div className="hidden lg:flex">
          <MainMenu />
        </div>
      </div>
      <div className="flex w-full lg:hidden">
        <MainMenuMobile
          isOpen={isMobileMenuOpen}
          onItemClick={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
};
