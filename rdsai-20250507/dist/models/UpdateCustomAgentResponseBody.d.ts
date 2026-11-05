import * as $dara from '@darabonba/typescript';
export declare class UpdateCustomAgentResponseBodySkills extends $dara.Model {
    /**
     * @remarks
     * The skill description.
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
     * The skill name.
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
export declare class UpdateCustomAgentResponseBody extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable tools.
     *
     * @example
     * true
     */
    enableTools?: string;
    /**
     * @remarks
     * The agent ID.
     *
     * @example
     * 82cf3d62-0add-47bd-869f-877131f7****
     */
    id?: string;
    /**
     * @remarks
     * The name of the custom agent.
     *
     * @example
     * Query instance list agent
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
    skills?: UpdateCustomAgentResponseBodySkills[];
    /**
     * @remarks
     * The system prompt.
     *
     * @example
     * I am your custom agent for querying the instance list
     */
    systemPrompt?: string;
    /**
     * @remarks
     * The tool information.
     */
    tools?: string[];
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
