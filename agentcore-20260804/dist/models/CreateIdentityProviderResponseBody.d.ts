import * as $dara from '@darabonba/typescript';
export declare class CreateIdentityProviderResponseBodyDataConfiguration extends $dara.Model {
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
     * Required for manual entry. It must be non-empty and contain a maximum of 2,048 characters. It cannot be changed after configuration. It is different from the local entity ID queried by the service provider (SP).
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
     * The actual switch value, which is Enabled or Disabled. It is not equivalent to the expected loginEnabled value saved in the access configuration.
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
export declare class CreateIdentityProviderResponseBodyDataOidc extends $dara.Model {
    /**
     * @remarks
     * The absolute HTTPS URL required in manual entry mode. Do not specify this field in discovery mode.
     *
     * @example
     * https://idp.example.com/authorize
     */
    authorizationEndpoint?: string;
    /**
     * @remarks
     * The default value is client_secret_post. If the value is none, PKCE must be enabled.
     *
     * @example
     * client_secret_post
     */
    clientAuthMethod?: string;
    /**
     * @remarks
     * The client ID registered in the external IdP, which is different from the Matrix client. It cannot be replaced in place after configuration.
     *
     * @example
     * example-client
     */
    clientId?: string;
    /**
     * @remarks
     * The absolute HTTPS discovery endpoint. It is mutually exclusive with manually entered endpoints.
     *
     * @example
     * https://idp.example.com/.well-known/openid-configuration
     */
    discoveryEndpoint?: string;
    /**
     * @remarks
     * The absolute HTTPS issuer of the external IdP. It cannot be replaced in place after configuration.
     *
     * @example
     * https://idp.example.com
     */
    issuer?: string;
    /**
     * @remarks
     * The absolute HTTPS URL required in manual entry mode. Do not specify this field in discovery mode.
     *
     * @example
     * https://idp.example.com/jwks
     */
    jwksUri?: string;
    /**
     * @remarks
     * Specifies whether PKCE is enabled. Default value: true. This parameter must be set to true when client authentication is not used.
     *
     * @example
     * true
     */
    pkceRequired?: boolean;
    /**
     * @remarks
     * An array of strings that must include openid. Default values: openid, profile, and email.
     *
     * @example
     * ["openid","profile","email"]
     */
    scopes?: string[];
    /**
     * @remarks
     * The name of the claim in the ID token that is used to match the SCIM externalId. If omitted during creation, the default value sub is used. If omitted during an update, the saved value is retained. For Azure, you can specify oid. The value must be non-empty and contain no whitespace characters. When you query oidc, the saved value is returned. When you query oidcConfiguration, the actual upstream value is returned, which may be empty.
     *
     * @example
     * oid
     */
    ssoMappingClaim?: string;
    /**
     * @remarks
     * The absolute HTTPS URL required in manual entry mode. Do not specify this field in discovery mode.
     *
     * @example
     * https://idp.example.com/token
     */
    tokenEndpoint?: string;
    /**
     * @remarks
     * The optional absolute HTTPS URL for manual mode. Leave this field empty in Discovery mode.
     *
     * @example
     * https://idp.example.com/userinfo
     */
    userinfoEndpoint?: string;
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
export declare class CreateIdentityProviderResponseBodyDataSaml extends $dara.Model {
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
     * Required for manual entry. It must be non-empty and contain a maximum of 2,048 characters. It cannot be changed after configuration. It is different from the local entity ID queried by the service provider (SP).
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
     * Required for manual entry. It must be a non-empty array that uses PEM X.509 certificate text. The current validity period is verified. A maximum of two certificates are allowed after deduplication.
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
export declare class CreateIdentityProviderResponseBodyDataSyncScope extends $dara.Model {
    /**
     * @remarks
     * When the mode is SelectedDepartments, this parameter must contain at least one non-empty department ID, which should be obtained from ListIdentityProviderDepartments. When the mode is AllAuthorized, pass an empty array or omit this parameter.
     *
     * @example
     * ["10001"]
     */
    departmentIds?: string[];
    /**
     * @remarks
     * Valid values:
     * - AllAuthorized: the entire authorized scope, which is limited by the application address book authorization.
     * - SelectedDepartments: the selected departments and all their sub-departments.
     * When explicitly submitting syncScope, you must provide a valid mode, which is verified by the backend.
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
export declare class CreateIdentityProviderResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The actual SAML configuration is read back on demand only in GetIdentityProvider. SCIM queries and preparations return the actual receiving status and URL.
     */
    configuration?: CreateIdentityProviderResponseBodyDataConfiguration;
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
     * Specifies whether to allow workspace users to log on through the external identity provider.
     */
    loginEnabled?: boolean;
    /**
     * @remarks
     * The security summary of the expected configuration. It does not contain credentials. The original SAML fields and meanings are retained.
     */
    oidc?: CreateIdentityProviderResponseBodyDataOidc;
    /**
     * @remarks
     * Currently, only SAML is supported. This field may not be returned if no valid configuration is saved. Initialization with an OIDC placeholder is not supported.
     *
     * @example
     * SAML
     */
    protocol?: string;
    /**
     * @remarks
     * The input supports either XML or full manual entry. Queries return the standardized configuration and do not echo the original XML. This field can be omitted if it is not configured.
     */
    saml?: CreateIdentityProviderResponseBodyDataSaml;
    /**
     * @remarks
     * The binding status. Valid values:
     * - CONFIGURED: configuration accepted and waiting for user pool activation
     * - SYNCING: synchronizing organization members
     * - SYNCED: organization member synchronization completed
     * - READY: binding in effect
     * - SYNC_FAILED: organization member synchronization failed
     * - UPDATING: updating configuration
     * - UPDATE_FAILED: configuration update failed
     * - DISCONNECTING: disconnecting the binding
     * - DISCONNECT_FAILED: disconnection failed
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * Specifies whether to enable organization member synchronization. When enabled, organization members are synchronized as workspace users by the external identity provider.
     */
    syncEnabled?: boolean;
    /**
     * @remarks
     * Uses the department-based synchronization scope definition. If omitted during creation, the default value is AllAuthorized, and the initial vendor synchronization is determined by syncOnBind. If omitted or set to null during an update, the original value is retained. Updating and saving the scope does not automatically trigger full synchronization.
     */
    syncScope?: CreateIdentityProviderResponseBodyDataSyncScope;
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
export declare class CreateIdentityProviderResponseBody extends $dara.Model {
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
     * The binding information of the external identity provider.
     */
    data?: CreateIdentityProviderResponseBodyData;
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
