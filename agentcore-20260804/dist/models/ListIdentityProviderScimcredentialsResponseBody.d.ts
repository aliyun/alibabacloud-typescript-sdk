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
     * The credential ID. This parameter is required and cannot be empty when you delete a credential. Use the ID returned in the credential list, not the plaintext token.
     *
     * @example
     * credential-example
     */
    credentialId?: string;
    /**
     * @remarks
     * The expiration time returned by AgentIdentity. Only credentials with the status Enabled and that have not expired are considered available.
     *
     * @example
     * 2027-10-26T00:00:00Z
     */
    expireTime?: string;
    /**
     * @remarks
     * The credential status. Only credentials with the status Enabled and that have not expired are considered available. This field is not the operationStatus of a SCIM task.
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
     * The business result code. Handle failures by combining the HTTP status code and the message.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The operation result. For the result structure, see the response fields of this operation. The response of an asynchronous write operation indicates that the request is accepted, but does not guarantee that the background node is completed.
     */
    data?: ListIdentityProviderSCIMCredentialsResponseBodyData[];
    /**
     * @remarks
     * The processing status of this request. This is not equivalent to the final result of the background node.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The request acceptance or error message. For asynchronous tasks, check the result by using the corresponding query operation.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID. Retain this ID for troubleshooting if the call fails.
     *
     * @example
     * request-example
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful. A value of true indicates that the request is processed successfully. For asynchronous writes, you must continue to query the task results.
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
