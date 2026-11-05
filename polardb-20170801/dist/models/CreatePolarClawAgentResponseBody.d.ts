import * as $dara from '@darabonba/typescript';
export declare class CreatePolarClawAgentResponseBodyAgentIdentity extends $dara.Model {
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
     * The emoji identifier.
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
     * work
     */
    name?: string;
    /**
     * @remarks
     * The theme.
     *
     * @example
     * work
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
export declare class CreatePolarClawAgentResponseBodyAgent extends $dara.Model {
    /**
     * @remarks
     * Agent ID
     *
     * @example
     * work
     */
    id?: string;
    /**
     * @remarks
     * The identity information.
     */
    identity?: CreatePolarClawAgentResponseBodyAgentIdentity;
    /**
     * @remarks
     * The display name of the agent.
     *
     * @example
     * work
     */
    name?: string;
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
export declare class CreatePolarClawAgentResponseBody extends $dara.Model {
    /**
     * @remarks
     * The details of the created agent.
     */
    agent?: CreatePolarClawAgentResponseBodyAgent;
    /**
     * @remarks
     * Agent ID
     *
     * @example
     * work
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
     * The agent name.
     *
     * @example
     * work
     */
    name?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
     */
    requestId?: string;
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
