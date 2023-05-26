/// <reference lib="webworker" />

import { precacheAndRoute } from "workbox-precaching";

import PRODUCTS from "./PRODUCTS.json";

const sw = self as unknown as ServiceWorkerGlobalScope;

// @ts-ignore
const wbManifest = self.__WB_MANIFEST;

const filtered = wbManifest.filter(
  (res: any) => !/build-manifest.json$/.test(res.url)
) as Array<any>;

filtered.push(
  ...[
    { url: "/", revision: null },
    { url: "/blog", revision: null },
    { url: "/posts", revision: null },
    { url: "/pricing", revision: null },
  ]
);

PRODUCTS.forEach(({ id, image }) => {
  filtered.push({ url: image, revision: null });
  filtered.push({ url: `/products/${id}`, revision: null });
});

console.debug({ wbManifest, filtered });

precacheAndRoute(filtered);
