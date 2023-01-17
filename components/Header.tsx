// import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex item-center justify-between space-x-2 px-10 py-5">
      <div className="flex item-center space-x-2">
        <Link href="/" className="text-2xl font-bold">
          {/* <Image className="rounded-full" /> */}
          akib.dev
        </Link>
      </div>
      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 hover:bg-gray-800 text-[#F7A80A] flex items-center rounded-full text-center"
        >
          About me
        </Link>
      </div>
    </header>
  );
}

export default Header;
