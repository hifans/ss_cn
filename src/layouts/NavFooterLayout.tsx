import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default async function NavFooterLayout({
  children,
  // renderFooter = true,
  footerChildren,
  logoImg = "/logo.png",
  logoText = "SimpleStone",
}: Readonly<{
  children: React.ReactNode;
  // renderFooter?: boolean;
  footerChildren?: React.ReactNode;
  logoImg?: string;
  logoText?: string;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation logoImg={logoImg} logoText={logoText} />
      <main className="flex-1">{children}</main>
      {/* {footerChildren !== undefined ? footerChildren : null} */}
      <Footer footerChildren={footerChildren} />
    </div>
  );
}
