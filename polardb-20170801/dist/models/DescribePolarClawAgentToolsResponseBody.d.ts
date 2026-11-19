import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawAgentToolsResponseBodyCurrentConfig extends $dara.Model {
    /**
     * @remarks
     * The list of explicitly allowed tools.
     */
    allow?: string[];
    /**
     * @remarks
     * The list of additionally allowed tools.
     */
    alsoAllow?: string[];
    /**
     * @remarks
     * The list of denied tools.
     */
    deny?: string[];
    /**
     * @remarks
     * The tool profile.
     *
     * @example
     * full
     */
    profile?: string;
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
export declare class DescribePolarClawAgentToolsResponseBodyGroupsTools extends $dara.Model {
    /**
     * @remarks
     * The list of profiles that include this tool by default.
     */
    defaultProfiles?: string[];
    /**
     * @remarks
     * The tool description.
     *
     * @example
     * Read the content of the specified file
     */
    description?: string;
    /**
     * @remarks
     * The tool identifier.
     *
     * @example
     * read
     */
    id?: string;
    /**
     * @remarks
     * The tool name.
     *
     * @example
     * Read file
     */
    label?: string;
    /**
     * @remarks
     * The source.
     *
     * @example
     * core
     */
    source?: string;
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
export declare class DescribePolarClawAgentToolsResponseBodyGroups extends $dara.Model {
    /**
     * @remarks
     * The group identifier.
     *
     * @example
     * file
     */
    id?: string;
    /**
     * @remarks
     * The group name.
     *
     * @example
     * File operations
     */
    label?: string;
    /**
     * @remarks
     * The source: core or plug-in ID.
     *
     * @example
     * core
     */
    source?: string;
    /**
     * @remarks
     * The list of tools.
     */
    tools?: DescribePolarClawAgentToolsResponseBodyGroupsTools[];
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
export declare class DescribePolarClawAgentToolsResponseBodyProfiles extends $dara.Model {
    /**
     * @remarks
     * The profile identifier.
     *
     * @example
     * full
     */
    id?: string;
    /**
     * @remarks
     * The display name.
     *
     * @example
     * All tools
     */
    label?: string;
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
export declare class DescribePolarClawAgentToolsResponseBody extends $dara.Model {
    /**
     * @remarks
     * Agent ID
     *
     * @example
     * main
     */
    agentId?: string;
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
     * The current tool configuration.
     */
    currentConfig?: DescribePolarClawAgentToolsResponseBodyCurrentConfig;
    /**
     * @remarks
     * The list of tool groups.
     */
    groups?: DescribePolarClawAgentToolsResponseBodyGroups[];
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
     * The list of available profiles.
     */
    profiles?: DescribePolarClawAgentToolsResponseBodyProfiles[];
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * F45FFACC-xxx
     */
    requestId?: string;
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
