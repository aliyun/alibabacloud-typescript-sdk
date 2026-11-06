import * as $dara from '@darabonba/typescript';
export declare class CreateTeamRequestBodyAgents extends $dara.Model {
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
     * The role of the agent in the team. Valid values: LEADER and WORKER.
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
export declare class CreateTeamRequestBodyUsers extends $dara.Model {
    /**
     * @remarks
     * The role of the user in the team. Valid values: ADMIN and MEMBER. Each team must have exactly one ADMIN.
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
export declare class CreateTeamRequestBody extends $dara.Model {
    /**
     * @remarks
     * The list of agent members in the team.
     */
    agents?: CreateTeamRequestBodyAgents[];
    /**
     * @remarks
     * The team description.
     *
     * @example
     * Team responsible for intelligent customer service
     */
    description?: string;
    /**
     * @remarks
     * The team name. It can only contain lowercase letters, digits, and hyphens, must start and end with a lowercase letter or a digit, and must be 1 to 128 characters in length.
     *
     * This parameter is required.
     *
     * @example
     * team-01
     */
    name?: string;
    /**
     * @remarks
     * The list of user members in the team. The list must contain exactly one member with the ADMIN role.
     */
    users?: CreateTeamRequestBodyUsers[];
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
export declare class CreateTeamRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for creating a team.
     */
    body?: CreateTeamRequestBody;
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
