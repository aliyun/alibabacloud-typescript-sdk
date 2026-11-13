import * as $dara from '@darabonba/typescript';
export declare class GetIdentityProviderResponseBodyDataConfiguration extends $dara.Model {
    /**
     * @remarks
     * The SAML binding type. Valid values: HTTP-Redirect and HTTP-POST. This parameter is required when manually filled in. Queries return short names.
     *
     * @example
     * HTTP-Redirect
     */
    bindingType?: string;
    /**
     * @remarks
     * This parameter is required when manually filled in. It must be non-empty and contain a maximum of 2,048 characters. Existing configurations do not support replacement. It is different from the Entity ID queried by the service provider (SP).
     *
     * @example
     * https://idp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * This parameter is required when manually filled in. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
     *
     * @example
     * https://idp.example.com/sso
     */
    loginUrl?: string;
    /**
     * @remarks
     * The actual switch value is Enabled or Disabled, which is not equivalent to the expected loginEnabled value saved in AC.
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
export declare class GetIdentityProviderResponseBodyDataMetadata extends $dara.Model {
    /**
     * @remarks
     * The App ID of the Lark application. This parameter is required when the binding type is Feishu.
     *
     * @example
     * cli_exampleappid01
     */
    appId?: string;
    /**
     * @remarks
     * The AppKey of the DingTalk application. This parameter is required when the binding type is DingTalk.
     *
     * @example
     * dingexampleappkey01
     */
    appKey?: string;
    /**
     * @remarks
     * The SAML Binding URI in the historical metadata snapshot. For CustomSSO updates, use saml.bindingType.
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
     * The CorpId of the DingTalk enterprise. This parameter is required when the binding type is DingTalk.
     *
     * @example
     * dingexamplecorpid01
     */
    corpId?: string;
    /**
     * @remarks
     * This parameter is required when manually filled in. It must be non-empty and contain a maximum of 2,048 characters. Existing configurations do not support replacement. It is different from the Entity ID queried by the service provider (SP).
     *
     * @example
     * https://idp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * This parameter is required when manually filled in. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
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
export declare class GetIdentityProviderResponseBodyDataOidc extends $dara.Model {
    /**
     * @remarks
     * The absolute HTTPS URL required in manual mode. Do not specify this parameter in discovery mode.
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
     * The client identifier registered in the external IdP, which is different from the Matrix client. In-place replacement is not supported after configuration.
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
     * The absolute HTTPS issuer of the external IdP. In-place replacement is not supported after configuration.
     *
     * @example
     * https://idp.example.com
     */
    issuer?: string;
    /**
     * @remarks
     * The absolute HTTPS URL required in manual mode. Do not specify this parameter in discovery mode.
     *
     * @example
     * https://idp.example.com/jwks
     */
    jwksUri?: string;
    /**
     * @remarks
     * Specifies whether PKCE is enabled. Default value: true. It must be set to true when no client authentication is used.
     *
     * @example
     * true
     */
    pkceRequired?: boolean;
    /**
     * @remarks
     * An array of strings that must contain openid. The default values are openid, profile, and email.
     *
     * @example
     * ["openid","profile","email"]
     */
    scopes?: string[];
    /**
     * @remarks
     * The claim name in the ID token used to match the SCIM externalId. If omitted during initial creation, the default value sub is used. If omitted during an update, the saved value is retained. For Azure, you can enter oid. The value must be non-empty and cannot contain whitespace characters. When you query oidc, the saved value is returned. When you query oidcConfiguration, the actual upstream value is returned, which may be empty.
     *
     * @example
     * oid
     */
    ssoMappingClaim?: string;
    /**
     * @remarks
     * The absolute HTTPS URL required in manual mode. Do not specify this parameter in discovery mode.
     *
     * @example
     * https://idp.example.com/token
     */
    tokenEndpoint?: string;
    /**
     * @remarks
     * The optional absolute HTTPS URL in manual mode. Do not specify this parameter in discovery mode.
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
export declare class GetIdentityProviderResponseBodyDataOidcConfiguration extends $dara.Model {
    /**
     * @remarks
     * The absolute HTTPS URL required in manual mode. Do not specify this parameter in discovery mode.
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
     * The client identifier registered in the external IdP, which is different from the Matrix client. In-place replacement is not supported after configuration.
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
     * Indicates whether the client secret is saved. Only the existence status is returned, not the plaintext.
     *
     * @example
     * false
     */
    hasClientPrivateKey?: boolean;
    /**
     * @remarks
     * Indicates whether the client secret is saved. Only the existence status is returned, not the plaintext.
     *
     * @example
     * true
     */
    hasClientSecret?: boolean;
    /**
     * @remarks
     * The absolute HTTPS issuer of the external IdP. In-place replacement is not supported after configuration.
     *
     * @example
     * https://idp.example.com
     */
    issuer?: string;
    /**
     * @remarks
     * The absolute HTTPS URL required in manual mode. Do not specify this parameter in discovery mode.
     *
     * @example
     * https://idp.example.com/jwks
     */
    jwksUri?: string;
    /**
     * @remarks
     * Specifies whether PKCE is enabled. Default value: true. It must be set to true when no client authentication is used.
     *
     * @example
     * true
     */
    pkceRequired?: boolean;
    /**
     * @remarks
     * An array of strings that must contain openid. The default values are openid, profile, and email.
     *
     * @example
     * ["openid","profile","email"]
     */
    scopes?: string[];
    /**
     * @remarks
     * The claim name in the ID token used to match the SCIM externalId. If omitted during initial creation, the default value sub is used. If omitted during an update, the saved value is retained. For Azure, you can enter oid. The value must be non-empty and cannot contain whitespace characters. When you query oidc, the saved value is returned. When you query oidcConfiguration, the actual upstream value is returned, which may be empty.
     *
     * @example
     * oid
     */
    ssoMappingClaim?: string;
    /**
     * @remarks
     * The current upstream logon switch, which is Enabled or Disabled.
     *
     * @example
     * Disabled
     */
    ssoStatus?: string;
    /**
     * @remarks
     * The absolute HTTPS URL required in manual mode. Do not specify this parameter in discovery mode.
     *
     * @example
     * https://idp.example.com/token
     */
    tokenEndpoint?: string;
    /**
     * @remarks
     * The optional absolute HTTPS URL in manual mode. Do not specify this parameter in discovery mode.
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
export declare class GetIdentityProviderResponseBodyDataSaml extends $dara.Model {
    /**
     * @remarks
     * The SAML binding type. Valid values: HTTP-Redirect and HTTP-POST. This parameter is required when manually filled in. Queries return short names.
     *
     * @example
     * HTTP-Redirect
     */
    bindingType?: string;
    /**
     * @remarks
     * This parameter is required when manually filled in. It must be non-empty and contain a maximum of 2,048 characters. Existing configurations do not support replacement. It is different from the Entity ID queried by the service provider (SP).
     *
     * @example
     * https://idp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * This parameter is required when manually filled in. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
     *
     * @example
     * https://idp.example.com/sso
     */
    loginUrl?: string;
    /**
     * @remarks
     * When manually filled in, a non-empty array is required, using PEM X.509 certificate text. The current validity period is verified, and a maximum of two certificates are allowed after deduplication.
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
export declare class GetIdentityProviderResponseBodyDataSyncScope extends $dara.Model {
    /**
     * @remarks
     * When the mode is SelectedDepartments, this list must contain at least one non-empty department ID, which should be obtained from ListIdentityProviderDepartments. When the mode is AllAuthorized, pass an empty array or omit this parameter.
     *
     * @example
     * ["10001"]
     */
    departmentIds?: string[];
    /**
     * @remarks
     * The scope mode. Valid values: AllAuthorized (all authorized scopes, limited by application address book authorization) and SelectedDepartments (selected departments and all their sub-departments). A valid mode must be provided when explicitly submitting syncScope and is verified by the backend.
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
export declare class GetIdentityProviderResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The actual SAML configuration is read back on demand only in GetIdentityProvider. SCIM queries and preparations return the actual received status and URLs.
     */
    configuration?: GetIdentityProviderResponseBodyDataConfiguration;
    /**
     * @remarks
     * The creation time in UTC format based on RFC 3339.
     *
     * @example
     * 2026-08-12T03:04:05Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The event subscription callback URL. You must configure this URL in the application of the external identity provider to receive organization change events. An empty string is returned when the user pool is not yet activated.
     *
     * @example
     * http://auth.cn-hangzhou.agentteams.aliyuncs.com/roa/dingtalk/event/up-123456
     */
    eventSubscriptionCallbackUrl?: string;
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
     * The logon callback URL. You must configure this URL in the application of the external identity provider. An empty string is returned when the user pool is not yet activated.
     *
     * @example
     * https://signin-cn-hangzhou.aliyunagentid.com/up-123456/dingtalk/callback
     */
    loginCallbackUrl?: string;
    /**
     * @remarks
     * Indicates whether workspace users are allowed to log on through this external identity provider.
     */
    loginEnabled?: boolean;
    /**
     * @remarks
     * The application configuration of the external identity provider. Application secret configurations are not returned.
     */
    metadata?: GetIdentityProviderResponseBodyDataMetadata;
    /**
     * @remarks
     * The security summary of the expected configuration. It does not contain credentials. The original SAML fields and meanings are retained.
     */
    oidc?: GetIdentityProviderResponseBodyDataOidc;
    /**
     * @remarks
     * The security summary queried in real time from AgentIdentity. It does not contain secrets, private keys, or JIT fields. It can be empty when it is not configured or during unbinding.
     */
    oidcConfiguration?: GetIdentityProviderResponseBodyDataOidcConfiguration;
    /**
     * @remarks
     * Currently, only SAML is supported. This parameter may not be returned when no valid configuration is saved. Placeholder initialization with OIDC is not supported.
     *
     * @example
     * SAML
     */
    protocol?: string;
    /**
     * @remarks
     * The input supports either XML or complete manual entry. Queries return standardized configurations and do not echo the original XML. This parameter can be omitted when not configured.
     */
    saml?: GetIdentityProviderResponseBodyDataSaml;
    /**
     * @remarks
     * The status. Valid values:
     * - CONFIGURED: The configuration is accepted and waiting for the user pool to be activated.
     * - SYNCING: Organization members are being synchronized.
     * - SYNCED: The synchronization of organization members is complete.
     * - READY: The binding is in effect.
     * - SYNC_FAILED: The synchronization of organization members failed.
     * - UPDATING: The configuration is being updated.
     * - UPDATE_FAILED: The configuration update failed.
     * - DISCONNECTING: The binding is being disconnected.
     * - DISCONNECT_FAILED: The disconnection failed.
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * Indicates whether organization member synchronization is enabled. When enabled, organization members are synchronized as workspace users by this external identity provider.
     */
    syncEnabled?: boolean;
    /**
     * @remarks
     * The synchronization scope defined by department. If omitted during creation, the default value is AllAuthorized, and the first vendor synchronization is determined by syncOnBind. If omitted or set to null during an update, the original value is retained. Updating and saving the scope does not automatically trigger a full synchronization.
     */
    syncScope?: GetIdentityProviderResponseBodyDataSyncScope;
    /**
     * @remarks
     * The time of the last modification in UTC format based on RFC 3339.
     *
     * @example
     * 2026-08-12T03:04:05Z
     */
    updatedAt?: string;
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
export declare class GetIdentityProviderResponseBody extends $dara.Model {
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
     * The binding details of the external identity provider.
     */
    data?: GetIdentityProviderResponseBodyData;
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
