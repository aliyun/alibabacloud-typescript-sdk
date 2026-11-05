import * as $dara from '@darabonba/typescript';
export declare class ListCustomAgentResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 2020-11-27 16:01:28
     */
    createdAt?: string;
    /**
     * @remarks
     * Specifies whether tools are enabled.
     *
     * @example
     * true
     */
    enableTools?: boolean;
    /**
     * @remarks
     * The agent ID.
     *
     * @example
     * d1b7d639-f34e-44c7-8231-987da14d****
     */
    id?: string;
    /**
     * @remarks
     * The name of the dedicated agent.
     *
     * @example
     * Log analysis agent
     */
    name?: string;
    /**
     * @remarks
     * The system prompt.
     *
     * @example
     * I am your dedicated agent for querying the instance list
     */
    systemPrompt?: string;
    /**
     * @remarks
     * The tool information.
     */
    tools?: string[];
    /**
     * @remarks
     * The update time.
     *
     * @example
     * 2020-11-27 16:02:28
     */
    updatedAt?: string;
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
export declare class ListCustomAgentResponseBodySkills extends $dara.Model {
    /**
     * @remarks
     * The description of the skill.
     *
     * @example
     * SQL query optimization skill
     */
    description?: string;
    /**
     * @remarks
     * The unique identifier of the skill.
     *
     * @example
     * 82cf3d62-0add-47bd-869f-877131f7****
     */
    id?: string;
    /**
     * @remarks
     * The name of the skill.
     *
     * @example
     * query-optimization
     */
    name?: string;
    /**
     * @remarks
     * The type of the skill.
     *
     * @example
     * user
     */
    skillType?: string;
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
export declare class ListCustomAgentResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data object.
     */
    data?: ListCustomAgentResponseBodyData[];
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329****
     */
    requestId?: string;
    /**
     * @remarks
     * The list of associated skill details.
     */
    skills?: ListCustomAgentResponseBodySkills[];
    /**
     * @remarks
     * The total number of entries that meet the request conditions. This parameter is optional and is not returned by default.
     *
     * @example
     * 20
     */
    totalCount?: number;
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
