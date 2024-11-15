import MobileNav from "@/components/ui/MobileNav";
import Sidebar from "@/components/ui/Sidebar";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif} from "next/font/google";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Lennard', lastName: 'Mersch'};

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>

        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg"
            height={30}
            width={30}
            alt="logo"/>
          <div>
              <MobileNav user={loggedIn}/>
          </div>
          </div>
          {children}
        </div>
    </main>
  );
}
