import { HiChip } from "react-icons/hi";
import useDarkMode from "./hooks/useDarkMode";
import { FaMoon, FaSun } from "react-icons/fa";

function Sidebar() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
      bg-white
    dark:bg-gray-900 text-white shadow-lg items-center"
    >
      <SideBarIcon icon={<HiChip size="28" />} />
      <SideBarIcon icon={<HiChip size="28" />} />
      <SideBarIcon icon={<HiChip size="28" />} />
      <SideBarIcon icon={<HiChip size="28" />} />
      <Theme />
    </div>
  );
}

const SideBarIcon = ({ icon, text = "Tooltip💡" }) => (
  <div className="sidebar-icon group/tooltip">
    {icon}
    <span className="sidebar-tooltip group-hover/tooltip:scale-100">
      {text}
    </span>
  </div>
);

const Theme = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <div className="theme-icon" onClick={handleMode}>
      {darkTheme ? <FaMoon size="24" /> : <FaSun size="24" />}
    </div>
  );
};

export default Sidebar;
