import * as $dara from '@darabonba/typescript';
export declare class ListIdentityProviderSCIMCredentialsResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The creation time returned by AgentIdentity.
     *
     * @example
     * 2026-10-26T00:00:00Z
     */
    createTime?: string;
    /**
     * @remarks
     * The credential ID. This field is required and cannot be empty when deleting a credential. Use the ID returned in the credential list, not the plaintext token.
     *
     * @example
     * credential-example
     */
    credentialId?: string;
    /**
     * @remarks
     * The expiration time returned by AgentIdentity. Only credentials with the `Enabled` status that have not expired are considered available.
     *
     * @example
     * 2027-10-26T00:00:00Z
     */
    expireTime?: string;
    /**
     * @remarks
     * The credential status. Only credentials with the `Enabled` status that have not expired are considered available. This field is not the operationStatus of a SCIM task.
     *
     * @example
     * READY
     */
    status?: string;
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
export declare class ListIdentityProviderSCIMCredentialsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business result code. If the call fails, use this code in combination with the HTTP status code and message for troubleshooting.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The operation result. For the result structure, see the response fields of this operation. The response of an asynchronous write operation indicates that the request is accepted, but does not guarantee that the background task is completed.
     */
    data?: ListIdentityProviderSCIMCredentialsResponseBodyData[];
    /**
     * @remarks
     * The processing status of the current request, which does not equate to the final result of the background task.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The request acceptance or error message. For asynchronous task results, check the corresponding query operation.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID used to correlate the current call for troubleshooting. Retain this ID if the call fails.
     *
     * @example
     * request-example
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the current request is processed successfully. For asynchronous writes, you must continue to query the task result even if this value is true.
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
