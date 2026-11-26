// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderResponseBodyDataConfiguration extends $dara.Model {
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
   * The actual switch value, which is Enabled or Disabled. This is not equivalent to the expected loginEnabled value saved in AC.
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

export class UpdateIdentityProviderResponseBodyDataOidc extends $dara.Model {
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

export class UpdateIdentityProviderResponseBodyDataSaml extends $dara.Model {
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
   * Required for manual entry. It must be a non-empty array using PEM X.509 certificate text. The current validity period is verified. Up to two certificates are allowed after deduplication.
   * 
   * @example
   * ["-----BEGIN CERTIFICATE-----\\nMIICwDCCAaigAwIBAgIULlsHLfcADyBax5ZtFlj+YGzZVo0wDQYJKoZIhvcNAQEL\\nBQAwGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMB4XDTI2MDEwMTAwMDAwMFoX\\nDTM2MDEwMTAwMDAwMFowGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMIIBIjAN\\nBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAto0DN0W1CrPRzK9QZ9A1aApb4Lg8\\noGlp2c0PbN3LokXe/HzwxCMXx65IDnrenttxzTwp9BgUnUN/3LRzWaOL2UQ/vNYN\\nW9LFLkI1T64UPyI7eyi28YlALhb41xkYhEp7rz+MjqifBzVZeTDUxBYtbK2hAhbY\\nEL1+udwsXEx0KB7xuQ/rbI2OKeqAEAD1tfYg7T/SM2wrXNYhx+o1HtchM4/0I8Ok\\nkk27JQ4y3ofzC5sTySmFF1Y7XcpSd+5WSyazedhkAieo8AB01DkJV6nnKfH8sH0E\\nBsnH3FP8FhqCLrIeEkjX9B9OcIRLGjiZqx4u/ryW1QhMldnv+pFfNjWy/wIDAQAB\\nMA0GCSqGSIb3DQEBCwUAA4IBAQC1hSQG8AwtGOoX2gKBK4Hi5XBrBreij8WlLTUW\\nld0FINQ0Rg84f/27CjDthywj6wgxCesCuOVFhpxQa1UacsP/Gcai1aKABtLWImca\\nWECRYK5gDkwhTMFKM9mXA26hH1l4v/UR2iTpEK9H78egC4W7bs2LDTpPryuaNKTq\\nP2O0tMbNkAHB8yecz5LxHXnxadL9Egow25g2RClvpifWqDnuS9TSbKkIWLcPLjoc\\nJj2K9ILpBwhXiXi/BiSgyYTLiYvVvih9vX4s+hKGZNJc0j92YLiOHDF0XH1oxgdV\\njfTmRiedeb2VZJZElptD92z0AqFR7z2d5B+OqpPA2gjuMLV5\\n-----END CERTIFICATE-----"]
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

export class UpdateIdentityProviderResponseBodyDataSyncScope extends $dara.Model {
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

export class UpdateIdentityProviderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The actual upstream configuration. The actual SAML configuration is read on demand only in GetIdentityProvider. SCIM queries and preparations return the actual reception status and URL.
   */
  configuration?: UpdateIdentityProviderResponseBodyDataConfiguration;
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
   * Do not pass true during CustomSSO initialization. A valid SAML configuration must be saved before enabling. Disabling does not delete the configuration. If an asynchronous failure occurs, this expected value does not indicate that it has taken effect upstream.
   */
  loginEnabled?: boolean;
  /**
   * @remarks
   * The expected security summary of the configuration. This does not include credentials. The original SAML fields and meanings are retained.
   */
  oidc?: UpdateIdentityProviderResponseBodyDataOidc;
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
  saml?: UpdateIdentityProviderResponseBodyDataSaml;
  /**
   * @remarks
   * The status of the identity source resource and logon configuration. A READY status in the CustomSSO shared pool does not mean that SAML is configured. Query operationStatus independently for SCIM operation results.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether synchronization is enabled. Do not set this parameter to true during CustomSSO initialization. You can only update this parameter later by calling UpdateIdentityProviderSCIM. Evaluate the result in combination with operationStatus.
   */
  syncEnabled?: boolean;
  /**
   * @remarks
   * Follows the definition of the department-based synchronization scope. If omitted during creation, the default value is AllAuthorized. The initial provider synchronization is determined by syncOnBind. If omitted or set to null during an update, the original value is retained. Saving the scope during an update does not automatically trigger a full synchronization.
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
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      identityProviderType: 'identityProviderType',
      loginEnabled: 'loginEnabled',
      oidc: 'oidc',
      protocol: 'protocol',
      saml: 'saml',
      status: 'status',
      syncEnabled: 'syncEnabled',
      syncScope: 'syncScope',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: UpdateIdentityProviderResponseBodyDataConfiguration,
      identityProviderType: 'string',
      loginEnabled: 'boolean',
      oidc: UpdateIdentityProviderResponseBodyDataOidc,
      protocol: 'string',
      saml: UpdateIdentityProviderResponseBodyDataSaml,
      status: 'string',
      syncEnabled: 'boolean',
      syncScope: UpdateIdentityProviderResponseBodyDataSyncScope,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
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

export class UpdateIdentityProviderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business result code. If the request fails, use this code along with the HTTP status code and message for troubleshooting.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The business result. For the result structure, refer to the response fields of this operation. For asynchronous write operations, the response indicates that the request is accepted, but does not guarantee that the background task is completed.
   */
  data?: UpdateIdentityProviderResponseBodyData;
  /**
   * @remarks
   * The processing status of the current request. This does not indicate the final result of the background task.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request acceptance or error message. For asynchronous tasks, verify the task result by calling the corresponding query operation.
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
   * Indicates whether the current request is processed successfully. A value of true indicates success. For asynchronous write operations, you must still query the task result.
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
      data: UpdateIdentityProviderResponseBodyData,
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

