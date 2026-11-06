import * as $dara from '@darabonba/typescript';
export declare class PrepareIdentityProviderSCIMResponseBodyDataConfiguration extends $dara.Model {
    /**
     * @remarks
     * The URL configured for the external provisioning system. The presence of a URL does not indicate that the external configuration is completed or AgentCore synchronization is enabled.
     *
     * @example
     * https://example.com/scim/v2
     */
    baseUrl?: string;
    /**
     * @remarks
     * The receiving status of AgentIdentity. A value of Enabled indicates that SCIM receiving is enabled. A value of Disabled indicates that SCIM receiving is disabled. This status is not equivalent to the expected value of syncEnabled in AgentCore.
     *
     * @example
     * Enabled
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
export declare class PrepareIdentityProviderSCIMResponseBodyDataCredential extends $dara.Model {
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
     * The credential ID. This parameter is required when you delete a credential. Use the ID returned in the credential list, not the plaintext of the token.
     *
     * @example
     * credential-example
     */
    credentialId?: string;
    /**
     * @remarks
     * The expiration time returned by AgentIdentity. Only credentials with the status of Enabled that have not expired are considered available.
     *
     * @example
     * 2027-10-26T00:00:00Z
     */
    expireTime?: string;
    /**
     * @remarks
     * The credential status of AgentIdentity. Only credentials with the status of Enabled that have not expired are considered available. This field is not the operationStatus of the SCIM task.
     *
     * @example
     * Enabled
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
export declare class PrepareIdentityProviderSCIMResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The actual SAML configuration is read on demand only by calling GetIdentityProvider. SCIM query and preparation operations return the actual receiving status and URL.
     */
    configuration?: PrepareIdentityProviderSCIMResponseBodyDataConfiguration;
    /**
     * @remarks
     * The current credential summary, including credentialId, status, createTime, and expireTime. The token is not included because it cannot be repeatedly obtained.
     */
    credential?: PrepareIdentityProviderSCIMResponseBodyDataCredential;
    /**
     * @remarks
     * The plaintext of the newly issued SCIM token. The plaintext is returned only in the current response. If an existing valid credential is reused, an empty string ("") is returned. In this case, use the saved token.
     *
     * @example
     * example-scim-token
     */
    token?: string;
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
export declare class PrepareIdentityProviderSCIMResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business result code. If the call fails, handle the error based on the HTTP status code and the message.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The operation result. For the result structure, see the response fields of this operation. The response of an asynchronous write operation indicates that the request is accepted, but does not guarantee that the background task is completed.
     */
    data?: PrepareIdentityProviderSCIMResponseBodyData;
    /**
     * @remarks
     * The processing status of the current request. This status does not indicate the final result of the background task.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The request acceptance or error message. For asynchronous tasks, you must check the task result by calling the corresponding query operation.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID. You can use this ID to associate the current call with troubleshooting. Keep the ID if the call fails.
     *
     * @example
     * request-example
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the current request is successful. A value of true indicates that the request is processed successfully. For asynchronous write operations, you must continue to query the task result.
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
