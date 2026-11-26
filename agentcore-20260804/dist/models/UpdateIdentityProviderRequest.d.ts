import * as $dara from '@darabonba/typescript';
export declare class UpdateIdentityProviderRequestBodyMetadata extends $dara.Model {
    /**
     * @remarks
     * The Feishu App ID. It can be omitted during an update to retain the saved value. The merged Feishu configuration of the old and new values must contain this item.
     *
     * @example
     * cli_exampleappid01
     */
    appId?: string;
    /**
     * @remarks
     * The DingTalk AppKey. It can be omitted during an update to retain the saved value. The merged DingTalk configuration of the old and new values must contain this item.
     *
     * @example
     * dingexampleappkey01
     */
    appKey?: string;
    /**
     * @remarks
     * The provider application secret. If omitted during an update, the saved value is retained. You can submit this field separately to update the secret. The explicit value must not be empty. This is sensitive input and is not echoed in the response.
     *
     * @example
     * example-app-secret
     */
    appSecret?: string;
    /**
     * @remarks
     * The DingTalk enterprise CorpId. It can be omitted during an update to retain the saved value. The merged DingTalk configuration of the old and new values must contain this item.
     *
     * @example
     * dingexamplecorpid01
     */
    corpId?: string;
    /**
     * @remarks
     * Required when synchronization is enabled for DingTalk and Feishu. This is sensitive input and is unrelated to the SCIM token.
     *
     * @example
     * example-encrypt-key
     */
    encryptKey?: string;
    /**
     * @remarks
     * Required when synchronization is enabled for DingTalk and Feishu. This is sensitive input and is unrelated to the SCIM token.
     *
     * @example
     * example-verification-token
     */
    verificationToken?: string;
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
export declare class UpdateIdentityProviderRequestBodyOidc extends $dara.Model {
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
     * The client identifier registered in the external IdP, which is different from the Matrix client. This value cannot be changed in place after it is configured.
     *
     * @example
     * example-client
     */
    clientId?: string;
    /**
     * @remarks
     * The private key required for private_key_jwt authentication. If omitted during an update, the original value is retained. The value is not echoed in the response.
     *
     * @example
     * -----BEGIN PRIVATE KEY-----\nEXAMPLE_ONLY_REPLACE_WITH_YOUR_PKCS8_PRIVATE_KEY\n-----END PRIVATE KEY-----
     */
    clientPrivateKey?: string;
    /**
     * @remarks
     * Required for post or basic authentication. If omitted during an update, the original value is retained. Blank or fully masked values with asterisks are not accepted. The value is not echoed in the response.
     *
     * @example
     * example-client-secret-not-for-production
     */
    clientSecret?: string;
    /**
     * @remarks
     * The absolute HTTPS discovery endpoint URL. This parameter is mutually exclusive with manually specified endpoints.
     *
     * @example
     * https://idp.example.com/.well-known/openid-configuration
     */
    discoveryEndpoint?: string;
    /**
     * @remarks
     * The absolute HTTPS issuer URL of the external IdP. This value cannot be changed in place after it is configured.
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
     * Specifies whether PKCE is enabled. Default value: true. This parameter must be set to true when no client authentication is used.
     *
     * @example
     * true
     */
    pkceRequired?: boolean;
    /**
     * @remarks
     * The array of scope strings. It must include openid. Default values: openid, profile, and email.
     *
     * @example
     * ["openid","profile","email"]
     */
    scopes?: string[];
    /**
     * @remarks
     * The name of the claim in the ID token used to match the SCIM externalId. If omitted during the initial configuration, the default value is sub. If omitted during an update, the saved value is retained. For Azure, you can specify oid. The value must be non-empty and cannot contain whitespace characters. When queried, oidc returns the saved value, while oidcConfiguration returns the actual upstream value, which may be empty.
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
export declare class UpdateIdentityProviderRequestBodySaml extends $dara.Model {
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
     * Required for manual entry. It must be non-empty and contain up to 2,048 characters. The existing configuration does not support replacement. It is different from the local entity ID returned by the SP query.
     *
     * @example
     * https://idp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * Required for manual entry. It must be an absolute HTTPS URL and must not contain user credentials or fragments.
     *
     * @example
     * https://idp.example.com/sso
     */
    loginUrl?: string;
    /**
     * @remarks
     * The XML text of a single IdP EntityDescriptor, with a maximum size of 1 MiB. It must not be a URL or file path. It is mutually exclusive with the four manually entered fields. DTD and external entities are prohibited. If both SSO bindings are declared, HTTP-POST takes precedence.
     *
     * @example
     * <EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://idp.example.com/entity"><IDPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol"><KeyDescriptor use="signing"><KeyInfo xmlns="http://www.w3.org/2000/09/xmldsig#"><X509Data><X509Certificate>MIICwDCCAaigAwIBAgIULlsHLfcADyBax5ZtFlj+YGzZVo0wDQYJKoZIhvcNAQELBQAwGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMB4XDTI2MDEwMTAwMDAwMFoXDTM2MDEwMTAwMDAwMFowGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAto0DN0W1CrPRzK9QZ9A1aApb4Lg8oGlp2c0PbN3LokXe/HzwxCMXx65IDnrenttxzTwp9BgUnUN/3LRzWaOL2UQ/vNYNW9LFLkI1T64UPyI7eyi28YlALhb41xkYhEp7rz+MjqifBzVZeTDUxBYtbK2hAhbYEL1+udwsXEx0KB7xuQ/rbI2OKeqAEAD1tfYg7T/SM2wrXNYhx+o1HtchM4/0I8Okkk27JQ4y3ofzC5sTySmFF1Y7XcpSd+5WSyazedhkAieo8AB01DkJV6nnKfH8sH0EBsnH3FP8FhqCLrIeEkjX9B9OcIRLGjiZqx4u/ryW1QhMldnv+pFfNjWy/wIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQC1hSQG8AwtGOoX2gKBK4Hi5XBrBreij8WlLTUWld0FINQ0Rg84f/27CjDthywj6wgxCesCuOVFhpxQa1UacsP/Gcai1aKABtLWImcaWECRYK5gDkwhTMFKM9mXA26hH1l4v/UR2iTpEK9H78egC4W7bs2LDTpPryuaNKTqP2O0tMbNkAHB8yecz5LxHXnxadL9Egow25g2RClvpifWqDnuS9TSbKkIWLcPLjocJj2K9ILpBwhXiXi/BiSgyYTLiYvVvih9vX4s+hKGZNJc0j92YLiOHDF0XH1oxgdVjfTmRiedeb2VZJZElptD92z0AqFR7z2d5B+OqpPA2gjuMLV5</X509Certificate></X509Data></KeyInfo></KeyDescriptor><SingleSignOnService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="https://idp.example.com/sso"/></IDPSSODescriptor></EntityDescriptor>
     */
    metadataXml?: string;
    /**
     * @remarks
     * Required for manual entry. It must be a non-empty array using PEM X.509 certificate text. The current validity period is verified. Up to two certificates are allowed after deduplication.
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
export declare class UpdateIdentityProviderRequestBodySyncScope extends $dara.Model {
    /**
     * @remarks
     * When set to SelectedDepartments, it must contain at least one non-empty department ID, which should be obtained from ListIdentityProviderDepartments. When set to AllAuthorized, pass an empty array or omit this parameter.
     *
     * @example
     * ["10001"]
     */
    departmentIds?: string[];
    /**
     * @remarks
     * AllAuthorized: the full authorization scope, subject to the application address book authorization limits. SelectedDepartments: the selected departments and all their sub-departments. When explicitly submitting syncScope, a valid mode must be provided and verified by the backend.
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
export declare class UpdateIdentityProviderRequestBody extends $dara.Model {
    /**
     * @remarks
     * Do not pass true during CustomSSO initialization. A valid SAML configuration must be saved before enabling. Disabling does not delete the configuration. If an asynchronous failure occurs, this expected value does not indicate that it has taken effect upstream.
     */
    loginEnabled?: boolean;
    /**
     * @remarks
     * The provider configurations for DingTalk and Feishu support partial updates. Omitted fields retain their saved values. Submitted values must not be null, empty strings, or blank strings. The complete configuration is verified after merging. CustomSSO updates use protocol and saml, and do not accept this field. The returned value does not contain provider keys.
     *
     * @example
     * {"appSecret":"example-app-secret"}
     */
    metadata?: UpdateIdentityProviderRequestBodyMetadata;
    /**
     * @remarks
     * Accepted only for CustomSSO and mutually exclusive with SAML. Submit the complete public configuration. Omitting credentials retains the existing values, while new values replace them. Blank and masked values are not accepted as credentials.
     */
    oidc?: UpdateIdentityProviderRequestBodyOidc;
    /**
     * @remarks
     * The login protocol for CustomSSO. Currently, only SAML is supported. You can pass SAML when saving the SAML configuration. You can omit this parameter if you only modify loginEnabled. DingTalk and Feishu do not accept this field.
     *
     * @example
     * SAML
     */
    protocol?: string;
    /**
     * @remarks
     * The SAML configuration for CustomSSO. Choose either metadataXml or the four manually entered fields: entityId, loginUrl, bindingType, and x509Certificates. If not submitted, the existing configuration is retained. DingTalk and Feishu do not accept this field.
     */
    saml?: UpdateIdentityProviderRequestBodySaml;
    /**
     * @remarks
     * Specifies whether to enable incremental synchronization for subsequent address book change events of DingTalk or Feishu. If not passed, the original value is retained. It does not control the initial synchronization or manual synchronization. CustomSSO does not accept this field. You must use UpdateIdentityProviderSCIM.
     */
    syncEnabled?: boolean;
    /**
     * @remarks
     * Follows the definition of the department-based synchronization scope. If omitted during creation, the default value is AllAuthorized. The initial provider synchronization is determined by syncOnBind. If omitted or set to null during an update, the original value is retained. Saving the scope during an update does not automatically trigger a full synchronization.
     */
    syncScope?: UpdateIdentityProviderRequestBodySyncScope;
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
export declare class UpdateIdentityProviderRequest extends $dara.Model {
    /**
     * @remarks
     * Submit business parameters as described in this operation. The body parameters of public APIs are mapped to backend wrappers by the gateway. Do not mix them with backend direct connection body wrappers.
     */
    body?: UpdateIdentityProviderRequestBody;
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
