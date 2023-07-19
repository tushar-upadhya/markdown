import { useState } from "react";

import {
    DatabaseBadges,
    LanguageBadges,
    FPL,
    versionControlBadges,
    SocialsBadges,
} from "../data/badges";

const Generate = () => {
    const [languages, setLanguages] = useState([]);

    const [versionControl, setVersionControl] = useState([
        ...versionControlBadges,
    ]);

    const [dataBase, setDataBase] = useState([...DatabaseBadges]);

    const [fpl, setFpl] = useState([...FPL]);

    const [social, setSocial] = useState([...SocialsBadges]);

    const [badgeType, setBadgeType] = useState(["for-the-badge"]);

    const handleTechLanguage = (techName) => {
        const nextList = [...languages];
        const current = languages.find((e) => e.name === techName);
        current.isSelected = current.isSelected ? false : true;
        setLanguages(nextList);
    };

    const handleTechVersion = (techName, selected) => {
        const nextList = [...versionControl];
        const current = versionControl.find((e) => e.name === techName);
        current.isSelected = current.isSelected ? false : true;
        setLanguages(nextList);
    };

    const handleTechDataBase = (techName, selected) => {
        const nextList = [...dataBase];
        const current = dataBase.find((e) => e.name === techName);
        current.isSelected = current.isSelected ? false : true;
        setLanguages(nextList);
    };

    const handleTechFPL = (techName, selected) => {
        const nextList = [...fpl];
        const current = fpl.find((e) => e.name === techName);
        current.isSelected = current.isSelected ? false : true;
        setLanguages(nextList);
    };

    const handleSocial = (techName, selected) => {
        const nextList = [...social];
        const current = social.find((e) => e.name === techName);
        current.isSelected = current.isSelected ? false : true;
        setLanguages(nextList);
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row">
                <div className="basis-1/2 h-screen overflow-auto p-2 lg:p-4 select-none">
                    {" "}
                    <div className="text-center text-xl">
                        Badge Type:{" "}
                        <select
                            name="badge-type"
                            id="badge-type"
                            onChange={(e) => {
                                setBadgeType(e.target.value);
                            }}
                        >
                            <option value="for-the-badge" defaultValue={true}>
                                For The Badge
                            </option>
                            <option value="plastic">Plastic</option>
                            <option value="flat">Flat</option>
                            <option value="flat-square">Flat Square</option>
                            <option value="social">Social</option>
                        </select>
                    </div>
                    {/*Languages  */}
                    <div className="text-slate-900 font-medium pt-6 pb-2">
                        Languages
                    </div>
                    <div className="font-medium text-xl">
                        <div className="text-slate-700">
                            {languages.map((badge) => (
                                <div
                                    className={
                                        "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                                        (badge.isSelected
                                            ? "bg-slate-700 border-slate-700 text-slate-50"
                                            : "border-slate-300 text-slate-800")
                                    }
                                    key={badge.name}
                                    onClick={() =>
                                        handleTechLanguage(badge.name)
                                    }
                                >
                                    {" "}
                                    <span className="pl-2 pr-1 py-1">
                                        {badge.name}
                                    </span>{" "}
                                    <button
                                        className={
                                            "w-6  rounded-r-md font-medium " +
                                            (badge.isSelected
                                                ? " text-slate-50 "
                                                : "text-slate-600")
                                        }
                                    >
                                        <div
                                            className={
                                                "transition-all inline-block " +
                                                (badge.isSelected
                                                    ? " rotate-45"
                                                    : "rotate-0")
                                            }
                                        >
                                            +
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Framework & Libraries */}
                        <div className="text-slate-900 font-medium pt-6 pb-2">
                            Framework & Libraries
                        </div>
                        <div className="text-slate-700">
                            {fpl.map((badge) => (
                                <div
                                    className={
                                        "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                                        (badge.isSelected
                                            ? "bg-slate-700 border-slate-700 text-slate-50"
                                            : "border-slate-300 text-slate-800")
                                    }
                                    key={badge.name}
                                    onClick={() => handleTechFPL(badge.name)}
                                >
                                    {" "}
                                    <span className="pl-2 pr-1 py-1">
                                        {badge.name}
                                    </span>{" "}
                                    <button
                                        className={
                                            "w-6  rounded-r-md font-medium " +
                                            (badge.isSelected
                                                ? " text-slate-50 "
                                                : "text-slate-600")
                                        }
                                    >
                                        <div
                                            className={
                                                "transition-all inline-block " +
                                                (badge.isSelected
                                                    ? " rotate-45"
                                                    : "rotate-0")
                                            }
                                        >
                                            +
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Databases */}
                        <div className="text-slate-900 font-medium pt-6 pb-2">
                            Databases
                        </div>
                        <div className="text-slate-700">
                            {dataBase.map((badge) => (
                                <div
                                    className={
                                        "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                                        (badge.isSelected
                                            ? "bg-slate-700 border-slate-700 text-slate-50"
                                            : "border-slate-300 text-slate-800")
                                    }
                                    key={badge.name}
                                    onClick={() =>
                                        handleTechDataBase(badge.name)
                                    }
                                >
                                    {" "}
                                    <span className="pl-2 pr-1 py-1">
                                        {badge.name}
                                    </span>{" "}
                                    <button
                                        className={
                                            "w-6  rounded-r-md font-medium " +
                                            (badge.isSelected
                                                ? " text-slate-50 "
                                                : "text-slate-600")
                                        }
                                    >
                                        <div
                                            className={
                                                "transition-all inline-block " +
                                                (badge.isSelected
                                                    ? " rotate-45"
                                                    : "rotate-0")
                                            }
                                        >
                                            +
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                        {/* Version Control */}
                        <div className="text-slate-900 font-medium pt-6 pb-2">
                            Version Control
                        </div>
                        <div className="text-slate-700">
                            {versionControl.map((badge) => (
                                <div
                                    className={
                                        "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                                        (badge.isSelected
                                            ? "bg-slate-700 border-slate-700 text-slate-50"
                                            : "border-slate-300 text-slate-800")
                                    }
                                    key={badge.name}
                                    onClick={() =>
                                        handleTechVersion(badge.name)
                                    }
                                >
                                    {" "}
                                    <span className="pl-2 pr-1 py-1">
                                        {badge.name}
                                    </span>{" "}
                                    <button
                                        className={
                                            "w-6  rounded-r-md font-medium " +
                                            (badge.isSelected
                                                ? " text-slate-50 "
                                                : "text-slate-600")
                                        }
                                    >
                                        <div
                                            className={
                                                "transition-all inline-block " +
                                                (badge.isSelected
                                                    ? " rotate-45"
                                                    : "rotate-0")
                                            }
                                        >
                                            +
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                        {/* Socials */}
                        <div className="text-slate-900 font-medium pt-6 pb-2">
                            Socials
                        </div>
                        <div className="text-slate-700">
                            {SocialsBadges.map((badge) => (
                                <div
                                    className={
                                        "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                                        (badge.isSelected
                                            ? "bg-slate-700 border-slate-700 text-slate-50"
                                            : "border-slate-300 text-slate-800")
                                    }
                                    key={badge.name}
                                    onClick={() => handleSocial(badge.name)}
                                >
                                    {" "}
                                    <span className="pl-2 pr-1 py-1 ">
                                        {badge.name}
                                    </span>{" "}
                                    <button
                                        className={
                                            "w-6  rounded-r-md font-medium " +
                                            (badge.isSelected
                                                ? " text-slate-50 "
                                                : "text-slate-600")
                                        }
                                    >
                                        <div
                                            className={
                                                "transition-all inline-block " +
                                                (badge.isSelected
                                                    ? " rotate-45"
                                                    : "rotate-0")
                                            }
                                        >
                                            +
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="basis-1/2 h-screen overflow-auto p-2 lg:p-4">
                    {/* <Preview
                        database={database}
                        versionControl={versionControl}
                        fpl={fpl}
                        languages={languages}
                        social={social}
                        badgeType={badgeType}
                    /> */}
                </div>
            </div>
        </>
    );
};

export default Generate;
