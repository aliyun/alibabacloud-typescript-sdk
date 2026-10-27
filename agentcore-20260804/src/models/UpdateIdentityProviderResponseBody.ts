// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderResponseBodyDataConfiguration extends $dara.Model {
  /**
   * @remarks
   * The actual SAML binding type saved in the upstream, which is HTTP-Redirect or HTTP-POST.
   * 
   * @example
   * HTTP-Redirect
   */
  bindingType?: string;
  /**
   * @remarks
   * The actual enterprise IdP entity ID saved in the upstream.
   * 
   * @example
   * https://idp.example.com/entity
   */
  entityId?: string;
  /**
   * @remarks
   * The actual enterprise IdP SSO logon URL saved in the upstream.
   * 
   * @example
   * https://idp.example.com/sso
   */
  loginUrl?: string;
  /**
   * @remarks
   * The actual SSO logon status in the upstream. Enabled indicates that it is turned on, and Disabled indicates that it is turned off. This should be evaluated separately from the expected value of loginEnabled.
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

export class UpdateIdentityProviderResponseBodyDataSaml extends $dara.Model {
  /**
   * @remarks
   * The saved SAML binding type, which is HTTP-Redirect or HTTP-POST.
   * 
   * @example
   * HTTP-Redirect
   */
  bindingType?: string;
  /**
   * @remarks
   * The saved enterprise IdP entity ID, which is different from the entity ID of the service provider (SP).
   * 
   * @example
   * https://idp.example.com/entity
   */
  entityId?: string;
  /**
   * @remarks
   * The saved enterprise IdP SSO logon URL.
   * 
   * @example
   * https://idp.example.com/sso
   */
  loginUrl?: string;
  /**
   * @remarks
   * The list of saved enterprise IdP X.509 signing certificates.
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

export class UpdateIdentityProviderResponseBodyDataSyncScope extends $dara.Model {
  /**
   * @remarks
   * The list of department IDs in the synchronization scope, obtained from ListIdentityProviderDepartments. In SelectedDepartments mode, at least one non-empty department ID must be provided. In AllAuthorized mode, this parameter should be omitted or an empty array should be passed.
   * 
   * @example
   * ["10001"]
   */
  departmentIds?: string[];
  /**
   * @remarks
   * The synchronization scope mode. AllAuthorized: all members within the authorization scope of the application address book. SelectedDepartments: the selected departments and all their sub-departments. A valid mode must be provided when syncScope is explicitly submitted.
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
   * The actual SAML configuration read back from the upstream. This update operation does not perform the read-back and usually does not return this field. Use GetIdentityProvider to obtain it.
   */
  configuration?: UpdateIdentityProviderResponseBodyDataConfiguration;
  /**
   * @remarks
   * The type of the identity provider. DingTalk: DingTalk. Feishu: Lark. CustomSSO: custom enterprise identity provider connected through SAML. The value must be the same as the type of the identity provider bound to the current workspace.
   * 
   * @example
   * DingTalk
   */
  identityProviderType?: string;
  /**
   * @remarks
   * The currently saved expected value of the logon switch, which alone does not prove that the upstream logon configuration has taken effect.
   */
  loginEnabled?: boolean;
  /**
   * @remarks
   * The currently saved logon protocol for CustomSSO, which is SAML when configured. This field is not returned for DingTalk or Lark.
   * 
   * @example
   * SAML
   */
  protocol?: string;
  /**
   * @remarks
   * The saved standardized SAML configuration for CustomSSO. The original metadata XML is not echoed. This field is not returned if no valid configuration is saved or if the identity provider is DingTalk or Lark. This value is the locally saved configuration and is not equivalent to the actual upstream configuration.
   */
  saml?: UpdateIdentityProviderResponseBodyDataSaml;
  /**
   * @remarks
   * The status of the identity provider resource and logon configuration. Valid values:
   * - CONFIGURED: The configuration is accepted.
   * - UPDATING: The configuration is being updated.
   * - SYNCING: Synchronization is in progress.
   * - SYNCED: The synchronization phase is completed.
   * - READY: The resource is ready.
   * - SYNC_FAILED: Synchronization failed.
   * - UPDATE_FAILED: The update failed.
   * - DISCONNECTING: Unbinding is in progress.
   * - DISCONNECT_FAILED: Unbinding failed.
   * READY alone does not indicate that users have been imported. Query the SCIM operation results for CustomSSO separately.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The currently saved expected value of the synchronization switch. For DingTalk and Lark, it is used for subsequent address book change events. The SCIM switch for CustomSSO is managed through UpdateIdentityProviderSCIM, and the operation results are queried through GetIdentityProviderSCIM.
   */
  syncEnabled?: boolean;
  /**
   * @remarks
   * The saved synchronization scope for DingTalk and Lark. The default value for valid historical configurations is AllAuthorized, and this field may not be returned for corrupted historical configurations. This field is not returned for CustomSSO.
   */
  syncScope?: UpdateIdentityProviderResponseBodyDataSyncScope;
  /**
   * @remarks
   * The ID of the workspace to which the identity provider belongs.
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
      configuration: UpdateIdentityProviderResponseBodyDataConfiguration,
      identityProviderType: 'string',
      loginEnabled: 'boolean',
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
   * The business status code of the API request. SUCCESS indicates that the request is successful, but does not mean that the asynchronous configuration or synchronization task is completed.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The currently saved identity provider binding information, including the expected configuration and resource status. The actual update may still be executing in the background.
   */
  data?: UpdateIdentityProviderResponseBodyData;
  /**
   * @remarks
   * The HTTP status code of the API request, which does not represent the execution result of the background task.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message of the API request. An error description is returned if the request fails.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. Provide this value when you troubleshoot issues.
   * 
   * @example
   * request-123456
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. To check whether the background configuration has taken effect, query the identity provider status separately.
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

