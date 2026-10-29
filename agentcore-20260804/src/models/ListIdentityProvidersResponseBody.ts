// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityProvidersResponseBodyItemsConfiguration extends $dara.Model {
  /**
   * @remarks
   * HTTP-Redirect or HTTP-POST. Required for manual entry. Queries return the short name.
   * 
   * @example
   * HTTP-Redirect
   */
  bindingType?: string;
  /**
   * @remarks
   * Required for manual entry. It must be non-empty and contain a maximum of 2,048 characters. Existing configurations cannot be changed. This is different from the local entity ID returned in SP queries.
   * 
   * @example
   * https://idp.example.com/entity
   */
  entityId?: string;
  /**
   * @remarks
   * Required for manual entry. It must be an absolute HTTPS URL without user credentials or fragments.
   * 
   * @example
   * https://idp.example.com/sso
   */
  loginUrl?: string;
  /**
   * @remarks
   * The actual switch value is Enabled or Disabled. This is not equivalent to the expected loginEnabled value saved in AC.
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

export class ListIdentityProvidersResponseBodyItemsMetadata extends $dara.Model {
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
   * The SAML binding URI in the historical metadata snapshot. Use saml.bindingType for CustomSSO updates.
   * 
   * @example
   * urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect
   */
  binding?: string;
  /**
   * @remarks
   * The certificate string in the historical metadata snapshot. Use saml.x509Certificates to edit the configuration. Do not submit the old metadata.
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
   * Required for manual entry. It must be non-empty and contain a maximum of 2,048 characters. Existing configurations cannot be changed. This is different from the local entity ID returned in SP queries.
   * 
   * @example
   * https://idp.example.com/entity
   */
  entityId?: string;
  /**
   * @remarks
   * Required for manual entry. It must be an absolute HTTPS URL without user credentials or fragments.
   * 
   * @example
   * https://idp.example.com/sso
   */
  loginUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      appKey: 'appKey',
      binding: 'binding',
      certificates: 'certificates',
      corpId: 'corpId',
      entityId: 'entityId',
      loginUrl: 'loginUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appKey: 'string',
      binding: 'string',
      certificates: 'string',
      corpId: 'string',
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

export class ListIdentityProvidersResponseBodyItemsSaml extends $dara.Model {
  /**
   * @remarks
   * HTTP-Redirect or HTTP-POST. Required for manual entry. Queries return the short name.
   * 
   * @example
   * HTTP-Redirect
   */
  bindingType?: string;
  /**
   * @remarks
   * Required for manual entry. It must be non-empty and contain a maximum of 2,048 characters. Existing configurations cannot be changed. This is different from the local entity ID returned in SP queries.
   * 
   * @example
   * https://idp.example.com/entity
   */
  entityId?: string;
  /**
   * @remarks
   * Required for manual entry. It must be an absolute HTTPS URL without user credentials or fragments.
   * 
   * @example
   * https://idp.example.com/sso
   */
  loginUrl?: string;
  /**
   * @remarks
   * A non-empty array is required for manual entry. Use PEM X.509 certificate text. The current validity period is verified. A maximum of two certificates are allowed after deduplication.
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

export class ListIdentityProvidersResponseBodyItemsSyncScope extends $dara.Model {
  /**
   * @remarks
   * When the mode is SelectedDepartments, it must contain at least one non-empty department ID obtained from ListIdentityProviderDepartments. When the mode is AllAuthorized, pass an empty array or omit this field.
   * 
   * @example
   * ["10001"]
   */
  departmentIds?: string[];
  /**
   * @remarks
   * Valid values:
   * - AllAuthorized: The full authorization scope, limited by the application address book authorization.
   * - SelectedDepartments: The selected departments and all their sub-departments.
   * You must provide a valid mode when explicitly submitting syncScope. The backend verifies the mode.
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

export class ListIdentityProvidersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The actual SAML configuration is read on demand only by GetIdentityProvider. SCIM queries and preparations return the actual received status and URLs.
   */
  configuration?: ListIdentityProvidersResponseBodyItemsConfiguration;
  /**
   * @remarks
   * The creation time in UTC format based on RFC 3339.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The event subscription callback URL. You must configure this URL in the external identity provider application to receive organization change events. An empty string is returned if the user pool is not activated.
   * 
   * @example
   * http://auth.cn-hangzhou.agentteams.aliyuncs.com/roa/dingtalk/event/up-123456
   */
  eventSubscriptionCallbackUrl?: string;
  /**
   * @remarks
   * The type of the external identity provider. Valid values: DingTalk, Feishu.
   * 
   * @example
   * DingTalk
   */
  identityProviderType?: string;
  /**
   * @remarks
   * The logon callback URL. You must configure this URL in the external identity provider application. An empty string is returned if the user pool is not activated.
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
   * Only SAML is currently supported. This field may not be returned if no valid configuration is saved. OIDC placeholder initialization is not supported.
   * 
   * @example
   * SAML
   */
  protocol?: string;
  /**
   * @remarks
   * The input supports either XML or complete manual entry. Queries return the standardized configuration and do not echo the original XML. This field can be omitted if it is not configured.
   */
  saml?: ListIdentityProvidersResponseBodyItemsSaml;
  /**
   * @remarks
   * The binding status. Valid values:
   * - CONFIGURED: The configuration is accepted and waiting for user pool activation.
   * - SYNCING: Organization members are being synchronized.
   * - SYNCED: Organization member synchronization is complete.
   * - READY: The binding is in effect.
   * - SYNC_FAILED: Organization member synchronization failed.
   * - UPDATING: The configuration is being updated.
   * - UPDATE_FAILED: Configuration update failed.
   * - DISCONNECTING: The binding is being disconnected.
   * - DISCONNECT_FAILED: Disconnection failed.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether to enable organization member synchronization. If enabled, organization members are synchronized as workspace users by this external identity provider.
   */
  syncEnabled?: boolean;
  /**
   * @remarks
   * Follows the department-based synchronization scope definition. If omitted during creation, the default value is AllAuthorized, and the first provider synchronization is determined by syncOnBind. If omitted or set to null during an update, the original value is retained. Updating the saved scope does not automatically trigger full synchronization.
   */
  syncScope?: ListIdentityProvidersResponseBodyItemsSyncScope;
  /**
   * @remarks
   * The time of the last modification in UTC format based on RFC 3339.
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
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createdAt: 'createdAt',
      eventSubscriptionCallbackUrl: 'eventSubscriptionCallbackUrl',
      identityProviderType: 'identityProviderType',
      loginCallbackUrl: 'loginCallbackUrl',
      loginEnabled: 'loginEnabled',
      metadata: 'metadata',
      protocol: 'protocol',
      saml: 'saml',
      status: 'status',
      syncEnabled: 'syncEnabled',
      syncScope: 'syncScope',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ListIdentityProvidersResponseBodyItemsConfiguration,
      createdAt: 'string',
      eventSubscriptionCallbackUrl: 'string',
      identityProviderType: 'string',
      loginCallbackUrl: 'string',
      loginEnabled: 'boolean',
      metadata: ListIdentityProvidersResponseBodyItemsMetadata,
      protocol: 'string',
      saml: ListIdentityProvidersResponseBodyItemsSaml,
      status: 'string',
      syncEnabled: 'boolean',
      syncScope: ListIdentityProvidersResponseBodyItemsSyncScope,
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
    if(this.syncScope && typeof (this.syncScope as any).validate === 'function') {
      (this.syncScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityProvidersResponseBody extends $dara.Model {
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
   * The maximum number of records per page that takes effect in this query.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message. An error description is returned if the request fails.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The cursor for the next page. Empty if there is no next page.
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
   * The total number of external identity providers that match the query conditions.
   * 
   * @example
   * 42
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListIdentityProvidersResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

