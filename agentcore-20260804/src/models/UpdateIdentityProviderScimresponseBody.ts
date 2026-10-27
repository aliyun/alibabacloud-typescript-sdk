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
   * The entity ID of the IdP. This parameter is required when you manually enter the configuration. It cannot be empty and cannot exceed 2,048 characters. Existing configurations cannot be replaced. This is different from the entity ID of the SP returned by the SP query.
   * 
   * @example
   * https://idp.example.com/entity
   */
  entityId?: string;
  /**
   * @remarks
   * The logon URL of the IdP. This parameter is required when you manually enter the configuration. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
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
   * The canonical SAML binding identifier. It is the SAML binding URI in the historical metadata snapshot. For CustomSSO updates, use saml.bindingType.
   * 
   * @example
   * urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect
   */
  binding?: string;
  /**
   * @remarks
   * The canonical SAML certificate content. It is the certificate string in the historical metadata snapshot. To edit the configuration, use saml.x509Certificates and do not submit the old metadata.
   * 
   * @example
   * MIICwDCCAaigAwIBAgIULlsHLfcADyBax5ZtFlj+YGzZVo0wDQYJKoZIhvcNAQELBQAwGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMB4XDTI2MDEwMTAwMDAwMFoXDTM2MDEwMTAwMDAwMFowGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAto0DN0W1CrPRzK9QZ9A1aApb4Lg8oGlp2c0PbN3LokXe/HzwxCMXx65IDnrenttxzTwp9BgUnUN/3LRzWaOL2UQ/vNYNW9LFLkI1T64UPyI7eyi28YlALhb41xkYhEp7rz+MjqifBzVZeTDUxBYtbK2hAhbYEL1+udwsXEx0KB7xuQ/rbI2OKeqAEAD1tfYg7T/SM2wrXNYhx+o1HtchM4/0I8Okkk27JQ4y3ofzC5sTySmFF1Y7XcpSd+5WSyazedhkAieo8AB01DkJV6nnKfH8sH0EBsnH3FP8FhqCLrIeEkjX9B9OcIRLGjiZqx4u/ryW1QhMldnv+pFfNjWy/wIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQC1hSQG8AwtGOoX2gKBK4Hi5XBrBreij8WlLTUWld0FINQ0Rg84f/27CjDthywj6wgxCesCuOVFhpxQa1UacsP/Gcai1aKABtLWImcaWECRYK5gDkwhTMFKM9mXA26hH1l4v/UR2iTpEK9H78egC4W7bs2LDTpPryuaNKTqP2O0tMbNkAHB8yecz5LxHXnxadL9Egow25g2RClvpifWqDnuS9TSbKkIWLcPLjocJj2K9ILpBwhXiXi/BiSgyYTLiYvVvih9vX4s+hKGZNJc0j92YLiOHDF0XH1oxgdVjfTmRiedeb2VZJZElptD92z0AqFR7z2d5B+OqpPA2gjuMLV5
   */
  certificates?: string;
  /**
   * @remarks
   * The entity ID of the IdP. This parameter is required when you manually enter the configuration. It cannot be empty and cannot exceed 2,048 characters. Existing configurations cannot be replaced. This is different from the entity ID of the SP returned by the SP query.
   * 
   * @example
   * https://idp.example.com/entity
   */
  entityId?: string;
  /**
   * @remarks
   * The logon URL of the IdP. This parameter is required when you manually enter the configuration. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
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
   * The entity ID of the IdP. This parameter is required when you manually enter the configuration. It cannot be empty and cannot exceed 2,048 characters. Existing configurations cannot be replaced. This is different from the entity ID of the SP returned by the SP query.
   * 
   * @example
   * https://idp.example.com/entity
   */
  entityId?: string;
  /**
   * @remarks
   * The logon URL of the IdP. This parameter is required when you manually enter the configuration. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
   * 
   * @example
   * https://idp.example.com/sso
   */
  loginUrl?: string;
  /**
   * @remarks
   * The list of IdP signing certificates. When you manually enter the configuration, this parameter is required and must be a non-empty array. Use PEM X.509 certificate text. The current validity period is verified. A maximum of two certificates are allowed after deduplication.
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
   * The actual upstream configuration. The actual SAML configuration is read back on demand only in GetIdentityProvider. SCIM query and prepare operations return the actual receiving status and URL.
   */
  configuration?: UpdateIdentityProviderSCIMResponseBodyDataConfiguration;
  /**
   * @remarks
   * The creation time recorded by the server.
   * 
   * @example
   * 2026-10-26T00:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The event subscription callback URL. CustomSSO returns an empty string. You can obtain the SCIM receiving address through the SCIM query or prepare API. The example shows a JSON empty string "". The actual value does not contain double quotes.
   * 
   * @example
   * ""
   */
  eventSubscriptionCallbackUrl?: string;
  /**
   * @remarks
   * The identity provider type. General CRUD operations support DingTalk, Feishu, and CustomSSO. SP queries only support CustomSSO. The SCIM path fixedly uses the CustomSSO shared pool.
   * 
   * @example
   * CustomSSO
   */
  identityProviderType?: string;
  /**
   * @remarks
   * The logon callback URL. CustomSSO returns an empty string. You should obtain the ACS URL for SAML through the SP query API. The example shows a JSON empty string "". The actual value does not contain double quotes.
   * 
   * @example
   * ""
   */
  loginCallbackUrl?: string;
  /**
   * @remarks
   * The logon switch. Do not set this parameter to true during CustomSSO initialization. You must save a valid SAML configuration before enabling it. Disabling it does not delete the configuration. When an asynchronous failure occurs, this expected value does not mean that it has taken effect on the upstream.
   */
  loginEnabled?: boolean;
  /**
   * @remarks
   * The standard IdP metadata. Vendor parameters are used for DingTalk and Feishu. CustomSSO updates use protocol and saml, and do not accept this field. The return value does not contain vendor keys.
   */
  metadata?: UpdateIdentityProviderSCIMResponseBodyDataMetadata;
  /**
   * @remarks
   * PENDING/RUNNING 时轮询 GetIdentityProviderSCIM；保留失败、暂停和取消事实，不表示 SAML 状态。
   * 
   * @example
   * PENDING
   */
  operationStatus?: string;
  /**
   * @remarks
   * The logon protocol. Currently, only SAML is supported. This field may not be returned if no valid configuration is saved. OIDC placeholder initialization is not supported.
   * 
   * @example
   * SAML
   */
  protocol?: string;
  /**
   * @remarks
   * The SAML logon configuration. The input supports either XML or complete manual entry. The query returns the standardized configuration and does not echo the original XML. This field can be omitted if it is not configured.
   */
  saml?: UpdateIdentityProviderSCIMResponseBodyDataSaml;
  /**
   * @remarks
   * 独立 SCIM 状态；不改变原 status 的共享资源及登录配置含义。与查询接口的 data.status 对应。
   * 
   * @example
   * UPDATING
   */
  scimStatus?: string;
  /**
   * @remarks
   * The operation status of shared resources and logon configurations. It indicates the user pool lifecycle and logon configuration task status of CustomSSO, and does not represent the SCIM operation result. Query GetIdentityProviderSCIM.operationStatus for the SCIM switch result. You cannot use this field to determine whether all protocols are configured.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * Do not set this parameter to true during CustomSSO initialization. You can only update it later by calling UpdateIdentityProviderSCIM. Determine the result based on operationStatus.
   */
  syncEnabled?: boolean;
  /**
   * @remarks
   * The last update time recorded by the server.
   * 
   * @example
   * 2026-10-26T00:00:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The ID of the target workspace. This parameter is required. The request region must be the same as the region of the target workspace.
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
   * The business result code. If the request fails, handle the error based on the HTTP status code and the message.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The shared binding after the request is accepted. The status indicates the status of shared resources and logon configurations, not the status of this SCIM task. Query GetIdentityProviderSCIM.operationStatus for the execution result.
   */
  data?: UpdateIdentityProviderSCIMResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. It indicates the processing status of this request and is not equivalent to the final result of the background task.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Task result message. It is the request acceptance or error message. For asynchronous tasks, you must check task result by calling the corresponding query API.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID. It is used to associate this call with troubleshooting. Retain it when a failure occurs.
   * 
   * @example
   * request-example
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. A value of true indicates that the request is processed successfully. For asynchronous writes, you must continue to query the task result.
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

