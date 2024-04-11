import { NavbarComponent } from "@/components";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <NavbarComponent/>
      <main className="flex flex-col item-center p-24 text-center">
        <span className="text-lg">Layout General</span>
        { children }
      </main>
    </>
   
  );
}