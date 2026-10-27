// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIdentityProviderResponseBodyDataConfiguration extends $dara.Model {
  /**
   * @remarks
   * HTTP-Redirect or HTTP-POST. This parameter is required for manual entry. Queries return the short name.
   * 
   * @example
   * HTTP-Redirect
   */
  bindingType?: string;
  /**
   * @remarks
   * This parameter is required for manual entry. It must be non-empty and cannot exceed 2,048 characters. Existing configurations cannot be replaced. It is different from the Entity ID of the service provider (SP) returned in queries.
   * 
   * @example
   * https://idp.example.com/entity
   */
  entityId?: string;
  /**
   * @remarks
   * This parameter is required for manual entry. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
   * 
   * @example
   * https://idp.example.com/sso
   */
  loginUrl?: string;
  /**
   * @remarks
   * The actual switch value is Enabled or Disabled. It is not equivalent to the expected loginEnabled value saved in the access configuration.
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

export class CreateIdentityProviderResponseBodyDataSaml extends $dara.Model {
  /**
   * @remarks
   * HTTP-Redirect or HTTP-POST. This parameter is required for manual entry. Queries return the short name.
   * 
   * @example
   * HTTP-Redirect
   */
  bindingType?: string;
  /**
   * @remarks
   * This parameter is required for manual entry. It must be non-empty and cannot exceed 2,048 characters. Existing configurations cannot be replaced. It is different from the Entity ID of the service provider (SP) returned in queries.
   * 
   * @example
   * https://idp.example.com/entity
   */
  entityId?: string;
  /**
   * @remarks
   * This parameter is required for manual entry. It must be an absolute HTTPS URL and cannot contain user credentials or fragments.
   * 
   * @example
   * https://idp.example.com/sso
   */
  loginUrl?: string;
  /**
   * @remarks
   * This parameter is required for manual entry and must be a non-empty array. Use PEM X.509 certificate text. The current validity period is verified. A maximum of 10 certificates are supported.
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

export class CreateIdentityProviderResponseBodyDataSyncScope extends $dara.Model {
  /**
   * @remarks
   * When the mode is SelectedDepartments, at least one non-empty department ID must be included, which should be obtained from ListIdentityProviderDepartments. When the mode is AllAuthorized, pass an empty array or omit this parameter.
   * 
   * @example
   * ["10001"]
   */
  departmentIds?: string[];
  /**
   * @remarks
   * Valid values:
   * - AllAuthorized: The full authorization scope, which is limited by the application address book authorization.
   * - SelectedDepartments: The selected departments and all their sub-departments.
   * When you explicitly submit syncScope, you must provide a valid mode, which is verified by the backend.
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

export class CreateIdentityProviderResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The actual SAML configuration is read back on demand only in the GetIdentityProvider operation. SCIM queries and preparations return the actual receiving status and URL.
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
   * Only SAML is currently supported. This parameter may not be returned if no valid configuration is saved. Placeholder initialization with OIDC is not supported.
   * 
   * @example
   * SAML
   */
  protocol?: string;
  /**
   * @remarks
   * The input supports either XML or complete manual entry. Queries return the standardized configuration and do not echo the original XML. This parameter can be omitted if it is not configured.
   */
  saml?: CreateIdentityProviderResponseBodyDataSaml;
  /**
   * @remarks
   * The binding status. Valid values:
   * - CONFIGURED: The configuration is accepted and waiting for the user pool to be activated.
   * - SYNCING: Organization members are being synchronized.
   * - SYNCED: Organization members are synchronized.
   * - READY: The binding is in effect.
   * - SYNC_FAILED: Organization member synchronization failed.
   * - UPDATING: The configuration is being updated.
   * - UPDATE_FAILED: Configuration update failed.
   * - DISCONNECTING: The binding is being removed.
   * - DISCONNECT_FAILED: Binding removal failed.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether to enable organization member synchronization. After this feature is enabled, the external identity provider synchronizes organization members as workspace users.
   */
  syncEnabled?: boolean;
  /**
   * @remarks
   * Retains the department-based synchronization scope definition. If this parameter is omitted during creation, the default value is AllAuthorized, and the first vendor synchronization is determined by syncOnBind. If this parameter is omitted or set to null during an update, the original value is retained. Updating and saving the scope does not automatically perform full synchronization.
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
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      identityProviderType: 'identityProviderType',
      loginEnabled: 'loginEnabled',
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
      configuration: CreateIdentityProviderResponseBodyDataConfiguration,
      identityProviderType: 'string',
      loginEnabled: 'boolean',
      protocol: 'string',
      saml: CreateIdentityProviderResponseBodyDataSaml,
      status: 'string',
      syncEnabled: 'boolean',
      syncScope: CreateIdentityProviderResponseBodyDataSyncScope,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
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

export class CreateIdentityProviderResponseBody extends $dara.Model {
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
   * The response message. An error description is returned when the request fails.
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
      data: CreateIdentityProviderResponseBodyData,
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

