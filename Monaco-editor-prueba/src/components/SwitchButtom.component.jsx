import { useToggle } from "../hooks/useToggle";

export const SwitchButtonComponent = ({ text, secondaryText, icon, secondaryIcon }) => {
    const { toggle, handleToggle } = useToggle();

    return (
        <button onClick={handleToggle} className="p-1 bg-white rounded-md border-2 border-black focus:ring-2 focus:ring-slate-300">
            {icon || secondaryIcon ? (
                <img src={toggle ? icon : secondaryIcon} alt={toggle ? icon : secondaryIcon} />
            ) : (
                toggle ? text : secondaryText
            )}
        </button>
    );
};
