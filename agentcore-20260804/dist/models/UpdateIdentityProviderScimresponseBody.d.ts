import * as $dara from '@darabonba/typescript';
export declare class UpdateIdentityProviderSCIMResponseBodyDataConfiguration extends $dara.Model {
    /**
     * @remarks
     * The SAML binding type. Valid values: HTTP-Redirect and HTTP-POST. This field is required when you manually enter the configuration. The query returns the short name.
     *
     * @example
     * HTTP-Redirect
     */
    bindingType?: string;
    /**
     * @remarks
     * The IdP entity ID. This field is required when you manually enter the metadata. It must be a non-empty string of up to 2,048 characters. You cannot change the entity ID after it is configured. This ID is different from the local entity ID returned by the SP query.
     *
     * @example
     * https://idp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * The IdP SSO logon URL. This field is required when you manually enter the metadata. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
     *
     * @example
     * https://idp.example.com/sso
     */
    loginUrl?: string;
    /**
     * @remarks
     * The actual SSO logon status of AgentIdentity. The actual switch value is Enabled or Disabled, which is not equivalent to the expected value of loginEnabled saved in the access configuration.
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
     * The SAML binding URI in the historical metadata snapshot. To update CustomSSO, use the saml.bindingType field.
     *
     * @example
     * urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect
     */
    binding?: string;
    /**
     * @remarks
     * The certificate string in the historical metadata snapshot. To edit the configuration, use the saml.x509Certificates field instead of submitting the old metadata.
     *
     * @example
     * MIICwDCCAaigAwIBAgIULlsHLfcADyBax5ZtFlj+YGzZVo0wDQYJKoZIhvcNAQELBQAwGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMB4XDTI2MDEwMTAwMDAwMFoXDTM2MDEwMTAwMDAwMFowGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAto0DN0W1CrPRzK9QZ9A1aApb4Lg8oGlp2c0PbN3LokXe/HzwxCMXx65IDnrenttxzTwp9BgUnUN/3LRzWaOL2UQ/vNYNW9LFLkI1T64UPyI7eyi28YlALhb41xkYhEp7rz+MjqifBzVZeTDUxBYtbK2hAhbYEL1+udwsXEx0KB7xuQ/rbI2OKeqAEAD1tfYg7T/SM2wrXNYhx+o1HtchM4/0I8Okkk27JQ4y3ofzC5sTySmFF1Y7XcpSd+5WSyazedhkAieo8AB01DkJV6nnKfH8sH0EBsnH3FP8FhqCLrIeEkjX9B9OcIRLGjiZqx4u/ryW1QhMldnv+pFfNjWy/wIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQC1hSQG8AwtGOoX2gKBK4Hi5XBrBreij8WlLTUWld0FINQ0Rg84f/27CjDthywj6wgxCesCuOVFhpxQa1UacsP/Gcai1aKABtLWImcaWECRYK5gDkwhTMFKM9mXA26hH1l4v/UR2iTpEK9H78egC4W7bs2LDTpPryuaNKTqP2O0tMbNkAHB8yecz5LxHXnxadL9Egow25g2RClvpifWqDnuS9TSbKkIWLcPLjocJj2K9ILpBwhXiXi/BiSgyYTLiYvVvih9vX4s+hKGZNJc0j92YLiOHDF0XH1oxgdVjfTmRiedeb2VZJZElptD92z0AqFR7z2d5B+OqpPA2gjuMLV5
     */
    certificates?: string;
    /**
     * @remarks
     * The IdP entity ID. This field is required when you manually enter the metadata. It must be a non-empty string of up to 2,048 characters. You cannot change the entity ID after it is configured. This ID is different from the local entity ID returned by the SP query.
     *
     * @example
     * https://idp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * The IdP SSO logon URL. This field is required when you manually enter the metadata. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
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
export declare class UpdateIdentityProviderSCIMResponseBodyDataOidc extends $dara.Model {
    /**
     * @remarks
     * The authorization endpoint. This field is required in manual mode and must be an absolute HTTPS URL. Do not specify this field in discovery mode.
     *
     * @example
     * https://idp.example.com/authorize
     */
    authorizationEndpoint?: string;
    /**
     * @remarks
     * The client authentication method. Default value: client_secret_post. If the value is none, Proof Key for Code Exchange (PKCE) must be enabled.
     *
     * @example
     * client_secret_post
     */
    clientAuthMethod?: string;
    /**
     * @remarks
     * The client ID registered in the external IdP. This ID is different from the Matrix client ID. You cannot change the client ID in place after it is configured.
     *
     * @example
     * example-client
     */
    clientId?: string;
    /**
     * @remarks
     * The absolute HTTPS OIDC discovery endpoint. This field is mutually exclusive with manually entered endpoints.
     *
     * @example
     * https://idp.example.com/.well-known/openid-configuration
     */
    discoveryEndpoint?: string;
    /**
     * @remarks
     * The absolute HTTPS issuer of the external IdP. You cannot change the issuer in place after it is configured.
     *
     * @example
     * https://idp.example.com
     */
    issuer?: string;
    /**
     * @remarks
     * The authorization endpoint. This field is required in manual mode and must be an absolute HTTPS URL. Do not specify this field in discovery mode.
     *
     * @example
     * https://idp.example.com/jwks
     */
    jwksUri?: string;
    /**
     * @remarks
     * Specifies whether PKCE is enabled. Default value: true. This parameter must be set to true when no client authentication is used.
     *
     * @example
     * true
     */
    pkceRequired?: boolean;
    /**
     * @remarks
     * The array of strings that must contain openid. Default values: openid, profile, and email.
     *
     * @example
     * ["openid","profile","email"]
     */
    scopes?: string[];
    /**
     * @remarks
     * The name of the claim in the ID token that is used to match the SCIM externalId. If omitted during creation, the default value sub is used. If omitted during an update, the saved value is retained. For Azure, you can specify oid. The value must be non-empty and cannot contain whitespace characters. When querying oidc, the saved value is returned. When querying oidcConfiguration, the actual upstream value is returned, which may be empty.
     *
     * @example
     * oid
     */
    ssoMappingClaim?: string;
    /**
     * @remarks
     * The authorization endpoint. This field is required in manual mode and must be an absolute HTTPS URL. Do not specify this field in discovery mode.
     *
     * @example
     * https://idp.example.com/token
     */
    tokenEndpoint?: string;
    /**
     * @remarks
     * The optional absolute HTTPS URL for manual mode. Leave this field empty in discovery mode.
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
export declare class UpdateIdentityProviderSCIMResponseBodyDataSaml extends $dara.Model {
    /**
     * @remarks
     * The SAML binding type. Valid values: HTTP-Redirect and HTTP-POST. This field is required when you manually enter the configuration. The query returns the short name.
     *
     * @example
     * HTTP-Redirect
     */
    bindingType?: string;
    /**
     * @remarks
     * The IdP entity ID. This field is required when you manually enter the metadata. It must be a non-empty string of up to 2,048 characters. You cannot change the entity ID after it is configured. This ID is different from the local entity ID returned by the SP query.
     *
     * @example
     * https://idp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * The IdP SSO logon URL. This field is required when you manually enter the metadata. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
     *
     * @example
     * https://idp.example.com/sso
     */
    loginUrl?: string;
    /**
     * @remarks
     * The list of IdP signing certificates. When you manually enter the configuration, this field is required and must be a non-empty array of PEM X.509 certificate texts. The system verifies the current validity period. A maximum of two certificates are retained after deduplication.
     *
     * @example
     * ["-----BEGIN CERTIFICATE-----\\nMIICwDCCAaigAwIBAgIULlsHLfcADyBax5ZtFlj+YGzZVo0wDQYJKoZIhvcNAQEL\\nBQAwGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMB4XDTI2MDEwMTAwMDAwMFoX\\nDTM2MDEwMTAwMDAwMFowGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMIIBIjAN\\nBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAto0DN0W1CrPRzK9QZ9A1aApb4Lg8\\noGlp2c0PbN3LokXe/HzwxCMXx65IDnrenttxzTwp9BgUnUN/3LRzWaOL2UQ/vNYN\\nW9LFLkI1T64UPyI7eyi28YlALhb41xkYhEp7rz+MjqifBzVZeTDUxBYtbK2hAhbY\\nEL1+udwsXEx0KB7xuQ/rbI2OKeqAEAD1tfYg7T/SM2wrXNYhx+o1HtchM4/0I8Ok\\nkk27JQ4y3ofzC5sTySmFF1Y7XcpSd+5WSyazedhkAieo8AB01DkJV6nnKfH8sH0E\\nBsnH3FP8FhqCLrIeEkjX9B9OcIRLGjiZqx4u/ryW1QhMldnv+pFfNjWy/wIDAQAB\\nMA0GCSqGSIb3DQEBCwUAA4IBAQC1hSQG8AwtGOoX2gKBK4Hi5XBrBreij8WlLTUW\\nld0FINQ0Rg84f/27CjDthywj6wgxCesCuOVFhpxQa1UacsP/Gcai1aKABtLWImca\\nWECRYK5gDkwhTMFKM9mXA26hH1l4v/UR2iTpEK9H78egC4W7bs2LDTpPryuaNKTq\\nP2O0tMbNkAHB8yecz5LxHXnxadL9Egow25g2RClvpifWqDnuS9TSbKkIWLcPLjoc\\nJj2K9ILpBwhXiXi/BiSgyYTLiYvVvih9vX4s+hKGZNJc0j92YLiOHDF0XH1oxgdV\\njfTmRiedeb2VZJZElptD92z0AqFR7z2d5B+OqpPA2gjuMLV5\\n-----END CERTIFICATE-----"]
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
     * The actual upstream configuration. The actual SAML configuration is read back on demand only by the GetIdentityProvider API operation. The SCIM query and preparation operations return the actual receiving status and URL.
     */
    configuration?: UpdateIdentityProviderSCIMResponseBodyDataConfiguration;
    /**
     * @remarks
     * The time when the record was created on the server.
     *
     * @example
     * 2026-10-26T00:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The SAML vendor event callback URL. For CustomSSO, an empty string is returned. To obtain the SCIM receiving URL, call the SCIM query or preparation API operation. The example shows a JSON empty string "", but the actual value does not include double quotation marks.
     *
     * @example
     * ""
     */
    eventSubscriptionCallbackUrl?: string;
    /**
     * @remarks
     * The identity provider type. General CRUD operations support DingTalk, Feishu, and CustomSSO. SP queries support only CustomSSO. The SCIM path uses the CustomSSO shared pool.
     *
     * @example
     * CustomSSO
     */
    identityProviderType?: string;
    /**
     * @remarks
     * The SAML vendor callback URL. For CustomSSO, an empty string is returned. To obtain the Assertion Consumer Service (ACS) URL for SAML, call the SP query API operation. The example shows a JSON empty string "", but the actual value does not include double quotation marks.
     *
     * @example
     * ""
     */
    loginCallbackUrl?: string;
    /**
     * @remarks
     * Specifies whether logon is enabled. Do not set this parameter to true during CustomSSO initialization. You must save a valid SAML configuration before enabling logon. Disabling logon does not delete the configuration. If an asynchronous task fails, this expected value does not indicate that the change has taken effect on the upstream server.
     */
    loginEnabled?: boolean;
    /**
     * @remarks
     * The standard identity provider (IdP) metadata. Vendor parameters are used for DingTalk and Feishu. To update CustomSSO, use the protocol and saml fields. This field is not accepted for CustomSSO updates. The return value does not include vendor keys.
     */
    metadata?: UpdateIdentityProviderSCIMResponseBodyDataMetadata;
    /**
     * @remarks
     * The security summary of the expected OIDC configuration. This summary does not include credentials. The original SAML fields and their meanings are retained.
     */
    oidc?: UpdateIdentityProviderSCIMResponseBodyDataOidc;
    /**
     * @remarks
     * The original status of the most recent independent SCIM operation task. If no historical tasks exist, an empty string ("") is returned.
     *
     * @example
     * PENDING
     */
    operationStatus?: string;
    /**
     * @remarks
     * The logon protocol. Only SAML is supported. This field may not be returned if no valid configuration is saved. You cannot use OIDC as a placeholder for initialization.
     *
     * @example
     * SAML
     */
    protocol?: string;
    /**
     * @remarks
     * The SAML logon configuration. You can provide the input by using XML or by manually entering all fields. The query returns the standardized configuration and does not echo the original XML. This field can be omitted if it is not configured.
     */
    saml?: UpdateIdentityProviderSCIMResponseBodyDataSaml;
    /**
     * @remarks
     * The independent SCIM status. This field does not change the meaning of the original status field for shared resources and logon configurations. It corresponds to the data.status field in the query API operation.
     *
     * @example
     * UPDATING
     */
    scimStatus?: string;
    /**
     * @remarks
     * The operation status of the CustomSSO user pool lifecycle and logon configuration tasks. This status does not indicate the result of SCIM operations. To query the result of the SCIM switch, use the GetIdentityProviderSCIM.operationStatus field. You cannot use this field to determine whether all protocols are configured.
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * Specifies whether to enable SCIM synchronization. Do not set this parameter to true during CustomSSO initialization. You can only update this parameter later by calling UpdateIdentityProviderSCIM. Determine the result based on the operationStatus field.
     */
    syncEnabled?: boolean;
    /**
     * @remarks
     * The time when the record was last updated on the server.
     *
     * @example
     * 2026-10-26T00:00:00Z
     */
    updatedAt?: string;
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
export declare class UpdateIdentityProviderSCIMResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business result code. If the request fails, use this code in combination with the HTTP status code and the result message for troubleshooting.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The data object. Retains the original fields and the meaning of the status field. The new scimStatus field corresponds to the data.status field in the query API operation, and the operationStatus field retains the status of the most recent SCIM task.
     */
    data?: UpdateIdentityProviderSCIMResponseBodyData;
    /**
     * @remarks
     * The HTTP status code. Indicates the processing status of the current request, which does not necessarily reflect the final result of the background task.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The result message. Indicates whether the request is accepted or returns an error message. For an asynchronous task, check the task result by calling the corresponding query API operation.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID. Retain this ID to correlate the current call and troubleshoot failures.
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
