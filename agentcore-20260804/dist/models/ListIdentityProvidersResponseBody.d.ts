import * as $dara from '@darabonba/typescript';
export declare class ListIdentityProvidersResponseBodyItemsConfiguration extends $dara.Model {
    /**
     * @remarks
     * The SAML binding type. Valid values: HTTP-Redirect and HTTP-POST. This parameter is required when manually specified. The query returns the short name.
     *
     * @example
     * HTTP-Redirect
     */
    bindingType?: string;
    /**
     * @remarks
     * Required when manually filled in. It must be non-empty and no more than 2048 characters. Existing configurations do not support replacement. It is different from our Entity ID queried by the SP.
     *
     * @example
     * https://idp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * Required when manually filled in. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
     *
     * @example
     * https://idp.example.com/sso
     */
    loginUrl?: string;
    /**
     * @remarks
     * The actual SSO logon status of AgentIdentity. The actual switch value is Enabled or Disabled, which is not equivalent to the expected loginEnabled value saved in AC.
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
export declare class ListIdentityProvidersResponseBodyItemsMetadata extends $dara.Model {
    /**
     * @remarks
     * The App ID of the Lark application. Required when the binding type is Feishu.
     *
     * @example
     * cli_exampleappid01
     */
    appId?: string;
    /**
     * @remarks
     * The AppKey of the DingTalk application. Required when the binding type is DingTalk.
     *
     * @example
     * dingexampleappkey01
     */
    appKey?: string;
    /**
     * @remarks
     * The SAML Binding URI in the historical metadata snapshot. Use saml.bindingType for CustomSSO updates.
     *
     * @example
     * urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect
     */
    binding?: string;
    /**
     * @remarks
     * The certificate string in the historical metadata snapshot. Use saml.x509Certificates to edit the configuration and do not submit the old metadata.
     *
     * @example
     * MIICwDCCAaigAwIBAgIULlsHLfcADyBax5ZtFlj+YGzZVo0wDQYJKoZIhvcNAQELBQAwGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMB4XDTI2MDEwMTAwMDAwMFoXDTM2MDEwMTAwMDAwMFowGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAto0DN0W1CrPRzK9QZ9A1aApb4Lg8oGlp2c0PbN3LokXe/HzwxCMXx65IDnrenttxzTwp9BgUnUN/3LRzWaOL2UQ/vNYNW9LFLkI1T64UPyI7eyi28YlALhb41xkYhEp7rz+MjqifBzVZeTDUxBYtbK2hAhbYEL1+udwsXEx0KB7xuQ/rbI2OKeqAEAD1tfYg7T/SM2wrXNYhx+o1HtchM4/0I8Okkk27JQ4y3ofzC5sTySmFF1Y7XcpSd+5WSyazedhkAieo8AB01DkJV6nnKfH8sH0EBsnH3FP8FhqCLrIeEkjX9B9OcIRLGjiZqx4u/ryW1QhMldnv+pFfNjWy/wIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQC1hSQG8AwtGOoX2gKBK4Hi5XBrBreij8WlLTUWld0FINQ0Rg84f/27CjDthywj6wgxCesCuOVFhpxQa1UacsP/Gcai1aKABtLWImcaWECRYK5gDkwhTMFKM9mXA26hH1l4v/UR2iTpEK9H78egC4W7bs2LDTpPryuaNKTqP2O0tMbNkAHB8yecz5LxHXnxadL9Egow25g2RClvpifWqDnuS9TSbKkIWLcPLjocJj2K9ILpBwhXiXi/BiSgyYTLiYvVvih9vX4s+hKGZNJc0j92YLiOHDF0XH1oxgdVjfTmRiedeb2VZJZElptD92z0AqFR7z2d5B+OqpPA2gjuMLV5
     */
    certificates?: string;
    /**
     * @remarks
     * The CorpId of the DingTalk enterprise. Required when the binding type is DingTalk.
     *
     * @example
     * dingexamplecorpid01
     */
    corpId?: string;
    /**
     * @remarks
     * Required when manually filled in. It must be non-empty and no more than 2048 characters. Existing configurations do not support replacement. It is different from our Entity ID queried by the SP.
     *
     * @example
     * https://idp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * Required when manually filled in. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
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
export declare class ListIdentityProvidersResponseBodyItemsSaml extends $dara.Model {
    /**
     * @remarks
     * The SAML binding type. Valid values: HTTP-Redirect and HTTP-POST. This parameter is required when manually specified. The query returns the short name.
     *
     * @example
     * HTTP-Redirect
     */
    bindingType?: string;
    /**
     * @remarks
     * Required when manually filled in. It must be non-empty and no more than 2048 characters. Existing configurations do not support replacement. It is different from our Entity ID queried by the SP.
     *
     * @example
     * https://idp.example.com/entity
     */
    entityId?: string;
    /**
     * @remarks
     * Required when manually filled in. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
     *
     * @example
     * https://idp.example.com/sso
     */
    loginUrl?: string;
    /**
     * @remarks
     * The list of IdP signing certificates. A non-empty array is required when manually specified. Use PEM X.509 certificate text. The current validity period is verified. A maximum of two certificates are allowed after deduplication.
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
export declare class ListIdentityProvidersResponseBodyItemsSyncScope extends $dara.Model {
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
     * The scope mode. Valid values: AllAuthorized: the full authorization scope, limited by the application address book authorization. SelectedDepartments: the selected departments and all their sub-departments. A valid mode must be provided when explicitly submitting syncScope and is verified by the backend.
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
export declare class ListIdentityProvidersResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The actual upstream configuration. The actual SAML configuration is read back on demand only in GetIdentityProvider. SCIM queries and preparations return the actual received status and URL.
     */
    configuration?: ListIdentityProvidersResponseBodyItemsConfiguration;
    /**
     * @remarks
     * The creation time in UTC format compliant with RFC 3339.
     *
     * @example
     * 2026-08-12T03:04:05Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The event subscription callback URL. You must configure this URL in the application of the external identity provider to receive organization change events. An empty string is returned if the user pool is not activated.
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
     * The login callback URL. You must configure this URL in the application of the external identity provider. An empty string is returned if the user pool is not activated.
     *
     * @example
     * https://signin-cn-hangzhou.aliyunagentid.com/up-123456/dingtalk/callback
     */
    loginCallbackUrl?: string;
    /**
     * @remarks
     * Specifies whether workspace users are allowed to log on through this external identity provider.
     */
    loginEnabled?: boolean;
    /**
     * @remarks
     * The application configuration of the external identity provider. Application secret configurations are not returned.
     */
    metadata?: ListIdentityProvidersResponseBodyItemsMetadata;
    /**
     * @remarks
     * Currently, only SAML is supported. This parameter may not be returned if no valid configuration is saved. Placeholder initialization with OIDC is not supported.
     *
     * @example
     * SAML
     */
    protocol?: string;
    /**
     * @remarks
     * The input supports either XML or complete manual entry. Queries return standardized configurations and do not echo the original XML. This parameter can be omitted if not configured.
     */
    saml?: ListIdentityProvidersResponseBodyItemsSaml;
    /**
     * @remarks
     * The binding status. Valid values: CONFIGURED (the configuration is accepted and waiting for the user pool to be activated), SYNCING (synchronizing organization members), SYNCED (organization member synchronization is completed), READY (the binding is in effect), SYNC_FAILED (organization member synchronization failed), UPDATING (updating the configuration), UPDATE_FAILED (configuration update failed), DISCONNECTING (disconnecting), and DISCONNECT_FAILED (disconnection failed).
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * Specifies whether organization member synchronization is enabled. If enabled, organization members are synchronized as workspace users by this external identity provider.
     */
    syncEnabled?: boolean;
    /**
     * @remarks
     * Follows the department-based synchronization scope definition. If omitted during creation, the default value is AllAuthorized, and the first vendor synchronization is determined by syncOnBind. If omitted or set to null during an update, the original value is retained. Updating and saving the scope does not automatically trigger a full synchronization.
     */
    syncScope?: ListIdentityProvidersResponseBodyItemsSyncScope;
    /**
     * @remarks
     * The time of the last modification in UTC format compliant with RFC 3339.
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
export declare class ListIdentityProvidersResponseBody extends $dara.Model {
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
     * The HTTP status code.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The list of external identity providers.
     */
    items?: ListIdentityProvidersResponseBodyItems[];
    /**
     * @remarks
     * The maximum number of records per page for this query.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The response message. Returns an error description if the request fails.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The cursor for the next page. This parameter is empty if no next page exists.
     *
     * @example
     * aWRlbnRpdHktcHJvdmlkZXItb2Zmc2V0OjEw
     */
    nextToken?: string;
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
    /**
     * @remarks
     * The total number of external identity providers that meet the query conditions.
     *
     * @example
     * 42
     */
    totalCount?: number;
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
