import * as $dara from '@darabonba/typescript';
export declare class UpdateTeamResponseBodyDataAgents extends $dara.Model {
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
     * The role of the agent in the team. Valid values: LEADER, WORKER. Each team must have exactly one LEADER.
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
export declare class UpdateTeamResponseBodyDataUsers extends $dara.Model {
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
export declare class UpdateTeamResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The list of agent members in the team.
     */
    agents?: UpdateTeamResponseBodyDataAgents[];
    /**
     * @remarks
     * The creation time in RFC 3339 UTC format.
     *
     * @example
     * 2026-08-12T03:04:05Z
     */
    createdAt?: string;
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
     * The team name. It can only contain lowercase letters, digits, and hyphens, must start and end with a lowercase letter or digit, and must be 1 to 128 characters in length.
     *
     * @example
     * team-01
     */
    name?: string;
    /**
     * @remarks
     * The team status. Valid values: Creating, Active, Updating, Deleting, Failed, Deleted.
     *
     * @example
     * Active
     */
    status?: string;
    /**
     * @remarks
     * The team ID.
     *
     * @example
     * tm-123456
     */
    teamId?: string;
    /**
     * @remarks
     * The last modification time in RFC 3339 UTC format.
     *
     * @example
     * 2026-08-12T03:04:05Z
     */
    updatedAt?: string;
    /**
     * @remarks
     * The list of user members in the team.
     */
    users?: UpdateTeamResponseBodyDataUsers[];
    /**
     * @remarks
     * The workspace ID.
     *
     * @example
     * ws-123456
     */
    workspaceId?: string;
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
export declare class UpdateTeamResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The updated team information.
     */
    data?: UpdateTeamResponseBodyData;
    /**
     * @remarks
     * The HTTP status code.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The response message. An error description is returned if the request fails.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * request-123456
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     */
    success?: boolean;
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
