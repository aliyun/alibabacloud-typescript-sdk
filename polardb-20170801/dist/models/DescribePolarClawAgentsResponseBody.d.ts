import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawAgentsResponseBodyAgentsFiles extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the file is missing.
     *
     * @example
     * false
     */
    missing?: boolean;
    /**
     * @remarks
     * The file name.
     *
     * @example
     * SOUL.md
     */
    name?: string;
    /**
     * @remarks
     * The file path.
     *
     * @example
     * /home/node/.openclaw/workspace-work/SOUL.md
     */
    path?: string;
    /**
     * @remarks
     * The file size, in bytes.
     *
     * @example
     * 1024
     */
    size?: number;
    /**
     * @remarks
     * The last updated timestamp, in milliseconds.
     *
     * @example
     * 1716000000000
     */
    updatedAtMs?: number;
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
export declare class DescribePolarClawAgentsResponseBodyAgentsIdentity extends $dara.Model {
    /**
     * @remarks
     * The avatar path or content.
     *
     * @example
     * test
     */
    avatar?: string;
    /**
     * @remarks
     * The avatar URL.
     *
     * @example
     * test
     */
    avatarUrl?: string;
    /**
     * @remarks
     * The emoji identifier in Unicode format such as U+1F99E, or a direct emoji character.
     *
     * @example
     * U+1F99E
     */
    emoji?: string;
    /**
     * @remarks
     * The identity name.
     *
     * @example
     * PolarClaw
     */
    name?: string;
    /**
     * @remarks
     * The theme.
     *
     * @example
     * space lobster
     */
    theme?: string;
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
export declare class DescribePolarClawAgentsResponseBodyAgentsModel extends $dara.Model {
    /**
     * @remarks
     * The fallback model list.
     */
    fallbacks?: string[];
    /**
     * @remarks
     * The primary model.
     *
     * @example
     * claude-sonnet-4-5
     */
    primary?: string;
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
export declare class DescribePolarClawAgentsResponseBodyAgents extends $dara.Model {
    /**
     * @remarks
     * Indicates whether this is the default agent.
     *
     * @example
     * true
     */
    default?: boolean;
    /**
     * @remarks
     * The agent file list.
     */
    files?: DescribePolarClawAgentsResponseBodyAgentsFiles[];
    /**
     * @remarks
     * Agent ID
     *
     * @example
     * main
     */
    id?: string;
    /**
     * @remarks
     * The identity information.
     */
    identity?: DescribePolarClawAgentsResponseBodyAgentsIdentity;
    /**
     * @remarks
     * The model configuration.
     */
    model?: DescribePolarClawAgentsResponseBodyAgentsModel;
    /**
     * @remarks
     * The agent display name.
     *
     * @example
     * main
     */
    name?: string;
    /**
     * @remarks
     * The list of skills available to the agent.
     */
    skills?: string[];
    /**
     * @remarks
     * The working directory path.
     *
     * @example
     * /home/node/.openclaw/workspace-work
     */
    workspace?: string;
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
export declare class DescribePolarClawAgentsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The agent list.
     */
    agents?: DescribePolarClawAgentsResponseBodyAgents[];
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-**************
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
     * The default agent ID.
     *
     * @example
     * main
     */
    defaultId?: string;
    /**
     * @remarks
     * The primary agent key name.
     *
     * @example
     * main
     */
    mainKey?: string;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 24A1990B-4F6E-482B-B8CB-75C612******
     */
    requestId?: string;
    /**
     * @remarks
     * The routing scope.
     *
     * @example
     * per-sender
     */
    scope?: string;
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
