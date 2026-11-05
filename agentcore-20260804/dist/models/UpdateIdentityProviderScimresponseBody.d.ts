import * as $dara from '@darabonba/typescript';
export declare class UpdateIdentityProviderSCIMResponseBodyDataConfiguration extends $dara.Model {
    /**
     * @remarks
     * HTTP-Redirect or HTTP-POST. Required when manually filled in. The query returns the short name.
     *
     * @example
     * HTTP-Redirect
     */
    bindingType?: string;
    /**
     * @remarks
     * Required when manually filled in. The value must be non-empty and cannot exceed 2,048 characters. Existing configurations cannot be replaced. This ID is different from the local entity ID queried by the SP.
     *
     * @example
     * https://idp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * Required when manually filled in. The value must be an absolute HTTPS URL and cannot contain user credentials or fragments.
     *
     * @example
     * https://idp.example.com/sso
     */
    loginUrl?: string;
    /**
     * @remarks
     * The actual switch value, which is Enabled or Disabled. This value is not equivalent to the expected value of loginEnabled saved in AC.
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
export declare class UpdateIdentityProviderSCIMResponseBodyDataMetadata extends $dara.Model {
    /**
     * @remarks
     * The SAML binding URI in the historical metadata snapshot. For CustomSSO updates, use saml.bindingType.
     *
     * @example
     * urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect
     */
    binding?: string;
    /**
     * @remarks
     * The certificate string in the historical metadata snapshot. To edit the configuration, use saml.x509Certificates and do not submit the old metadata.
     *
     * @example
     * MIICwDCCAaigAwIBAgIULlsHLfcADyBax5ZtFlj+YGzZVo0wDQYJKoZIhvcNAQELBQAwGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMB4XDTI2MDEwMTAwMDAwMFoXDTM2MDEwMTAwMDAwMFowGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAto0DN0W1CrPRzK9QZ9A1aApb4Lg8oGlp2c0PbN3LokXe/HzwxCMXx65IDnrenttxzTwp9BgUnUN/3LRzWaOL2UQ/vNYNW9LFLkI1T64UPyI7eyi28YlALhb41xkYhEp7rz+MjqifBzVZeTDUxBYtbK2hAhbYEL1+udwsXEx0KB7xuQ/rbI2OKeqAEAD1tfYg7T/SM2wrXNYhx+o1HtchM4/0I8Okkk27JQ4y3ofzC5sTySmFF1Y7XcpSd+5WSyazedhkAieo8AB01DkJV6nnKfH8sH0EBsnH3FP8FhqCLrIeEkjX9B9OcIRLGjiZqx4u/ryW1QhMldnv+pFfNjWy/wIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQC1hSQG8AwtGOoX2gKBK4Hi5XBrBreij8WlLTUWld0FINQ0Rg84f/27CjDthywj6wgxCesCuOVFhpxQa1UacsP/Gcai1aKABtLWImcaWECRYK5gDkwhTMFKM9mXA26hH1l4v/UR2iTpEK9H78egC4W7bs2LDTpPryuaNKTqP2O0tMbNkAHB8yecz5LxHXnxadL9Egow25g2RClvpifWqDnuS9TSbKkIWLcPLjocJj2K9ILpBwhXiXi/BiSgyYTLiYvVvih9vX4s+hKGZNJc0j92YLiOHDF0XH1oxgdVjfTmRiedeb2VZJZElptD92z0AqFR7z2d5B+OqpPA2gjuMLV5
     */
    certificates?: string;
    /**
     * @remarks
     * Required when manually filled in. The value must be non-empty and cannot exceed 2,048 characters. Existing configurations cannot be replaced. This ID is different from the local entity ID queried by the SP.
     *
     * @example
     * https://idp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * Required when manually filled in. The value must be an absolute HTTPS URL and cannot contain user credentials or fragments.
     *
     * @example
     * https://idp.example.com/sso
     */
    loginUrl?: string;
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
export declare class UpdateIdentityProviderSCIMResponseBodyDataSaml extends $dara.Model {
    /**
     * @remarks
     * HTTP-Redirect or HTTP-POST. Required when manually filled in. The query returns the short name.
     *
     * @example
     * HTTP-Redirect
     */
    bindingType?: string;
    /**
     * @remarks
     * Required when manually filled in. The value must be non-empty and cannot exceed 2,048 characters. Existing configurations cannot be replaced. This ID is different from the local entity ID queried by the SP.
     *
     * @example
     * https://idp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * Required when manually filled in. The value must be an absolute HTTPS URL and cannot contain user credentials or fragments.
     *
     * @example
     * https://idp.example.com/sso
     */
    loginUrl?: string;
    /**
     * @remarks
     * Required when manually filled in. The value must be a non-empty array and use PEM X.509 certificate text. The current validity period is verified. A maximum of two certificates are allowed after deduplication.
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
export declare class UpdateIdentityProviderSCIMResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The actual SAML configuration is read back on demand only by GetIdentityProvider. The SCIM query and prepare operations return the actual receiving status and URL.
     */
    configuration?: UpdateIdentityProviderSCIMResponseBodyDataConfiguration;
    /**
     * @remarks
     * The creation time recorded on the server.
     *
     * @example
     * 2026-10-26T00:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * CustomSSO returns an empty string. The SCIM receiving URL must be obtained by using the SCIM query or prepare API. The example shows a JSON empty string "". The actual value does not contain double quotation marks.
     *
     * @example
     * ""
     */
    eventSubscriptionCallbackUrl?: string;
    /**
     * @remarks
     * General CRUD operations support DingTalk, Feishu, and CustomSSO. SP queries support only CustomSSO. The SCIM path uses the CustomSSO shared pool.
     *
     * @example
     * CustomSSO
     */
    identityProviderType?: string;
    /**
     * @remarks
     * CustomSSO returns an empty string. The ACS URL for SAML must be obtained by using the SP query API. The example shows a JSON empty string "". The actual value does not contain double quotation marks.
     *
     * @example
     * ""
     */
    loginCallbackUrl?: string;
    /**
     * @remarks
     * Do not set this parameter to true during CustomSSO initialization. A valid SAML configuration must be saved before enabling. Disabling the feature does not delete the configuration. If an asynchronous failure occurs, this expected value does not indicate that the upstream configuration has taken effect.
     */
    loginEnabled?: boolean;
    /**
     * @remarks
     * Vendor parameters are used for DingTalk and Feishu. CustomSSO updates use protocol and saml, and do not accept this field. The return value does not contain vendor keys.
     */
    metadata?: UpdateIdentityProviderSCIMResponseBodyDataMetadata;
    /**
     * @remarks
     * When the status is PENDING or RUNNING, poll GetIdentityProviderSCIM. The facts of failure, pause, and cancellation are retained. This status does not indicate the SAML status.
     *
     * @example
     * PENDING
     */
    operationStatus?: string;
    /**
     * @remarks
     * Only SAML is supported. If no valid configuration is saved, this parameter may not be returned. OIDC placeholder initialization is not supported.
     *
     * @example
     * SAML
     */
    protocol?: string;
    /**
     * @remarks
     * The input supports either XML or complete manual entry. The query returns the standardized configuration and does not echo the original XML. This parameter can be omitted if it is not configured.
     */
    saml?: UpdateIdentityProviderSCIMResponseBodyDataSaml;
    /**
     * @remarks
     * The independent SCIM status. This status does not change the meaning of the original status for shared resources and logon configurations. This parameter corresponds to data.status in the query API.
     *
     * @example
     * UPDATING
     */
    scimStatus?: string;
    /**
     * @remarks
     * The user pool lifecycle and logon configuration task status of CustomSSO. This status does not indicate the SCIM operation result. You can query the SCIM switch result by using GetIdentityProviderSCIM.operationStatus. You cannot use this status to determine whether all protocols are configured.
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * Do not set this parameter to true during CustomSSO initialization. You can only update this parameter by calling UpdateIdentityProviderSCIM later. Determine the result based on operationStatus.
     */
    syncEnabled?: boolean;
    /**
     * @remarks
     * The most recent update time recorded on the server.
     *
     * @example
     * 2026-10-26T00:00:00Z
     */
    updatedAt?: string;
    /**
     * @remarks
     * Required. The ID of the target workspace. The request region must be the same as the region of the target workspace.
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
export declare class UpdateIdentityProviderSCIMResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business result code. If a failure occurs, handle the error based on the HTTP status code and the message.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The original fields and the meaning of status are retained. The new scimStatus parameter corresponds to data.status in the query API, and operationStatus retains the status of the most recent SCIM task.
     */
    data?: UpdateIdentityProviderSCIMResponseBodyData;
    /**
     * @remarks
     * The processing status of the current request. This status is not equivalent to the final result of the background node.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The message indicating that the request is accepted or a fault occurs. Check the result of the asynchronous task by calling the corresponding query API.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The ID of the request. You can use the ID to associate the call with troubleshooting. Retain the ID when a failure occurs.
     *
     * @example
     * request-example
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the current request is processed successfully. A value of true indicates that the request is processed successfully. For asynchronous write operations, you must continue to query the task results.
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
