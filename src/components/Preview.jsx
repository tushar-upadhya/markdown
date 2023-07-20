const Preview = ({
    database,
    languages,
    fpl,
    versionControl,
    social,
    badgeType,
}) => {
    return (
        <>
            <div className="text-2xl font-medium mt-4">Preview</div>
            <div className="flex flex-row gap-1 flex-wrap mt-4">
                {languages.map(
                    (badge) =>
                        badge.isSelected && (
                            <img
                                src={
                                    "https://img.shields.io/badge/" +
                                    badge.image +
                                    "&style=" +
                                    badgeType
                                }
                                key={badge.name}
                                alt="badge"
                            />
                        )
                )}

                {fpl.map(
                    (badge) =>
                        badge.isSelected && (
                            <img
                                src={
                                    "https://img.shields.io/badge/" +
                                    badge.image +
                                    "&style=" +
                                    badgeType
                                }
                                key={badge.name}
                                alt="badge"
                            />
                        )
                )}

                {database.map(
                    (badge) =>
                        badge.isSelected && (
                            <img
                                src={
                                    "https://img.shields.io/badge/" +
                                    badge.image +
                                    "&style=" +
                                    badgeType
                                }
                                key={badge.name}
                                alt="badge"
                            />
                        )
                )}

                {versionControl.map(
                    (badge) =>
                        badge.isSelected && (
                            <img
                                src={
                                    "https://img.shields.io/badge/" +
                                    badge.image +
                                    "&style=" +
                                    badgeType
                                }
                                key={badge.name}
                                alt="badge"
                            />
                        )
                )}

                {social.map(
                    (badge) =>
                        badge.isSelected && (
                            <img
                                src={
                                    "https://img.shields.io/badge/" +
                                    badge.image +
                                    "&style=" +
                                    badgeType
                                }
                                key={badge.name}
                                alt="badge"
                            />
                        )
                )}
            </div>

            <div className="text-center mt-6">
                <span className="bg-slate-700 text-slate-50 m-2 p-1 rounded-lg">
                    Code
                </span>
            </div>

            <div className="text-slate-100 bg-slate-800 rounded-lg p-2 md:p-4 overflow-y-auto">
                {languages.map(
                    (badge) =>
                        badge.isSelected && (
                            <span key={badge.name}>
                                ![{badge.name}](
                                {"https://img.shields.io/badge/" +
                                    badge.image +
                                    "&style=" +
                                    badgeType}
                                ) <br />
                            </span>
                        )
                )}

                {fpl.map(
                    (badge) =>
                        badge.isSelected && (
                            <span key={badge.name}>
                                ![{badge.name}](
                                {"https://img.shields.io/badge/" +
                                    badge.image +
                                    "&style=" +
                                    badgeType}
                                ) <br />
                            </span>
                        )
                )}

                {database.map(
                    (badge) =>
                        badge.isSelected && (
                            <span key={badge.name}>
                                ![{badge.name}](
                                {"https://img.shields.io/badge/" +
                                    badge.image +
                                    "&style=" +
                                    badgeType}
                                ) <br />
                            </span>
                        )
                )}

                {versionControl.map(
                    (badge) =>
                        badge.isSelected && (
                            <span key={badge.name}>
                                ![{badge.name}](
                                {"https://img.shields.io/badge/" +
                                    badge.image +
                                    "&style=" +
                                    badgeType}
                                ) <br />
                            </span>
                        )
                )}

                {social.map(
                    (badge) =>
                        badge.isSelected && (
                            <span key={badge.name}>
                                ![{badge.name}](
                                {"https://img.shields.io/badge/" +
                                    badge.image +
                                    "&style=" +
                                    badgeType}
                                ) <br />
                            </span>
                        )
                )}
            </div>
        </>
    );
};

export default Preview;
