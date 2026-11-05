import * as $dara from '@darabonba/typescript';
export declare class GetCustomAgentResponseBodySkills extends $dara.Model {
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
     * The skill type.
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
export declare class GetCustomAgentResponseBody extends $dara.Model {
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 2025-06-04T02:25:43Z
     */
    createdAt?: string;
    /**
     * @remarks
     * Indicates whether tools are enabled.
     *
     * @example
     * true
     */
    enableTools?: boolean;
    /**
     * @remarks
     * The backup set ID.
     *
     * @example
     * 17053
     */
    id?: string;
    /**
     * @remarks
     * The name of the dedicated agent.
     *
     * @example
     * Instance list query agent
     */
    name?: string;
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
    skills?: GetCustomAgentResponseBodySkills[];
    /**
     * @remarks
     * The system prompt.
     *
     * @example
     * I am your dedicated agent for querying instance lists
     */
    systemPrompt?: string;
    /**
     * @remarks
     * The tool details.
     */
    tools?: string[];
    /**
     * @remarks
     * The modification time.
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
