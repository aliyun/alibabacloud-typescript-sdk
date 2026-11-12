import * as $dara from '@darabonba/typescript';
export declare class GetUserResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The user ID.
     *
     * @example
     * usr-123456
     */
    agentCoreUserId?: string;
    /**
     * @remarks
     * The authentication method of the user. A value of password indicates that local password authentication in the workspace is used. A value of dingtalk or feishu indicates that the user is synchronized and authenticated by the corresponding external identity provider.
     *
     * @example
     * password
     */
    authMethod?: string;
    /**
     * @remarks
     * The creation time in UTC format based on RFC 3339.
     *
     * @example
     * 2026-08-12T03:04:05Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The display name of the user. It must be 1 to 32 characters in length.
     *
     * @example
     * Zhang San
     */
    displayName?: string;
    /**
     * @remarks
     * The email address of the user. It can be up to 256 characters in length.
     *
     * @example
     * user-01@example.com
     */
    email?: string;
    /**
     * @remarks
     * The username. It must be unique within the workspace, contain only lowercase letters, digits, and hyphens, start and end with a lowercase letter or digit, and be 1 to 32 characters in length.
     *
     * @example
     * user-01
     */
    name?: string;
    /**
     * @remarks
     * The note for the user. It can be up to 1,024 characters in length.
     *
     * @example
     * Agent operations team member
     */
    note?: string;
    /**
     * @remarks
     * The region ID of the resource.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The user status. Valid values: Creating, Active, Updating, Deleting, Failed, and DeleteFailed.
     *
     * @example
     * Active
     */
    status?: string;
    /**
     * @remarks
     * The last update time in UTC format based on RFC 3339.
     *
     * @example
     * 2026-08-12T03:04:05Z
     */
    updatedAt?: string;
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
export declare class GetUserResponseBody extends $dara.Model {
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
     * The user details.
     */
    data?: GetUserResponseBodyData;
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
     * The response message. Returns an error description if the request fails.
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
