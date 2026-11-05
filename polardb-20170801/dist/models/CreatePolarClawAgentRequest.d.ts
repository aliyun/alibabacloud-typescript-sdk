import * as $dara from '@darabonba/typescript';
export declare class CreatePolarClawAgentRequest extends $dara.Model {
    /**
     * @remarks
     * The agent name.
     *
     * This parameter is required.
     *
     * @example
     * work
     */
    agentId?: string;
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The avatar URL or path.
     *
     * @example
     * test
     */
    avatar?: string;
    /**
     * @remarks
     * The emoji character.
     *
     * @example
     * U+1F99E
     */
    emoji?: string;
    /**
     * @remarks
     * Specifies whether to restart the gateway after creation. Default value: true.
     *
     * @example
     * true
     */
    restart?: boolean;
    /**
     * @remarks
     * The absolute path of the agent working directory.
     *
     * This parameter is required.
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
