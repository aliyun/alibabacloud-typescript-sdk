import * as $dara from '@darabonba/typescript';
export declare class DeleteTeamResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The team name. The name can contain only lowercase letters, digits, and hyphens (-). It must start and end with a lowercase letter or digit and must be 1 to 128 characters in length.
     *
     * @example
     * team-01
     */
    name?: string;
    /**
     * @remarks
     * The team status. Valid values:
     * - Creating
     * - Active
     * - Updating
     * - Deleting
     * - Failed
     * - Deleted
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
export declare class DeleteTeamResponseBody extends $dara.Model {
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
     * The information about the deleted team.
     */
    data?: DeleteTeamResponseBodyData;
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
     * The response message. An error description is returned if the request failed.
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
     * Indicates whether the request was successful.
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
