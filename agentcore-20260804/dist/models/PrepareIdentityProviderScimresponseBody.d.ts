import * as $dara from '@darabonba/typescript';
export declare class PrepareIdentityProviderSCIMResponseBodyDataConfiguration extends $dara.Model {
    /**
     * @remarks
     * The URL configured for the external provisioning system. The presence of a URL does not indicate that the external configuration is completed or that access control synchronization is enabled.
     *
     * @example
     * https://example.com/scim/v2
     */
    baseUrl?: string;
    /**
     * @remarks
     * The receiving status of AgentIdentity. Enabled indicates that SCIM receiving is enabled, and Disabled indicates that it is disabled. This is not equivalent to the expected value of syncEnabled in access control.
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
     * The ID of the credential. This parameter is required and cannot be empty when you delete a credential. Use the ID returned in the credential list, not the plaintext token.
     *
     * @example
     * credential-example
     */
    credentialId?: string;
    /**
     * @remarks
     * The expiration time returned by AgentIdentity. Only credentials with the Enabled status that have not expired are considered available.
     *
     * @example
     * 2027-10-26T00:00:00Z
     */
    expireTime?: string;
    /**
     * @remarks
     * The status of the AgentIdentity credential. Only credentials with the Enabled status that have not expired are considered available. This field is not the operationStatus of the SCIM task.
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
     * The actual SAML configuration is read on demand only by using GetIdentityProvider. SCIM query and prepare operations return the actual receiving status and URL.
     */
    configuration?: PrepareIdentityProviderSCIMResponseBodyDataConfiguration;
    /**
     * @remarks
     * The current credential summary, including credentialId, status, createTime, and expireTime. It does not include the token.
     */
    credential?: PrepareIdentityProviderSCIMResponseBodyDataCredential;
    /**
     * @remarks
     * The plaintext token returned only when a new credential is created. If the prepare operation reuses a valid credential, this value is null. The token cannot be retrieved from the list. If the response is lost, query the list first instead of automatically reissuing the token. Do not write the token to logs or persistent frontend caches.
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
     * The business result code. Handle failures by combining the HTTP status code and the message.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The operation result. For the result structure, see the response fields of this API. The response of an asynchronous write API indicates that the request is accepted, but does not guarantee that the background task is completed.
     */
    data?: PrepareIdentityProviderSCIMResponseBodyData;
    /**
     * @remarks
     * The processing status of the current request. This is not equivalent to the final result of the background task.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The request acceptance or error message. Check the result of an asynchronous task by using the corresponding query API.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The ID used to associate the current call with troubleshooting. Retain this ID when a failure occurs.
     *
     * @example
     * request-example
     */
    requestId?: string;
    /**
     * @remarks
     * Specifies whether the current request is processed successfully. A value of true indicates success. For asynchronous writes, you must continue to query the task results.
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
