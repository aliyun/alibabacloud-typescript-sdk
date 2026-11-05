import * as $dara from '@darabonba/typescript';
export declare class CreateIdentityProviderSCIMCredentialResponseBodyDataConfiguration extends $dara.Model {
    /**
     * @remarks
     * The URL configured for the external provisioning system. The presence of a URL does not mean that the external configuration is completed or AC synchronization is enabled.
     *
     * @example
     * https://example.com/scim/v2
     */
    baseUrl?: string;
    /**
     * @remarks
     * The receiver status of AgentIdentity. Enabled indicates that the SCIM receiver is enabled, and Disabled indicates that it is disabled. This is not equivalent to the expected value of syncEnabled in AC.
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
export declare class CreateIdentityProviderSCIMCredentialResponseBodyDataCredential extends $dara.Model {
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
     * The credential ID. It must be non-empty when deleting. Use the ID returned in the credential list, not the plaintext token.
     *
     * @example
     * credential-example
     */
    credentialId?: string;
    /**
     * @remarks
     * The expiration time returned by AgentIdentity. Only credentials that are Enabled and not expired are considered available.
     *
     * @example
     * 2027-10-26T00:00:00Z
     */
    expireTime?: string;
    /**
     * @remarks
     * The credential status of AgentIdentity. Only credentials that are Enabled and not expired are considered available. This field is not the operationStatus of the SCIM task.
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
export declare class CreateIdentityProviderSCIMCredentialResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The actual SAML configuration is read back on demand only in GetIdentityProvider. SCIM queries and preparations return the actual receiver status and URL.
     */
    configuration?: CreateIdentityProviderSCIMCredentialResponseBodyDataConfiguration;
    /**
     * @remarks
     * The current credential summary, including credentialId, status, createTime, and expireTime. It does not include the repeatedly retrievable token.
     */
    credential?: CreateIdentityProviderSCIMCredentialResponseBodyDataCredential;
    /**
     * @remarks
     * The plaintext token. It is returned only when a new credential is created. If the prepare operation reuses a valid credential, this value is null. It cannot be retrieved again from the list. If the response is lost, query the list first instead of automatically reissuing. Do not write it to logs or frontend persistent cache.
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
export declare class CreateIdentityProviderSCIMCredentialResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business result code. Handle it in combination with the HTTP status and message when a failure occurs.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The operation result. For the result structure, see the response fields of this operation. The response of an asynchronous write operation indicates acceptance and does not guarantee that the background node is completed.
     */
    data?: CreateIdentityProviderSCIMCredentialResponseBodyData;
    /**
     * @remarks
     * The processing status of the current request, which is not equivalent to the final result of the background node.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The request acceptance or error message. Check the result of the asynchronous task by using the corresponding query operation.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID. Used to associate this call with troubleshooting. Keep it when a failure occurs.
     *
     * @example
     * request-example
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the current request is processed successfully. A value of true indicates success. For asynchronous writes, you still need to query the task results.
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
