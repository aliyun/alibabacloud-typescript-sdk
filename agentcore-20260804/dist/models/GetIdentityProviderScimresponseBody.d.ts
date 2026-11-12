import * as $dara from '@darabonba/typescript';
export declare class GetIdentityProviderSCIMResponseBodyDataConfiguration extends $dara.Model {
    /**
     * @remarks
     * The URL configured for the external provisioning system. The presence of a URL does not mean that the external configuration is completed or AgentCore synchronization is enabled.
     *
     * @example
     * https://example.com/scim/v2
     */
    baseUrl?: string;
    /**
     * @remarks
     * Enabled indicates that SCIM receiving is enabled, and Disabled indicates that it is disabled. This is not equivalent to the expected value of syncEnabled in AgentCore.
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
export declare class GetIdentityProviderSCIMResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The actual SAML configuration is read back on demand only in GetIdentityProvider. SCIM queries and preparations return the actual receiving status and URL.
     */
    configuration?: GetIdentityProviderSCIMResponseBodyDataConfiguration;
    /**
     * @remarks
     * The original status of the most recent independent SCIM operation task. An empty string ("") is returned if no historical tasks exist.
     *
     * @example
     * SUCCESS
     */
    operationStatus?: string;
    /**
     * @remarks
     * The SCIM independent configuration status.
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * Do not pass true during CustomSSO initialization. Subsequently, it can only be updated through UpdateIdentityProviderSCIM, and the result is determined in combination with operationStatus.
     */
    syncEnabled?: boolean;
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
export declare class GetIdentityProviderSCIMResponseBody extends $dara.Model {
    /**
     * @remarks
     * If the request fails, handle the error based on the HTTP status code and the message.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * For the result structure, see the response fields of this operation. The response of an asynchronous write operation indicates that the request is accepted, but does not guarantee that the background task is completed.
     */
    data?: GetIdentityProviderSCIMResponseBodyData;
    /**
     * @remarks
     * The processing status of this request, which is not equivalent to the final result of the background task.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The request acceptance or error message. For asynchronous tasks, verify the task result by using the corresponding query operation.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * Used to associate this call with troubleshooting. Retain this ID if the call fails.
     *
     * @example
     * request-example
     */
    requestId?: string;
    /**
     * @remarks
     * A value of true indicates that the current request is processed successfully. For asynchronous writes, you must continue to query the task results.
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
