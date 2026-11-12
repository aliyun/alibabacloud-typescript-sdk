import * as $dara from '@darabonba/typescript';
export declare class VerifyWorkspaceAcrRamAuthorizationResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The ID of the ACR Enterprise instance.
     *
     * This parameter is required.
     *
     * @example
     * cri-1234567890abcdef
     */
    acrInstanceId?: string;
    /**
     * @remarks
     * The current mount status of the target repository policy.
     *
     * This parameter is required.
     *
     * @example
     * UNAUTHORIZED
     */
    authorizationStatus?: string;
    /**
     * @remarks
     * The prerequisite status for access. This is not the Secret Ready status.
     *
     * This parameter is required.
     *
     * @example
     * ELIGIBLE
     */
    eligibilityStatus?: string;
    /**
     * @remarks
     * The stable reason code for unauthorized or ineligible status. This field is omitted when there is no reason.
     *
     * @example
     * AcrRamUnauthorized
     *
     * **if can be null:**
     * true
     */
    reasonCode?: string;
    /**
     * @remarks
     * The user-readable reason. This field is omitted when there is no reason.
     *
     * @example
     * Authorize the Workspace role for this ACR instance.
     *
     * **if can be null:**
     * true
     */
    reasonMessage?: string;
    /**
     * @remarks
     * The shared role name selected by the backend. This field is not editable on the frontend.
     *
     * This parameter is required.
     *
     * @example
     * AliyunAgentCoreWorkspace-ws-1234567890abcdef12345
     */
    roleName?: string;
    /**
     * @remarks
     * The source of the shared role. This does not indicate that the authorization is complete.
     *
     * This parameter is required.
     *
     * @example
     * WORKSPACE_SHARED
     */
    roleSource?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * This parameter is required.
     *
     * @example
     * ws-1234567890abcdef12345
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
export declare class VerifyWorkspaceAcrRamAuthorizationResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * This parameter is required.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The response data.
     *
     * This parameter is required.
     */
    data?: VerifyWorkspaceAcrRamAuthorizationResponseBodyData;
    /**
     * @remarks
     * The HTTP status code.
     *
     * This parameter is required.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The response message.
     *
     * This parameter is required.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * This parameter is required.
     *
     * @example
     * 12345678-1234-1234-1234-123456789012
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     *
     * This parameter is required.
     *
     * @example
     * true
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
