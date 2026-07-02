// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityProvidersResponseBodyIdentityProviders extends $dara.Model {
  /**
   * @remarks
   * Whether the advanced configuration is enabled. Valid values:
   * 
   * - Disabled: disabled
   * 
   * - Enabled: enabled
   * 
   * @example
   * disabled
   */
  advancedStatus?: string;
  /**
   * @remarks
   * The authentication source product, such as Okta, Google, or Azure AD.
   * Valid values:
   * 
   * - DingTalk: urn:alibaba:idaas:idp:alibaba:dingtalk
   * 
   * - LDAP: urn:alibaba:idaas:idp:unknown:ldap
   * 
   * - Alibaba Cloud IDaaS: urn:alibaba:idaas:idp:alibaba:idaas
   * 
   * - WeCom: urn:alibaba:idaas:idp:tencent:wecom
   * 
   * - Lark: urn:alibaba:idaas:idp:bytedance:lark
   * 
   * - Active Directory: urn:alibaba:idaas:idp:microsoft:ad
   * 
   * - Azure Active Directory: urn:alibaba:idaas:idp:microsoft:aad
   * 
   * - Alibaba Cloud SASE: urn:alibaba:idaas:idp:alibaba:sase
   * 
   * @example
   * urn:alibaba:idaas:idp:bytedance:lark
   */
  authnSourceSupplier?: string;
  /**
   * @remarks
   * The authentication source type, OIDC or SAML. Valid values:
   * 
   * - OIDC: urn:alibaba:idaas:authntype:oidc
   * 
   * - SAML: urn:alibaba:idaas:authntype:saml2
   * 
   * @example
   * urn:alibaba:idaas:authntype:oidc
   */
  authnSourceType?: string;
  /**
   * @remarks
   * Whether the corresponding IdP supports authentication. Valid values:
   * 
   * - Disabled: disabled
   * 
   * - Enabled: enabled
   * 
   * @example
   * disabled
   */
  authnStatus?: string;
  /**
   * @remarks
   * The creation time, in Unix timestamp format, measured in milliseconds.
   * 
   * @example
   * 1712561597000
   */
  createTime?: number;
  /**
   * @remarks
   * Description of the identity provider.
   * 
   * @example
   * None
   */
  description?: string;
  /**
   * @remarks
   * External ID of the identity provider.
   * 
   * @example
   * test_123
   */
  identityProviderExternalId?: string;
  /**
   * @remarks
   * Identity provider ID.
   * 
   * @example
   * idp_m5b5wd5s2hpq4t6iaehhXXX
   */
  identityProviderId?: string;
  /**
   * @remarks
   * Name of the identity provider.
   * 
   * @example
   * xxxx
   */
  identityProviderName?: string;
  /**
   * @remarks
   * The synchronization type of the identity provider.
   * 
   * - Inbound DingTalk: urn:alibaba:idaas:idp:alibaba:dingtalk:pull
   * 
   * - Outbound DingTalk: urn:alibaba:idaas:idp:alibaba:dingtalk:push
   * 
   * - Inbound WeCom: urn:alibaba:idaas:idp:tencent:wecom:pull
   * 
   * - Inbound Lark: urn:alibaba:idaas:idp:bytedance:lark:pull
   * 
   * - Inbound AD: urn:alibaba:idaas:idp:microsoft:ad:pull
   * 
   * - Inbound LDAP: urn:alibaba:idaas:idp:unknown:ldap:pull
   * 
   * - Standard OIDC: urn:alibaba:idaas:idp:standard:oidc
   * 
   * - SASE Customized OIDC: urn:alibaba:idaas:idp:alibaba:sase
   * 
   * @example
   * urn:alibaba:idaas:idp:bytedance:lark:pull
   */
  identityProviderType?: string;
  /**
   * @remarks
   * The incremental callback status, indicating whether incremental callback data from the IdP is processed. Valid values:
   * 
   * - Disabled: disabled
   * 
   * - Enabled: enabled
   * 
   * @example
   * enabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * idaas_pbf4dth34l2qb7mydpntXXX
   */
  instanceId?: string;
  /**
   * @remarks
   * The last status check result. Before synchronization, a sync task can only be triggered when the identity provider status check result is success.
   * 
   * @example
   * success
   */
  lastStatusCheckJobResult?: string;
  /**
   * @remarks
   * The lock reason.
   * 
   * @example
   * financial
   */
  lockReason?: string;
  /**
   * @remarks
   * The custom logo URL of the identity provider.
   * 
   * @example
   * https://cdn-cn-hangzhou.aliyunidaas.com/xx/logos/xx
   */
  logoUrl?: string;
  /**
   * @remarks
   * The periodic sync status, indicating whether the data differences between EIAM and the identity provider are periodically checked.
   * 
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * Whether the inbound sync feature is supported. Valid values:
   * 
   * - Disabled: disabled
   * 
   * - Enabled: enabled
   * 
   * @example
   * disabled
   */
  udPullStatus?: string;
  /**
   * @remarks
   * The target node for synchronization.
   * 
   * @example
   * ou_2buqmxsa3ltyqkjgpwfijurXXX
   */
  udPullTargetScope?: string;
  /**
   * @remarks
   * Whether the outbound sync feature is enabled. Valid values:
   * 
   * - Disabled: disabled
   * 
   * - Enabled: enabled
   * 
   * @example
   * disabled
   */
  udPushStatus?: string;
  /**
   * @remarks
   * The update time, in Unix timestamp format, measured in milliseconds.
   * 
   * @example
   * 1712561597000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      advancedStatus: 'AdvancedStatus',
      authnSourceSupplier: 'AuthnSourceSupplier',
      authnSourceType: 'AuthnSourceType',
      authnStatus: 'AuthnStatus',
      createTime: 'CreateTime',
      description: 'Description',
      identityProviderExternalId: 'IdentityProviderExternalId',
      identityProviderId: 'IdentityProviderId',
      identityProviderName: 'IdentityProviderName',
      identityProviderType: 'IdentityProviderType',
      incrementalCallbackStatus: 'IncrementalCallbackStatus',
      instanceId: 'InstanceId',
      lastStatusCheckJobResult: 'LastStatusCheckJobResult',
      lockReason: 'LockReason',
      logoUrl: 'LogoUrl',
      periodicSyncStatus: 'PeriodicSyncStatus',
      udPullStatus: 'UdPullStatus',
      udPullTargetScope: 'UdPullTargetScope',
      udPushStatus: 'UdPushStatus',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedStatus: 'string',
      authnSourceSupplier: 'string',
      authnSourceType: 'string',
      authnStatus: 'string',
      createTime: 'number',
      description: 'string',
      identityProviderExternalId: 'string',
      identityProviderId: 'string',
      identityProviderName: 'string',
      identityProviderType: 'string',
      incrementalCallbackStatus: 'string',
      instanceId: 'string',
      lastStatusCheckJobResult: 'string',
      lockReason: 'string',
      logoUrl: 'string',
      periodicSyncStatus: 'string',
      udPullStatus: 'string',
      udPullTargetScope: 'string',
      udPushStatus: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdentityProvidersResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of identity provider information.
   */
  identityProviders?: ListIdentityProvidersResponseBodyIdentityProviders[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      identityProviders: 'IdentityProviders',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviders: { 'type': 'array', 'itemType': ListIdentityProvidersResponseBodyIdentityProviders },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.identityProviders)) {
      $dara.Model.validateArray(this.identityProviders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

