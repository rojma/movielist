import Image from "next/image";
import HeaderItem from "./HeaderItems";
function Header() {
  return (
    <header className="m-5 flex h-auto flex-row items-center justify-between sm:flex-row">
      <div className="flex max-w-2xl flex-grow justify-evenly">
        <HeaderItem title={"HOME"} icon={"HomeIcon"} />
        <HeaderItem title={"TRENDING"} icon={"BoltIcon"} />
        <HeaderItem title={"VERIFIED"} icon={"CheckBadgeIcon"} />
        <HeaderItem title={"COLLECTIONS"} icon={"RectangleGroupIcon"} />
        <HeaderItem title={"SEARCH"} icon={"MagnifyingGlassIcon"} />
        <HeaderItem title={"ACCOUNT"} icon={"UserGroupIcon"} />
      </div>

      <Image src={"https://links.papareact.com/ua6"} width={200} height={100} />
    </header>
  );
}
export default Header;
