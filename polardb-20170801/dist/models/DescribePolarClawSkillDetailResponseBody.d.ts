import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawSkillDetailResponseBodyLatestVersion extends $dara.Model {
    /**
     * @remarks
     * The version changelog.
     *
     * @example
     * empty
     */
    changelog?: string;
    /**
     * @remarks
     * The version publish timestamp in Unix milliseconds.
     *
     * @example
     * 1767545394459
     */
    createdAt?: number;
    /**
     * @remarks
     * The version number.
     *
     * @example
     * 1.0.0
     */
    version?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribePolarClawSkillDetailResponseBodyOwner extends $dara.Model {
    /**
     * @remarks
     * The display name of the author.
     *
     * @example
     * Peter Steinberger
     */
    displayName?: string;
    /**
     * @remarks
     * The account identifier of the author.
     *
     * @example
     * steipete
     */
    handle?: string;
    /**
     * @remarks
     * The profile picture URL.
     *
     * @example
     * https://avatars.githubusercontent.com/u/58493?v=4
     */
    image?: string;
    /**
     * @remarks
     * The user ID of the author.
     *
     * @example
     * s179zksw999xz8ms4cy7pb2fr183m5jq
     */
    userId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribePolarClawSkillDetailResponseBodySkillStats extends $dara.Model {
    /**
     * @remarks
     * The number of comments.
     *
     * @example
     * 6
     */
    comments?: number;
    /**
     * @remarks
     * The number of downloads.
     *
     * @example
     * 155765
     */
    downloads?: number;
    /**
     * @remarks
     * The total number of installations of all time.
     *
     * @example
     * 3787
     */
    installsAllTime?: number;
    /**
     * @remarks
     * The current number of installations.
     *
     * @example
     * 3664
     */
    installsCurrent?: number;
    /**
     * @remarks
     * The number of stars.
     *
     * @example
     * 404
     */
    stars?: number;
    /**
     * @remarks
     * The number of versions.
     *
     * @example
     * 1
     */
    versions?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribePolarClawSkillDetailResponseBodySkill extends $dara.Model {
    /**
     * @remarks
     * The first publish timestamp in Unix milliseconds.
     *
     * @example
     * 1767545394459
     */
    createdAt?: number;
    /**
     * @remarks
     * The display name.
     *
     * @example
     * Weather
     */
    displayName?: string;
    /**
     * @remarks
     * The Skill identifier.
     *
     * @example
     * weather
     */
    slug?: string;
    /**
     * @remarks
     * The statistics information.
     */
    stats?: DescribePolarClawSkillDetailResponseBodySkillStats;
    /**
     * @remarks
     * The brief description.
     *
     * @example
     * Get current weather and forecasts (no API key required).
     */
    summary?: string;
    /**
     * @remarks
     * The tag key-value pairs.
     *
     * @example
     * {
     *     "latest": "1.0.0"
     * }
     */
    tags?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The last update timestamp in Unix milliseconds.
     *
     * @example
     * 1778485729679
     */
    updatedAt?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribePolarClawSkillDetailResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-xxx
     */
    applicationId?: string;
    /**
     * @remarks
     * The response status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The latest version information.
     */
    latestVersion?: DescribePolarClawSkillDetailResponseBodyLatestVersion;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The Skill author information.
     */
    owner?: DescribePolarClawSkillDetailResponseBodyOwner;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * F45FFACC-xxx
     */
    requestId?: string;
    /**
     * @remarks
     * The core information of the Skill.
     */
    skill?: DescribePolarClawSkillDetailResponseBodySkill;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
