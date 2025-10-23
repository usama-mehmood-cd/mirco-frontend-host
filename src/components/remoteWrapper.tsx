import { Suspense } from "react";
import LoadingSpinner from "./spinner";
import type { ReactNode } from "react";

export default function RemoteWrapper({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>;
}
