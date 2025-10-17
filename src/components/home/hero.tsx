import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShinyButton from "@/components/ui/shiny-button";
import { getTotalUsers } from "@/utils/stats";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import LineText from "../lineText";
import { SiApple, SiAndroid } from "@icons-pack/react-simple-icons";
import { RoughNotation } from "react-rough-notation";

export function HomeHero() {
  return (
    <div className="relative isolate dark:bg-gray-900">
      <div className="pt-10 pb-4 sm:pt-10 sm:pb-2 lg:pb-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-left">
            {/* <h1 className="text-4xl font-bold sm:text-6xl bg-clip-text p-6">
              <LineText>SimpleStone Ltd</LineText>
            </h1> */}
            <div className="mt-6">
              <h2 className=" text-md md:text-lg font-bold  bg-clip-text text-muted-foreground">
                彼时我已徒然开悟，
                <br />
                明白人生和世事大抵如此，
                <br />
                靠近了，
                <br />
                都不壮观。
                {/* <RoughNotation type="circle" show={true} color="#2563EB">
                签名
              </RoughNotation> */}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// This component will be wrapped in Suspense
async function TotalUsersButton() {
  const totalUsers = await getTotalUsers();

  if (!totalUsers) return null;

  return (
    <ShinyButton className="rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 ring-1 ring-inset ring-purple-500/20">
      {totalUsers} Users & Growing
    </ShinyButton>
  );
}

// Skeleton fallback for the TotalUsersButton
function TotalUsersButtonSkeleton() {
  return (
    <div className="rounded-full bg-purple-500/10 ring-1 ring-inset ring-purple-500/20 px-4 py-1.5 text-sm font-medium">
      <Skeleton className="w-32 h-5" />
    </div>
  );
}
