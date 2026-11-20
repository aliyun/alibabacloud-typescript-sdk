import * as $dara from '@darabonba/typescript';
export declare class CreateCustomAgentRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable tools.
     *
     * @example
     * true
     */
    enableTools?: boolean;
    /**
     * @remarks
     * The name of the dedicated agent.
     *
     * @example
     * Instance List Query Agent
     */
    name?: string;
    /**
     * @remarks
     * The list of associated skill IDs.
     */
    skillIds?: string[];
    /**
     * @remarks
     * The system prompt.
     *
     * This parameter is required.
     *
     * @example
     * I am your dedicated agent for querying instance lists
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
