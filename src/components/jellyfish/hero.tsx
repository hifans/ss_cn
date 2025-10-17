import { Button } from "@/components/ui/button";
import { GITHUB_REPO_URL } from "@/constants";
import Link from "next/link";
import ShinyButton from "@/components/ui/shiny-button";
import { getTotalUsers } from "@/utils/stats";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import LineText from "../lineText";
import { SiApple, SiAndroid } from "@icons-pack/react-simple-icons";
import { RoughNotation } from "react-rough-notation";

export function Hero() {
  return (
    <div className="relative isolate pt-14 dark:bg-gray-900">
      <div className="pt-20 pb-4 sm:pt-20 sm:pb-2 lg:pb-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl sm:text-6xl bg-clip-text ">
              无广告、简洁的
            </h1>
            <h1 className="text-4xl font-bold sm:text-6xl bg-clip-text p-6">
              <LineText>水木社区客户端</LineText>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              帖子原汁原味，连
              <RoughNotation type="circle" show={true} color="#2563EB">
                签名
                {/* <span className="text-white"></span> */}
              </RoughNotation>
              都完美呈现 ，除了基本的
              <RoughNotation type="circle" show={true} color="#2563EB">
                看帖
              </RoughNotation>
              、
              <RoughNotation type="circle" show={true} color="#2563EB">
                发帖
              </RoughNotation>
              还提供额外的特色功能。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-4 md:gap-x-6">
              <a href="https://app.adjust.com/8mq63al" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full hover:bg-blue-700 hover:text-white"
                >
                  <SiApple className="h-4 w-4" />
                  App Store
                </Button>
              </a>
              <Link
                href="https://cos3.pgyer.com/26a7e13a1b4de58fc4727557ece792e2.apk?sign=c8af6ef13b384fb227f807cea1d53f13&sign2=cf0a8bd0dbba451813ce8f120be09d50&t=1760508965&response-content-disposition=attachment%3Bfilename%3D%22%E5%BF%AB%E7%9C%8B%E6%B0%B4%E6%AF%8D_2.0.0.apk%22"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full hover:bg-blue-700 hover:text-white"
                >
                  <SiAndroid className="h-4 w-4" />
                  下载安装包
                </Button>
              </Link>
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
