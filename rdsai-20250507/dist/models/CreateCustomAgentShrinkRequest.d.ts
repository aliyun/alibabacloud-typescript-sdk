import * as $dara from '@darabonba/typescript';
export declare class CreateCustomAgentShrinkRequest extends $dara.Model {
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
     * The name of the custom agent.
     *
     * @example
     * Instance List Query Agent
     */
    name?: string;
    /**
     * @remarks
     * The list of associated skill IDs.
     */
    skillIdsShrink?: string;
    /**
     * @remarks
     * The system prompt.
     *
     * This parameter is required.
     *
     * @example
     * I am your custom agent for querying the instance list
     */
    systemPrompt?: string;
    /**
     * @remarks
     * The tool information.
     */
    toolsShrink?: string;
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
