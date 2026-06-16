// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityProvidersResponseBodyIdentityProviders extends $dara.Model {
  /**
   * @remarks
   * Indicates whether advanced configuration is enabled. Valid values:
   * 
   * - disabled: The feature is disabled.
   * 
   * - enabled: The feature is enabled.
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
   * The authentication method type. Valid values:
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
   * Indicates whether the identity provider supports authentication. Valid values:
   * 
   * - disabled: Authentication is disabled.
   * 
   * - enabled: Authentication is enabled.
   * 
   * @example
   * disabled
   */
  authnStatus?: string;
  /**
   * @remarks
   * The time when the identity provider was created. This is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1712561597000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the identity provider.
   * 
   * @example
   * None
   */
  description?: string;
  /**
   * @remarks
   * The external ID of the identity provider.
   * 
   * @example
   * test_123
   */
  identityProviderExternalId?: string;
  /**
   * @remarks
   * The identity provider ID.
   * 
   * @example
   * idp_m5b5wd5s2hpq4t6iaehhXXX
   */
  identityProviderId?: string;
  /**
   * @remarks
   * The name of the identity provider.
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
   * - Custom OIDC for SASE: urn:alibaba:idaas:idp:alibaba:sase
   * 
   * @example
   * urn:alibaba:idaas:idp:bytedance:lark:pull
   */
  identityProviderType?: string;
  /**
   * @remarks
   * The incremental callback status. This indicates whether to process incremental callback data from the identity provider. Valid values:
   * 
   * - disabled: The feature is disabled.
   * 
   * - enabled: The feature is enabled.
   * 
   * @example
   * enabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_pbf4dth34l2qb7mydpntXXX
   */
  instanceId?: string;
  /**
   * @remarks
   * The result of the last status check. A sync task can be triggered only when the status check of the identity provider returns \\`success\\`.
   * 
   * @example
   * success
   */
  lastStatusCheckJobResult?: string;
  /**
   * @remarks
   * The reason why the identity provider is locked.
   * 
   * @example
   * financial
   */
  lockReason?: string;
  /**
   * @remarks
   * The URL of the custom logo for the identity provider.
   * 
   * @example
   * https://cdn-cn-hangzhou.aliyunidaas.com/xx/logos/xx
   */
  logoUrl?: string;
  /**
   * @remarks
   * The periodic check status. This indicates whether to periodically check for data inconsistencies between IDaaS and the identity provider.
   * 
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * Indicates whether inbound synchronization is enabled. Valid values:
   * 
   * - disabled: The feature is disabled.
   * 
   * - enabled: The feature is enabled.
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
   * Indicates whether outbound synchronization is enabled. Valid values:
   * 
   * - disabled: The feature is disabled.
   * 
   * - enabled: The feature is enabled.
   * 
   * @example
   * disabled
   */
  udPushStatus?: string;
  /**
   * @remarks
   * The time when the identity provider was last updated. This is a UNIX timestamp. Unit: milliseconds.
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
   * The list of identity providers.
   */
  identityProviders?: ListIdentityProvidersResponseBodyIdentityProviders[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

