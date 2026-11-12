import * as $dara from '@darabonba/typescript';
export declare class DeleteUserResponseBodyData extends $dara.Model {
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
     * The username. It must be unique within the workspace and can contain only lowercase letters, digits, and hyphens. It must start and end with a lowercase letter or a digit, and must be 1 to 32 characters in length.
     *
     * @example
     * user-01
     */
    name?: string;
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
export declare class DeleteUserResponseBody extends $dara.Model {
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
     * The deleted user information.
     */
    data?: DeleteUserResponseBodyData;
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
