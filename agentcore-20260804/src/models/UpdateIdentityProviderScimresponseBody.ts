// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderSCIMResponseBodyDataConfiguration extends $dara.Model {
  /**
   * @remarks
   * The SAML binding type. Valid values: HTTP-Redirect and HTTP-POST. This parameter is required when you manually enter the configuration. The query operation returns the short name.
   * 
   * @example
   * HTTP-Redirect
   */
  bindingType?: string;
  /**
   * @remarks
   * The entity ID of the IdP. This parameter is required when you manually enter the configuration. It must be non-empty and cannot exceed 2,048 characters. You cannot change the entity ID if it is already configured. This ID is different from the entity ID of the service provider (SP) returned by the query operation.
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
   * The SAML binding URI in the historical metadata snapshot. To update CustomSSO, use the saml.bindingType field.
   * 
   * @example
   * urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect
   */
  binding?: string;
  /**
   * @remarks
   * The certificate string in the historical metadata snapshot. To edit the configuration, use the saml.x509Certificates field and do not submit the old metadata.
   * 
   * @example
   * MIICwDCCAaigAwIBAgIULlsHLfcADyBax5ZtFlj+YGzZVo0wDQYJKoZIhvcNAQELBQAwGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMB4XDTI2MDEwMTAwMDAwMFoXDTM2MDEwMTAwMDAwMFowGjEYMBYGA1UEAwwPaWRwLmV4YW1wbGUuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAto0DN0W1CrPRzK9QZ9A1aApb4Lg8oGlp2c0PbN3LokXe/HzwxCMXx65IDnrenttxzTwp9BgUnUN/3LRzWaOL2UQ/vNYNW9LFLkI1T64UPyI7eyi28YlALhb41xkYhEp7rz+MjqifBzVZeTDUxBYtbK2hAhbYEL1+udwsXEx0KB7xuQ/rbI2OKeqAEAD1tfYg7T/SM2wrXNYhx+o1HtchM4/0I8Okkk27JQ4y3ofzC5sTySmFF1Y7XcpSd+5WSyazedhkAieo8AB01DkJV6nnKfH8sH0EBsnH3FP8FhqCLrIeEkjX9B9OcIRLGjiZqx4u/ryW1QhMldnv+pFfNjWy/wIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQC1hSQG8AwtGOoX2gKBK4Hi5XBrBreij8WlLTUWld0FINQ0Rg84f/27CjDthywj6wgxCesCuOVFhpxQa1UacsP/Gcai1aKABtLWImcaWECRYK5gDkwhTMFKM9mXA26hH1l4v/UR2iTpEK9H78egC4W7bs2LDTpPryuaNKTqP2O0tMbNkAHB8yecz5LxHXnxadL9Egow25g2RClvpifWqDnuS9TSbKkIWLcPLjocJj2K9ILpBwhXiXi/BiSgyYTLiYvVvih9vX4s+hKGZNJc0j92YLiOHDF0XH1oxgdVjfTmRiedeb2VZJZElptD92z0AqFR7z2d5B+OqpPA2gjuMLV5
   */
  certificates?: string;
  /**
   * @remarks
   * The entity ID of the IdP. This parameter is required when you manually enter the configuration. It must be non-empty and cannot exceed 2,048 characters. You cannot change the entity ID if it is already configured. This ID is different from the entity ID of the service provider (SP) returned by the query operation.
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
   * The SAML binding type. Valid values: HTTP-Redirect and HTTP-POST. This parameter is required when you manually enter the configuration. The query operation returns the short name.
   * 
   * @example
   * HTTP-Redirect
   */
  bindingType?: string;
  /**
   * @remarks
   * The entity ID of the IdP. This parameter is required when you manually enter the configuration. It must be non-empty and cannot exceed 2,048 characters. You cannot change the entity ID if it is already configured. This ID is different from the entity ID of the service provider (SP) returned by the query operation.
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
   * The list of IdP signing certificates. This parameter is required when you manually enter the configuration. It must be a non-empty array and use PEM X.509 certificate text. The system verifies the current validity period. A maximum of two certificates are allowed after deduplication.
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
   * The actual upstream configuration. The actual SAML configuration is read back on demand only by calling GetIdentityProvider. The SCIM query and preparation operations return the actual receiving status and URL.
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
   * The event callback URL for SAML. CustomSSO returns an empty string. You can obtain the SCIM receiving address by calling the SCIM query or preparation API. The example shows an empty JSON string "". The actual value does not contain double quotes.
   * 
   * @example
   * ""
   */
  eventSubscriptionCallbackUrl?: string;
  /**
   * @remarks
   * The type of the identity provider. Common CRUD operations support DingTalk, Feishu, and CustomSSO. The SP query operation supports only CustomSSO. The SCIM path uses the CustomSSO shared pool.
   * 
   * @example
   * CustomSSO
   */
  identityProviderType?: string;
  /**
   * @remarks
   * The callback URL for SAML. CustomSSO returns an empty string. You can obtain the Assertion Consumer Service (ACS) URL of SAML by calling the SP query API. The example shows an empty JSON string "". The actual value does not contain double quotes.
   * 
   * @example
   * ""
   */
  loginCallbackUrl?: string;
  /**
   * @remarks
   * Specifies whether logon is enabled. Do not set this parameter to true during CustomSSO initialization. You must save a valid SAML configuration before enabling logon. Disabling logon does not delete the configuration. If an asynchronous failure occurs, this expected value does not indicate that the upstream configuration has taken effect.
   */
  loginEnabled?: boolean;
  /**
   * @remarks
   * The standard IdP metadata. Vendor parameters are used for DingTalk and Feishu. CustomSSO updates use the protocol and saml fields and do not accept this field. The returned value does not contain vendor keys.
   */
  metadata?: UpdateIdentityProviderSCIMResponseBodyDataMetadata;
  /**
   * @remarks
   * The status of the most recent SCIM operation. When the status is PENDING or RUNNING, poll the GetIdentityProviderSCIM API. This field retains the facts of failure, pause, and cancellation, and does not indicate the SAML status.
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
   * The SAML logon configuration. You can enter an XML file or manually enter the complete configuration. The query operation returns the standardized configuration and does not echo the original XML. This field can be omitted if it is not configured.
   */
  saml?: UpdateIdentityProviderSCIMResponseBodyDataSaml;
  /**
   * @remarks
   * The independent SCIM configuration status. This field does not change the meaning of shared resources and logon configurations in the original status field. It corresponds to the data.status field in the query API.
   * 
   * @example
   * UPDATING
   */
  scimStatus?: string;
  /**
   * @remarks
   * The operation status of shared resources and logon configurations. It indicates the user pool lifecycle and logon configuration task status of CustomSSO, and does not indicate the SCIM operation result. You can query the SCIM switch result by using the operationStatus field returned by GetIdentityProviderSCIM. You cannot use this field to determine whether all protocols are configured.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether to enable synchronization. Do not set this parameter to true during CustomSSO initialization. You can only update this parameter by calling UpdateIdentityProviderSCIM later. Determine the result based on the operationStatus field.
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
   * The original binding details and new SCIM status. The original fields and the meaning of the status field are retained. The new scimStatus field corresponds to the data.status field in the query API. The operationStatus field retains the status of the most recent SCIM task.
   */
  data?: UpdateIdentityProviderSCIMResponseBodyData;
  /**
   * @remarks
   * The HTTP status code of the current request. It indicates the processing status of the request and is not equivalent to the final result of the background task.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Task result message. It indicates the request acceptance or error message. You must check task result of an asynchronous task by calling the corresponding query API.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID. It is used to associate the current call with troubleshooting. Retain this ID if the request fails.
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

