"use client";

import { FC, useEffect } from "react";

import { Workbox } from "workbox-window";

export const RegisterSW: FC = () => {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const wb: Workbox = (window as any).workbox || new Workbox("/sw.js");

    wb.addEventListener("activated", async (event) => {
      console.log(`Event ${event.type} is triggered.`);
      console.log(event);
    });

    wb.register();
  }, []);

  return <></>;
};
