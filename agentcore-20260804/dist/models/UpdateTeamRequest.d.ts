import * as $dara from '@darabonba/typescript';
export declare class UpdateTeamRequestBodyAgents extends $dara.Model {
    /**
     * @remarks
     * The agent ID.
     *
     * @example
     * agent-123456
     */
    agentId?: string;
    /**
     * @remarks
     * The role of the agent in the team. Valid values: LEADER, WORKER.
     *
     * @example
     * WORKER
     */
    teamRole?: string;
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
export declare class UpdateTeamRequestBodyUsers extends $dara.Model {
    /**
     * @remarks
     * The role of the user in the team. Valid values: ADMIN, MEMBER. Each team must have exactly one ADMIN.
     *
     * @example
     * ADMIN
     */
    teamRole?: string;
    /**
     * @remarks
     * The user ID.
     *
     * @example
     * usr-123456
     */
    userId?: string;
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
export declare class UpdateTeamRequestBody extends $dara.Model {
    /**
     * @remarks
     * The new list of agent members, which replaces the existing agent members based on full overwrite semantics. If not specified, the list remains unchanged. The list must contain exactly one LEADER, and the LEADER must be a managed agent. External agents and high-code agents only support the WORKER role. High-code agents must also declare the AG-UI (agui) or OpenAI Chat Completions (openai-chat-completion) protocol in the latest version configuration.
     */
    agents?: UpdateTeamRequestBodyAgents[];
    /**
     * @remarks
     * The new description of the team. If not specified, the description remains unchanged.
     *
     * @example
     * Team responsible for intelligent customer service
     */
    description?: string;
    /**
     * @remarks
     * The new list of user members, which replaces the existing user members based on full overwrite semantics. If this parameter is specified, it must contain exactly one member with the ADMIN role. If not specified, the list remains unchanged.
     */
    users?: UpdateTeamRequestBodyUsers[];
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
export declare class UpdateTeamRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for updating a team.
     */
    body?: UpdateTeamRequestBody;
    /**
     * @remarks
     * Not supported.
     *
     * @example
     * Not supported
     */
    clientToken?: string;
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
