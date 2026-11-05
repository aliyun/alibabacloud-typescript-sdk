import * as $dara from '@darabonba/typescript';
export declare class UpdatePolarClawAgentResponseBodyAgentIdentity extends $dara.Model {
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
     * The emoji identifier. The value is in Unicode encoding format such as U+1F99E, or a direct emoji character.
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
     * soul lobster
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
export declare class UpdatePolarClawAgentResponseBodyAgent extends $dara.Model {
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
    identity?: UpdatePolarClawAgentResponseBodyAgentIdentity;
    /**
     * @remarks
     * The display name of the agent.
     *
     * @example
     * PolarClaw
     */
    name?: string;
    /**
     * @remarks
     * The working directory path.
     *
     * @example
     * /home/node/.openclaw/workspace-work-v2
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
export declare class UpdatePolarClawAgentResponseBody extends $dara.Model {
    /**
     * @remarks
     * The details of the updated agent.
     */
    agent?: UpdatePolarClawAgentResponseBodyAgent;
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
     * CDB3258F-B5DE-43C4-8935-CBA0CA******
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
