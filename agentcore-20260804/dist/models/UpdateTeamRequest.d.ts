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
     * The new list of agent members. The existing agent members are replaced based on full overwrite semantics. If this parameter is not specified, the existing agent members remain unchanged.
     */
    agents?: UpdateTeamRequestBodyAgents[];
    /**
     * @remarks
     * The new team description. If this parameter is not specified, the existing description remains unchanged.
     *
     * @example
     * Team responsible for intelligent customer service
     */
    description?: string;
    /**
     * @remarks
     * The new list of user members. The existing user members are replaced based on full overwrite semantics. If this parameter is specified, it must contain exactly one member with the ADMIN role. If this parameter is not specified, the existing user members remain unchanged.
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
