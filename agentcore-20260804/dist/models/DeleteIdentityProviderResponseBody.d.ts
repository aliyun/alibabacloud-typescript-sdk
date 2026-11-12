import * as $dara from '@darabonba/typescript';
export declare class DeleteIdentityProviderResponseBodyDataConfiguration extends $dara.Model {
    /**
     * @remarks
     * HTTP-Redirect or HTTP-POST. Required for manual entry. Queries return the short name.
     *
     * @example
     * HTTP-Redirect
     */
    bindingType?: string;
    /**
     * @remarks
     * Required for manual entry. It must be non-empty and up to 2,048 characters in length. It cannot be changed if a configuration already exists. It is different from the local entity ID queried by the SP.
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
     * The actual switch value, which is Enabled or Disabled. It is not equivalent to the expected loginEnabled value saved by AC.
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
export declare class DeleteIdentityProviderResponseBodyDataSaml extends $dara.Model {
    /**
     * @remarks
     * HTTP-Redirect or HTTP-POST. Required for manual entry. Queries return the short name.
     *
     * @example
     * HTTP-Redirect
     */
    bindingType?: string;
    /**
     * @remarks
     * Required for manual entry. It must be non-empty and up to 2,048 characters in length. It cannot be changed if a configuration already exists. It is different from the local entity ID queried by the SP.
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
     * Required for manual entry. It must be a non-empty array using PEM X.509 certificate text. The current validity period is verified. A maximum of two certificates are allowed after deduplication.
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
export declare class DeleteIdentityProviderResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The actual SAML configuration is read back on demand only in GetIdentityProvider. SCIM queries and preparations return the actual receiving status and URL.
     */
    configuration?: DeleteIdentityProviderResponseBodyDataConfiguration;
    /**
     * @remarks
     * The type of the external identity provider. Valid values: DingTalk and Feishu.
     *
     * @example
     * DingTalk
     */
    identityProviderType?: string;
    /**
     * @remarks
     * Currently, only SAML is supported. This field may not be returned if no valid configuration is saved. OIDC placeholder initialization is not supported.
     *
     * @example
     * SAML
     */
    protocol?: string;
    /**
     * @remarks
     * The input supports either XML or complete manual entry. Queries return the standardized configuration and do not echo the original XML. This field can be omitted if not configured.
     */
    saml?: DeleteIdentityProviderResponseBodyDataSaml;
    /**
     * @remarks
     * The status. CONFIGURED (the configuration is accepted and waiting for the user pool to be activated), SYNCING (synchronizing organization members), SYNCED (organization member synchronization is complete), READY (the binding is in effect), SYNC_FAILED (organization member synchronization failed), UPDATING (updating the configuration), UPDATE_FAILED (configuration update failed), DISCONNECTING (disconnecting), and DISCONNECT_FAILED (disconnection failed).
     *
     * @example
     * READY
     */
    status?: string;
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
export declare class DeleteIdentityProviderResponseBody extends $dara.Model {
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
     * The external identity provider binding information after the disconnection operation is accepted.
     */
    data?: DeleteIdentityProviderResponseBodyData;
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
     * The response message. Returns an error description when the request fails.
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
