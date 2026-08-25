// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
   * The CorpId of the DingTalk enterprise. Required when the binding type is DingTalk.
   * 
   * @example
   * dingexamplecorpid01
   */
  corpId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      appKey: 'appKey',
      corpId: 'corpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appKey: 'string',
      corpId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityProvidersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC, formatted according to RFC 3339.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The event subscription callback URL. Configure this URL in the external identity provider application to receive organization change events. An empty string is returned if the user pool has not been provisioned.
   * 
   * @example
   * http://auth.cn-hangzhou.agentteams.aliyuncs.com/roa/dingtalk/event/up-123456
   */
  eventSubscriptionCallbackUrl?: string;
  /**
   * @remarks
   * The type of the external identity provider. Valid values:
   * - DingTalk
   * - Feishu
   * 
   * @example
   * DingTalk
   */
  identityProviderType?: string;
  /**
   * @remarks
   * The logon callback URL. Configure this URL in the external identity provider application. An empty string is returned if the user pool has not been provisioned.
   * 
   * @example
   * https://signin-cn-hangzhou.aliyunagentid.com/up-123456/dingtalk/callback
   */
  loginCallbackUrl?: string;
  /**
   * @remarks
   * Indicates whether workspace users are allowed to log on through this external identity provider.
   */
  loginEnabled?: boolean;
  /**
   * @remarks
   * The application configuration of the external identity provider. Application secret configurations are not returned.
   */
  metadata?: ListIdentityProvidersResponseBodyItemsMetadata;
  /**
   * @remarks
   * The binding status. Valid values:
   * - CONFIGURED: The configuration has been accepted and is waiting for user pool provisioning.
   * - SYNCING: Organization members are being synchronized.
   * - SYNCED: Organization member synchronization is complete.
   * - READY: The binding is active.
   * - SYNC_FAILED: Organization member synchronization failed.
   * - UPDATING: The configuration is being updated.
   * - UPDATE_FAILED: The configuration update failed.
   * - DISCONNECTING: The binding is being removed.
   * - DISCONNECT_FAILED: The unbinding failed.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether organization member synchronization is enabled. When enabled, organization members are synchronized from this external identity provider as workspace users.
   */
  syncEnabled?: boolean;
  /**
   * @remarks
   * The last modification time in UTC, formatted according to RFC 3339.
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
      createdAt: 'createdAt',
      eventSubscriptionCallbackUrl: 'eventSubscriptionCallbackUrl',
      identityProviderType: 'identityProviderType',
      loginCallbackUrl: 'loginCallbackUrl',
      loginEnabled: 'loginEnabled',
      metadata: 'metadata',
      status: 'status',
      syncEnabled: 'syncEnabled',
      updatedAt: 'updatedAt',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      eventSubscriptionCallbackUrl: 'string',
      identityProviderType: 'string',
      loginCallbackUrl: 'string',
      loginEnabled: 'boolean',
      metadata: ListIdentityProvidersResponseBodyItemsMetadata,
      status: 'string',
      syncEnabled: 'boolean',
      updatedAt: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
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
   * The maximum number of records per page that takes effect for this query.
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
   * The pagination token for the next page. This parameter is empty if no more pages exist.
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
   * Indicates whether the request was successful.
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

