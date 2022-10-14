import { DynamicHeroIcon, IconName } from "./DynamicHeroIcon";

interface Props {
  icon: IconName;
  title: string;
}

function HeaderItem({ icon, title }: Props) {
  return (
    <div className="group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20">
      <DynamicHeroIcon
        icon={icon}
        className="mb-1 h-7 group-hover:animate-bounce"
        outline
      />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
