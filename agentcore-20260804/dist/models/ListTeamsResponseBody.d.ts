import * as $dara from '@darabonba/typescript';
export declare class ListTeamsResponseBodyItemsAgents extends $dara.Model {
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
     * The agent name.
     *
     * @example
     * agent-01
     */
    agentName?: string;
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
export declare class ListTeamsResponseBodyItemsUsers extends $dara.Model {
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
    /**
     * @remarks
     * The username.
     *
     * @example
     * user-01
     */
    userName?: string;
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
export declare class ListTeamsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The list of agent members in the team.
     */
    agents?: ListTeamsResponseBodyItemsAgents[];
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
     * The team responsible for intelligent customer service
     */
    description?: string;
    /**
     * @remarks
     * The team name. It can contain only lowercase letters, digits, and hyphens. It must start and end with a lowercase letter or a digit, and must be 1 to 128 characters in length.
     *
     * @example
     * team-01
     */
    name?: string;
    /**
     * @remarks
     * The team status. Valid values: Creating, Active, Updating, Deleting, Failed, and Deleted.
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
     * The time of the last modification in RFC 3339 UTC format.
     *
     * @example
     * 2026-08-12T03:04:05Z
     */
    updatedAt?: string;
    /**
     * @remarks
     * The list of user members in the team.
     */
    users?: ListTeamsResponseBodyItemsUsers[];
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
export declare class ListTeamsResponseBody extends $dara.Model {
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
     * The HTTP status code.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The list of teams.
     */
    items?: ListTeamsResponseBodyItems[];
    /**
     * @remarks
     * The maximum number of records per page applied to this query.
     *
     * @example
     * 10
     */
    maxResults?: number;
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
     * The pagination token for the next page. This parameter is empty if no next page exists.
     *
     * @example
     * dGVhbS1vZmZzZXQ6MTA
     */
    nextToken?: string;
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
    /**
     * @remarks
     * The total number of teams that meet the query conditions.
     *
     * @example
     * 42
     */
    totalCount?: number;
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
