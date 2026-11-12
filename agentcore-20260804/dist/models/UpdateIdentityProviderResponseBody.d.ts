import * as $dara from '@darabonba/typescript';
export declare class UpdateIdentityProviderResponseBodyDataConfiguration extends $dara.Model {
    /**
     * @remarks
     * HTTP-Redirect or HTTP-POST. Required for manual entry. The query returns the short name.
     *
     * @example
     * HTTP-Redirect
     */
    bindingType?: string;
    /**
     * @remarks
     * Required for manual entry. It must be non-empty and contain up to 2,048 characters. The existing configuration cannot be replaced. It is different from the local entity ID queried by the SP.
     *
     * @example
     * https://idp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * Required for manual entry. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
     *
     * @example
     * https://idp.example.com/sso
     */
    loginUrl?: string;
    /**
     * @remarks
     * The actual SSO logon status. The actual switch value is Enabled or Disabled, which is not equivalent to the expected loginEnabled value saved in AC.
     *
     * @example
     * Enabled
     */
    ssoStatus?: string;
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
export declare class UpdateIdentityProviderResponseBodyDataSaml extends $dara.Model {
    /**
     * @remarks
     * HTTP-Redirect or HTTP-POST. Required for manual entry. The query returns the short name.
     *
     * @example
     * HTTP-Redirect
     */
    bindingType?: string;
    /**
     * @remarks
     * Required for manual entry. It must be non-empty and contain up to 2,048 characters. The existing configuration cannot be replaced. It is different from the local entity ID queried by the SP.
     *
     * @example
     * https://idp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * Required for manual entry. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
     *
     * @example
     * https://idp.example.com/sso
     */
    loginUrl?: string;
    /**
     * @remarks
     * Required for manual entry. It must be a non-empty array using PEM X.509 certificate text. The current validity period is verified. Up to two certificates are allowed after deduplication.
     *
     * @example
     * ["-----BEGIN CERTIFICATE-----\\\\nMIICwDCCAaigAwIBAgIULlsHLfcADyBax5ZtFlj+YGzZVo0wDQYJKoZIhvcNAQEL\\\\nBQAwGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMB4XDTI2MDEwMTAwMDAwMFoX\\\\nDTM2MDEwMTAwMDAwMFowGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMIIBIjAN\\\\nBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAto0DN0W1CrPRzK9QZ9A1aApb4Lg8\\\\noGlp2c0PbN3LokXe/HzwxCMXx65IDnrenttxzTwp9BgUnUN/3LRzWaOL2UQ/vNYN\\\\nW9LFLkI1T64UPyI7eyi28YlALhb41xkYhEp7rz+MjqifBzVZeTDUxBYtbK2hAhbY\\\\nEL1+udwsXEx0KB7xuQ/rbI2OKeqAEAD1tfYg7T/SM2wrXNYhx+o1HtchM4/0I8Ok\\\\nkk27JQ4y3ofzC5sTySmFF1Y7XcpSd+5WSyazedhkAieo8AB01DkJV6nnKfH8sH0E\\\\nBsnH3FP8FhqCLrIeEkjX9B9OcIRLGjiZqx4u/ryW1QhMldnv+pFfNjWy/wIDAQAB\\\\nMA0GCSqGSIb3DQEBCwUAA4IBAQC1hSQG8AwtGOoX2gKBK4Hi5XBrBreij8WlLTUW\\\\nld0FINQ0Rg84f/27CjDthywj6wgxCesCuOVFhpxQa1UacsP/Gcai1aKABtLWImca\\\\nWECRYK5gDkwhTMFKM9mXA26hH1l4v/UR2iTpEK9H78egC4W7bs2LDTpPryuaNKTq\\\\nP2O0tMbNkAHB8yecz5LxHXnxadL9Egow25g2RClvpifWqDnuS9TSbKkIWLcPLjoc\\\\nJj2K9ILpBwhXiXi/BiSgyYTLiYvVvih9vX4s+hKGZNJc0j92YLiOHDF0XH1oxgdV\\\\njfTmRiedeb2VZJZElptD92z0AqFR7z2d5B+OqpPA2gjuMLV5\\\\n-----END CERTIFICATE-----"]
     */
    x509Certificates?: string[];
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
export declare class UpdateIdentityProviderResponseBodyDataSyncScope extends $dara.Model {
    /**
     * @remarks
     * For SelectedDepartments, it must contain at least one non-empty department ID, which should be obtained from ListIdentityProviderDepartments. For AllAuthorized, pass an empty array or omit it.
     *
     * @example
     * ["10001"]
     */
    departmentIds?: string[];
    /**
     * @remarks
     * AllAuthorized: All authorized scopes, subject to application directory authorization restrictions. SelectedDepartments: Selected departments and all sub-departments. When explicitly submitting syncScope, a valid mode must be provided and verified by the backend.
     *
     * @example
     * SelectedDepartments
     */
    mode?: string;
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
export declare class UpdateIdentityProviderResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The actual upstream configuration. The actual SAML configuration is read on demand only when you call the GetIdentityProvider operation. SCIM queries and preparations return the actual receiving status and URL.
     */
    configuration?: UpdateIdentityProviderResponseBodyDataConfiguration;
    /**
     * @remarks
     * General CRUD operations support DingTalk, Lark, and CustomSSO. SP queries support only CustomSSO. The SCIM path uses the CustomSSO shared pool.
     *
     * @example
     * CustomSSO
     */
    identityProviderType?: string;
    /**
     * @remarks
     * Do not pass true during CustomSSO initialization. A valid SAML configuration must be saved before enabling. Disabling does not delete the configuration. In case of asynchronous failure, this expected value does not mean that it has taken effect upstream.
     */
    loginEnabled?: boolean;
    /**
     * @remarks
     * The logon protocol for CustomSSO. Only SAML is supported. You can pass SAML when saving the SAML configuration. You can omit this field if you only modify loginEnabled. DingTalk and Lark do not accept this field.
     *
     * @example
     * SAML
     */
    protocol?: string;
    /**
     * @remarks
     * The SAML configuration for CustomSSO. Choose either metadataXml or the four manual entry fields: entityId, loginUrl, bindingType, and x509Certificates. If not submitted, the existing configuration is retained. DingTalk and Lark do not accept this field.
     */
    saml?: UpdateIdentityProviderResponseBodyDataSaml;
    /**
     * @remarks
     * The status of the identity source resource and logon configuration. For CustomSSO, a shared pool status of READY does not mean that SAML is configured. For SCIM, query operationStatus independently for the operation result.
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * Specifies whether synchronization is enabled. Do not pass true when initializing CustomSSO. You can update this parameter only by calling the UpdateIdentityProviderSCIM operation. Determine the result in combination with operationStatus.
     */
    syncEnabled?: boolean;
    /**
     * @remarks
     * Follows the definition of the department-based synchronization scope. If omitted during creation, the default is AllAuthorized. The initial provider synchronization is determined by syncOnBind. If omitted or set to null during an update, the original value is retained. Updating and saving the scope does not automatically execute a full synchronization.
     */
    syncScope?: UpdateIdentityProviderResponseBodyDataSyncScope;
    /**
     * @remarks
     * Required. The ID of the destination workspace. The region of the request must be the same as the region of the destination workspace.
     *
     * @example
     * ws-example
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
export declare class UpdateIdentityProviderResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business result code. If the request fails, use this code in combination with the HTTP status code and the message for troubleshooting.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The business result. For the result structure, see the response parameters of this API operation. For asynchronous write operations, the response indicates that the request is accepted, but does not guarantee that the background task is completed.
     */
    data?: UpdateIdentityProviderResponseBodyData;
    /**
     * @remarks
     * The HTTP status code of the current request. This status code indicates the processing status of the request and does not represent the final result of the background task.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * Task result message. It indicates whether the request is accepted or returns an error message. For asynchronous tasks, check task results by calling the corresponding query API operation.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID. Retain this ID for troubleshooting and to correlate with the current API call if the request fails.
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
