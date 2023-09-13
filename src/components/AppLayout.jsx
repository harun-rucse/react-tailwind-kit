import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex w-[95%] lg:w-[70%] mx-auto p-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
