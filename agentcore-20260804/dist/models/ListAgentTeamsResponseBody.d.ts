import * as $dara from '@darabonba/typescript';
export declare class ListAgentTeamsResponseBodyItems extends $dara.Model {
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
     * The team ID.
     *
     * @example
     * team-123456
     */
    teamId?: string;
    /**
     * @remarks
     * The team name.
     *
     * @example
     * Default team
     */
    teamName?: string;
    /**
     * @remarks
     * The role of the agent in the team.
     *
     * @example
     * MEMBER
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
export declare class ListAgentTeamsResponseBody extends $dara.Model {
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
     * The list of agent-team membership relationships.
     */
    items?: ListAgentTeamsResponseBodyItems[];
    /**
     * @remarks
     * The number of records returned on the current page.
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
     * The cursor used to retrieve the next page. An empty value indicates that no more data is available.
     *
     * @example
     * dXNlci1vZmZzZXQ6MTA
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
     * The total number of records that meet the query conditions.
     *
     * @example
     * 5
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
