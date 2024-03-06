"use client";

import React from "react";
import { GlobalHeader, GlobalFooter } from "@components/index";

type AppLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <GlobalHeader />
      <div>{children}</div>
      <GlobalFooter />
    </div>
  );
};

export default HomeLayout;
