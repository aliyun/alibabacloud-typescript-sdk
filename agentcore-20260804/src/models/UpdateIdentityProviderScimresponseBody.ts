// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderSCIMResponseBodyDataConfiguration extends $dara.Model {
  /**
   * @remarks
   * The SAML binding type. Valid values: HTTP-Redirect and HTTP-POST. This parameter is required when you manually enter the configuration. The query returns the short name.
   * 
   * @example
   * HTTP-Redirect
   */
  bindingType?: string;
  /**
   * @remarks
   * The entity ID of the IdP. This parameter is required when you manually enter the configuration. It must be non-empty and cannot exceed 2,048 characters. You cannot change the entity ID of an existing configuration. This ID is different from the local entity ID returned by the SP query.
   * 
   * @example
   * https://idp.example.com/entity
   */
  entityId?: string;
  /**
   * @remarks
   * The SSO logon URL of the IdP. This parameter is required when you manually enter the configuration. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
   * 
   * @example
   * https://idp.example.com/sso
   */
  loginUrl?: string;
  /**
   * @remarks
   * The actual SSO logon status of AgentIdentity. Valid values: Enabled and Disabled. This value is not equivalent to the expected value of loginEnabled saved in AC.
   * 
   * @example
   * Enabled
   */
  ssoStatus?: string;
  static names(): { [key: string]: string } {
    return {
      bindingType: 'bindingType',
      entityId: 'entityId',
      loginUrl: 'loginUrl',
      ssoStatus: 'ssoStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingType: 'string',
      entityId: 'string',
      loginUrl: 'string',
      ssoStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderSCIMResponseBodyDataMetadata extends $dara.Model {
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
   * The entity ID of the IdP. This parameter is required when you manually enter the configuration. It must be non-empty and cannot exceed 2,048 characters. You cannot change the entity ID of an existing configuration. This ID is different from the local entity ID returned by the SP query.
   * 
   * @example
   * https://idp.example.com/entity
   */
  entityId?: string;
  /**
   * @remarks
   * The SSO logon URL of the IdP. This parameter is required when you manually enter the configuration. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
   * 
   * @example
   * https://idp.example.com/sso
   */
  loginUrl?: string;
  static names(): { [key: string]: string } {
    return {
      binding: 'binding',
      certificates: 'certificates',
      entityId: 'entityId',
      loginUrl: 'loginUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binding: 'string',
      certificates: 'string',
      entityId: 'string',
      loginUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderSCIMResponseBodyDataOidc extends $dara.Model {
  /**
   * @remarks
   * 手填模式必填的绝对 HTTPS URL；Discovery 模式不填写。
   * 
   * @example
   * https://idp.example.com/authorize
   */
  authorizationEndpoint?: string;
  /**
   * @remarks
   * 默认 client_secret_post；none 必须开启 PKCE。
   * 
   * @example
   * client_secret_post
   */
  clientAuthMethod?: string;
  /**
   * @remarks
   * 外部 IdP 中注册的客户端标识，区别于 Matrix 客户端；配置后不支持原地更换。
   * 
   * @example
   * example-client
   */
  clientId?: string;
  /**
   * @remarks
   * 绝对 HTTPS Discovery 地址；与手填端点互斥。
   * 
   * @example
   * https://idp.example.com/.well-known/openid-configuration
   */
  discoveryEndpoint?: string;
  /**
   * @remarks
   * 外部 IdP 的绝对 HTTPS Issuer；配置后不支持原地更换。
   * 
   * @example
   * https://idp.example.com
   */
  issuer?: string;
  /**
   * @remarks
   * 手填模式必填的绝对 HTTPS URL；Discovery 模式不填写。
   * 
   * @example
   * https://idp.example.com/jwks
   */
  jwksUri?: string;
  /**
   * @remarks
   * 默认 true；无客户端认证时必须为 true。
   * 
   * @example
   * true
   */
  pkceRequired?: boolean;
  /**
   * @remarks
   * 字符串数组，必须包含 openid；默认 openid、profile、email。
   * 
   * @example
   * ["openid","profile","email"]
   */
  scopes?: string[];
  /**
   * @remarks
   * ID Token 中用于与 SCIM externalId 匹配的 Claim 名。首次省略默认 sub；更新省略保留已保存值。Azure 可填 oid。非空且不含空白字符。查询 oidc 为保存值，oidcConfiguration 为上游实际值，可能为空。
   * 
   * @example
   * oid
   */
  ssoMappingClaim?: string;
  /**
   * @remarks
   * 手填模式必填的绝对 HTTPS URL；Discovery 模式不填写。
   * 
   * @example
   * https://idp.example.com/token
   */
  tokenEndpoint?: string;
  /**
   * @remarks
   * 手填模式可选的绝对 HTTPS URL；Discovery 模式不填写。
   * 
   * @example
   * https://idp.example.com/userinfo
   */
  userinfoEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'authorizationEndpoint',
      clientAuthMethod: 'clientAuthMethod',
      clientId: 'clientId',
      discoveryEndpoint: 'discoveryEndpoint',
      issuer: 'issuer',
      jwksUri: 'jwksUri',
      pkceRequired: 'pkceRequired',
      scopes: 'scopes',
      ssoMappingClaim: 'ssoMappingClaim',
      tokenEndpoint: 'tokenEndpoint',
      userinfoEndpoint: 'userinfoEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      clientAuthMethod: 'string',
      clientId: 'string',
      discoveryEndpoint: 'string',
      issuer: 'string',
      jwksUri: 'string',
      pkceRequired: 'boolean',
      scopes: { 'type': 'array', 'itemType': 'string' },
      ssoMappingClaim: 'string',
      tokenEndpoint: 'string',
      userinfoEndpoint: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scopes)) {
      $dara.Model.validateArray(this.scopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderSCIMResponseBodyDataSaml extends $dara.Model {
  /**
   * @remarks
   * The SAML binding type. Valid values: HTTP-Redirect and HTTP-POST. This parameter is required when you manually enter the configuration. The query returns the short name.
   * 
   * @example
   * HTTP-Redirect
   */
  bindingType?: string;
  /**
   * @remarks
   * The entity ID of the IdP. This parameter is required when you manually enter the configuration. It must be non-empty and cannot exceed 2,048 characters. You cannot change the entity ID of an existing configuration. This ID is different from the local entity ID returned by the SP query.
   * 
   * @example
   * https://idp.example.com/entity
   */
  entityId?: string;
  /**
   * @remarks
   * The SSO logon URL of the IdP. This parameter is required when you manually enter the configuration. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
   * 
   * @example
   * https://idp.example.com/sso
   */
  loginUrl?: string;
  /**
   * @remarks
   * The list of IdP signing certificates. When you manually enter the configuration, this parameter is required and must be a non-empty array. Use PEM X.509 certificate text. The system verifies the current validity period. A maximum of two certificates are allowed after deduplication.
   * 
   * @example
   * ["-----BEGIN CERTIFICATE-----\\\\nMIICwDCCAaigAwIBAgIULlsHLfcADyBax5ZtFlj+YGzZVo0wDQYJKoZIhvcNAQEL\\\\nBQAwGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMB4XDTI2MDEwMTAwMDAwMFoX\\\\nDTM2MDEwMTAwMDAwMFowGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMIIBIjAN\\\\nBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAto0DN0W1CrPRzK9QZ9A1aApb4Lg8\\\\noGlp2c0PbN3LokXe/HzwxCMXx65IDnrenttxzTwp9BgUnUN/3LRzWaOL2UQ/vNYN\\\\nW9LFLkI1T64UPyI7eyi28YlALhb41xkYhEp7rz+MjqifBzVZeTDUxBYtbK2hAhbY\\\\nEL1+udwsXEx0KB7xuQ/rbI2OKeqAEAD1tfYg7T/SM2wrXNYhx+o1HtchM4/0I8Ok\\\\nkk27JQ4y3ofzC5sTySmFF1Y7XcpSd+5WSyazedhkAieo8AB01DkJV6nnKfH8sH0E\\\\nBsnH3FP8FhqCLrIeEkjX9B9OcIRLGjiZqx4u/ryW1QhMldnv+pFfNjWy/wIDAQAB\\\\nMA0GCSqGSIb3DQEBCwUAA4IBAQC1hSQG8AwtGOoX2gKBK4Hi5XBrBreij8WlLTUW\\\\nld0FINQ0Rg84f/27CjDthywj6wgxCesCuOVFhpxQa1UacsP/Gcai1aKABtLWImca\\\\nWECRYK5gDkwhTMFKM9mXA26hH1l4v/UR2iTpEK9H78egC4W7bs2LDTpPryuaNKTq\\\\nP2O0tMbNkAHB8yecz5LxHXnxadL9Egow25g2RClvpifWqDnuS9TSbKkIWLcPLjoc\\\\nJj2K9ILpBwhXiXi/BiSgyYTLiYvVvih9vX4s+hKGZNJc0j92YLiOHDF0XH1oxgdV\\\\njfTmRiedeb2VZJZElptD92z0AqFR7z2d5B+OqpPA2gjuMLV5\\\\n-----END CERTIFICATE-----"]
   */
  x509Certificates?: string[];
  static names(): { [key: string]: string } {
    return {
      bindingType: 'bindingType',
      entityId: 'entityId',
      loginUrl: 'loginUrl',
      x509Certificates: 'x509Certificates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingType: 'string',
      entityId: 'string',
      loginUrl: 'string',
      x509Certificates: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.x509Certificates)) {
      $dara.Model.validateArray(this.x509Certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderSCIMResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The actual upstream configuration. The actual SAML configuration is read back on demand only by GetIdentityProvider. SCIM queries and preparations return the actual receiving status and URL.
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
   * The event subscription callback URL. CustomSSO returns an empty string. You must obtain the SCIM receiving URL by calling the SCIM query or preparation operation. The example shows a JSON empty string "". The actual value does not contain double quotation marks.
   * 
   * @example
   * ""
   */
  eventSubscriptionCallbackUrl?: string;
  /**
   * @remarks
   * The type of the identity provider. General CRUD operations support DingTalk, Feishu, and CustomSSO. SP queries support only CustomSSO. The SCIM path uses the CustomSSO shared pool.
   * 
   * @example
   * CustomSSO
   */
  identityProviderType?: string;
  /**
   * @remarks
   * The logon callback URL. CustomSSO returns an empty string. You must obtain the ACS URL for SAML by calling the SP query operation. The example shows a JSON empty string "". The actual value does not contain double quotation marks.
   * 
   * @example
   * ""
   */
  loginCallbackUrl?: string;
  /**
   * @remarks
   * Indicates whether logon is enabled. Do not set this parameter to true during CustomSSO initialization. A valid SAML configuration must be saved before enabling logon. Disabling logon does not delete the configuration. If an asynchronous task fails, this expected value does not indicate that the configuration has taken effect upstream.
   */
  loginEnabled?: boolean;
  /**
   * @remarks
   * The standard IdP metadata. Vendor parameters are used for DingTalk and Feishu. CustomSSO updates use the protocol and saml fields and do not accept this field. The return value does not contain vendor keys.
   */
  metadata?: UpdateIdentityProviderSCIMResponseBodyDataMetadata;
  /**
   * @remarks
   * 期望配置的安全摘要；不包含凭据。原 SAML 字段与含义保留。
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
   * The SAML logon configuration. You can enter an XML file or manually enter the complete configuration. The query returns the standardized configuration and does not echo the original XML. This field can be omitted if it is not configured.
   */
  saml?: UpdateIdentityProviderSCIMResponseBodyDataSaml;
  /**
   * @remarks
   * The independent SCIM status. This field does not change the meaning of shared resources and logon configuration in the original status field. It corresponds to the data.status field in the query operation.
   * 
   * @example
   * UPDATING
   */
  scimStatus?: string;
  /**
   * @remarks
   * The lifecycle status of the CustomSSO user pool and the task status of the logon configuration. This field does not indicate the SCIM operation result. You can query the SCIM switch result by using GetIdentityProviderSCIM.operationStatus. You cannot use this field to determine whether all protocols are configured.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * Do not set this parameter to true during CustomSSO initialization. You can only update this parameter later by calling UpdateIdentityProviderSCIM. Determine the result based on the operationStatus field.
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
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createdAt: 'createdAt',
      eventSubscriptionCallbackUrl: 'eventSubscriptionCallbackUrl',
      identityProviderType: 'identityProviderType',
      loginCallbackUrl: 'loginCallbackUrl',
      loginEnabled: 'loginEnabled',
      metadata: 'metadata',
      oidc: 'oidc',
      operationStatus: 'operationStatus',
      protocol: 'protocol',
      saml: 'saml',
      scimStatus: 'scimStatus',
      status: 'status',
      syncEnabled: 'syncEnabled',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: UpdateIdentityProviderSCIMResponseBodyDataConfiguration,
      createdAt: 'string',
      eventSubscriptionCallbackUrl: 'string',
      identityProviderType: 'string',
      loginCallbackUrl: 'string',
      loginEnabled: 'boolean',
      metadata: UpdateIdentityProviderSCIMResponseBodyDataMetadata,
      oidc: UpdateIdentityProviderSCIMResponseBodyDataOidc,
      operationStatus: 'string',
      protocol: 'string',
      saml: UpdateIdentityProviderSCIMResponseBodyDataSaml,
      scimStatus: 'string',
      status: 'string',
      syncEnabled: 'boolean',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(this.oidc && typeof (this.oidc as any).validate === 'function') {
      (this.oidc as any).validate();
    }
    if(this.saml && typeof (this.saml as any).validate === 'function') {
      (this.saml as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderSCIMResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business result code. If the call fails, handle the error based on the HTTP status code and the message.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The original fields and the meaning of the status field are retained. The new scimStatus field corresponds to the data.status field in the query operation. The operationStatus field retains the status of the most recent SCIM task.
   */
  data?: UpdateIdentityProviderSCIMResponseBodyData;
  /**
   * @remarks
   * The processing status of the current request. This status is not equivalent to the final result of the background task.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message indicating that the request is accepted or an error message. For asynchronous tasks, verify the task result by calling the corresponding query operation.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. You can use this ID to associate the current call with troubleshooting. Keep this ID if the call fails.
   * 
   * @example
   * request-example
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current request is successful. A value of true indicates that the request is processed successfully. For asynchronous writes, you must continue to query the task result.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateIdentityProviderSCIMResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

