// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderRequestBodyMetadata extends $dara.Model {
  /**
   * @remarks
   * The Lark App ID. It can be omitted during an update to retain the saved value. The merged Lark configuration of the old and new values must contain this item.
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
   * The provider application secret. If omitted during an update, the saved value is retained. You can submit this field separately to update the secret. The explicit value cannot be empty. It is sensitive input and is not echoed in the response.
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
   * Required when synchronization is enabled for DingTalk and Lark. It is sensitive input and is unrelated to the SCIM token.
   * 
   * @example
   * example-encrypt-key
   */
  encryptKey?: string;
  /**
   * @remarks
   * Required when synchronization is enabled for DingTalk and Lark. It is sensitive input and is unrelated to the SCIM token.
   * 
   * @example
   * example-verification-token
   */
  verificationToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      appKey: 'appKey',
      appSecret: 'appSecret',
      corpId: 'corpId',
      encryptKey: 'encryptKey',
      verificationToken: 'verificationToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appKey: 'string',
      appSecret: 'string',
      corpId: 'string',
      encryptKey: 'string',
      verificationToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderRequestBodyOidc extends $dara.Model {
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
   * private_key_jwt 认证必需的私钥；更新省略保留原值，响应不回显。
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----\\nEXAMPLE_ONLY_REPLACE_WITH_YOUR_PKCS8_PRIVATE_KEY\\n-----END PRIVATE KEY-----
   */
  clientPrivateKey?: string;
  /**
   * @remarks
   * post/basic 认证必需；更新省略保留原值，不接受空白或全星号掩码，响应不回显。
   * 
   * @example
   * example-client-secret-not-for-production
   */
  clientSecret?: string;
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
      clientPrivateKey: 'clientPrivateKey',
      clientSecret: 'clientSecret',
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
      clientPrivateKey: 'string',
      clientSecret: 'string',
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

export class UpdateIdentityProviderRequestBodySaml extends $dara.Model {
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
   * The input is the XML text of a single IdP EntityDescriptor. The maximum size is 1 MiB. It cannot be a URL or file path. It is mutually exclusive with the four manual entry fields. DTD and external entities are prohibited. If both SSO bindings are declared at the same time, HTTP-POST takes precedence.
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
   * ["-----BEGIN CERTIFICATE-----\\\\nMIICwDCCAaigAwIBAgIULlsHLfcADyBax5ZtFlj+YGzZVo0wDQYJKoZIhvcNAQEL\\\\nBQAwGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMB4XDTI2MDEwMTAwMDAwMFoX\\\\nDTM2MDEwMTAwMDAwMFowGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMIIBIjAN\\\\nBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAto0DN0W1CrPRzK9QZ9A1aApb4Lg8\\\\noGlp2c0PbN3LokXe/HzwxCMXx65IDnrenttxzTwp9BgUnUN/3LRzWaOL2UQ/vNYN\\\\nW9LFLkI1T64UPyI7eyi28YlALhb41xkYhEp7rz+MjqifBzVZeTDUxBYtbK2hAhbY\\\\nEL1+udwsXEx0KB7xuQ/rbI2OKeqAEAD1tfYg7T/SM2wrXNYhx+o1HtchM4/0I8Ok\\\\nkk27JQ4y3ofzC5sTySmFF1Y7XcpSd+5WSyazedhkAieo8AB01DkJV6nnKfH8sH0E\\\\nBsnH3FP8FhqCLrIeEkjX9B9OcIRLGjiZqx4u/ryW1QhMldnv+pFfNjWy/wIDAQAB\\\\nMA0GCSqGSIb3DQEBCwUAA4IBAQC1hSQG8AwtGOoX2gKBK4Hi5XBrBreij8WlLTUW\\\\nld0FINQ0Rg84f/27CjDthywj6wgxCesCuOVFhpxQa1UacsP/Gcai1aKABtLWImca\\\\nWECRYK5gDkwhTMFKM9mXA26hH1l4v/UR2iTpEK9H78egC4W7bs2LDTpPryuaNKTq\\\\nP2O0tMbNkAHB8yecz5LxHXnxadL9Egow25g2RClvpifWqDnuS9TSbKkIWLcPLjoc\\\\nJj2K9ILpBwhXiXi/BiSgyYTLiYvVvih9vX4s+hKGZNJc0j92YLiOHDF0XH1oxgdV\\\\njfTmRiedeb2VZJZElptD92z0AqFR7z2d5B+OqpPA2gjuMLV5\\\\n-----END CERTIFICATE-----"]
   */
  x509Certificates?: string[];
  static names(): { [key: string]: string } {
    return {
      bindingType: 'bindingType',
      entityId: 'entityId',
      loginUrl: 'loginUrl',
      metadataXml: 'metadataXml',
      x509Certificates: 'x509Certificates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingType: 'string',
      entityId: 'string',
      loginUrl: 'string',
      metadataXml: 'string',
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

export class UpdateIdentityProviderRequestBodySyncScope extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      departmentIds: 'departmentIds',
      mode: 'mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentIds: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.departmentIds)) {
      $dara.Model.validateArray(this.departmentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderRequestBody extends $dara.Model {
  /**
   * @remarks
   * Do not pass true during CustomSSO initialization. A valid SAML configuration must be saved before enabling. Disabling does not delete the configuration. In case of asynchronous failure, this expected value does not mean that it has taken effect upstream.
   */
  loginEnabled?: boolean;
  /**
   * @remarks
   * The provider configuration for DingTalk and Lark supports partial updates. Omitted fields retain the saved values. Submitted values cannot be null, empty strings, or whitespace strings. The complete configuration is verified after merging. CustomSSO updates use protocol and saml, and do not accept this field. The returned value does not contain provider keys.
   * 
   * @example
   * {"appSecret":"example-app-secret"}
   */
  metadata?: UpdateIdentityProviderRequestBodyMetadata;
  /**
   * @remarks
   * 仅 CustomSSO 接受，和 saml 互斥。提交完整公共配置；省略凭据保留已有值，新值替换，空白和掩码值不能作为凭据。
   */
  oidc?: UpdateIdentityProviderRequestBodyOidc;
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
  saml?: UpdateIdentityProviderRequestBodySaml;
  /**
   * @remarks
   * Specifies whether to enable incremental synchronization for subsequent directory change events of DingTalk or Lark. If not passed, the original value is retained. It does not control the initial synchronization or manual synchronization. CustomSSO does not accept this field. You must use UpdateIdentityProviderSCIM.
   */
  syncEnabled?: boolean;
  /**
   * @remarks
   * Follows the definition of the department-based synchronization scope. If omitted during creation, the default is AllAuthorized. The initial provider synchronization is determined by syncOnBind. If omitted or set to null during an update, the original value is retained. Updating and saving the scope does not automatically execute a full synchronization.
   */
  syncScope?: UpdateIdentityProviderRequestBodySyncScope;
  static names(): { [key: string]: string } {
    return {
      loginEnabled: 'loginEnabled',
      metadata: 'metadata',
      oidc: 'oidc',
      protocol: 'protocol',
      saml: 'saml',
      syncEnabled: 'syncEnabled',
      syncScope: 'syncScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginEnabled: 'boolean',
      metadata: UpdateIdentityProviderRequestBodyMetadata,
      oidc: UpdateIdentityProviderRequestBodyOidc,
      protocol: 'string',
      saml: UpdateIdentityProviderRequestBodySaml,
      syncEnabled: 'boolean',
      syncScope: UpdateIdentityProviderRequestBodySyncScope,
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(this.oidc && typeof (this.oidc as any).validate === 'function') {
      (this.oidc as any).validate();
    }
    if(this.saml && typeof (this.saml as any).validate === 'function') {
      (this.saml as any).validate();
    }
    if(this.syncScope && typeof (this.syncScope as any).validate === 'function') {
      (this.syncScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdentityProviderRequest extends $dara.Model {
  /**
   * @remarks
   * Submit business parameters as described in this operation. The body parameters of public APIs are mapped to backend wrappers by the gateway. Do not mix them with backend direct connection body wrappers.
   */
  body?: UpdateIdentityProviderRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateIdentityProviderRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

