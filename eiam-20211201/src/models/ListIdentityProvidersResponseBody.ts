// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityProvidersResponseBodyIdentityProviders extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the advanced configuration capability is enabled. Valid values:
   * 
   * - disabled: Disabled.
   * 
   * - enabled: Enabled.
   * 
   * @example
   * disabled
   */
  advancedStatus?: string;
  /**
   * @remarks
   * The authentication source product, such as Okta, Google, or Azure AD. Valid values:
   * 
   * - urn:alibaba:idaas:idp:alibaba:dingtalk: DingTalk.
   * 
   * - urn:alibaba:idaas:idp:unknown:ldap: LDAP.
   * 
   * - urn:alibaba:idaas:idp:alibaba:idaas: Alibaba Cloud IDaaS.
   * 
   * - urn:alibaba:idaas:idp:tencent:wecom: WeCom.
   * 
   * - urn:alibaba:idaas:idp:bytedance:lark: Lark.
   * 
   * - urn:alibaba:idaas:idp:microsoft:ad: Active Directory.
   * 
   * - urn:alibaba:idaas:idp:microsoft:aad: Azure Active Directory.
   * 
   * - urn:alibaba:idaas:idp:alibaba:sase: Alibaba Cloud SASE.
   * 
   * @example
   * urn:alibaba:idaas:idp:bytedance:lark
   */
  authnSourceSupplier?: string;
  /**
   * @remarks
   * The authentication method type, which can be OIDC or SAML. Valid values:
   * 
   * - urn:alibaba:idaas:authntype:oidc: OIDC.
   * 
   * - urn:alibaba:idaas:authntype:saml2: SAML.
   * 
   * @example
   * urn:alibaba:idaas:authntype:oidc
   */
  authnSourceType?: string;
  /**
   * @remarks
   * Specifies whether the IdP supports authentication. Valid values:
   * 
   * - disabled: Disabled.
   * 
   * - enabled: Enabled.
   * 
   * @example
   * disabled
   */
  authnStatus?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
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
   * test
   */
  identityProviderName?: string;
  /**
   * @remarks
   * The identity provider synchronization type. Valid values:
   * 
   * - urn:alibaba:idaas:idp:alibaba:dingtalk:pull: Inbound DingTalk.
   * 
   * - urn:alibaba:idaas:idp:alibaba:dingtalk:push: Outbound DingTalk.
   * 
   * - urn:alibaba:idaas:idp:tencent:wecom:pull: Inbound WeCom.
   * 
   * - urn:alibaba:idaas:idp:bytedance:lark:pull: Inbound Lark.
   * 
   * - urn:alibaba:idaas:idp:microsoft:ad:pull: Inbound Active Directory.
   * 
   * - urn:alibaba:idaas:idp:unknown:ldap:pull: Inbound LDAP.
   * 
   * - urn:alibaba:idaas:idp:standard:oidc: Standard OIDC.
   * 
   * - urn:alibaba:idaas:idp:alibaba:sase: SASE custom OIDC.
   * 
   * @example
   * urn:alibaba:idaas:idp:bytedance:lark:pull
   */
  identityProviderType?: string;
  /**
   * @remarks
   * The incremental callback status, which specifies whether to process incremental callback data from the IdP. Valid values:
   * 
   * - disabled: Disabled.
   * 
   * - enabled: Enabled.
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
   * The result of the last status check. A synchronization task can be triggered only when the identity provider status check result is success before synchronization.
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
   * The periodic verification status, which specifies whether to periodically verify data differences between EIAM and the identity provider.
   * 
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * Specifies whether the inbound synchronization feature is supported. Valid values:
   * 
   * - disabled: Disabled.
   * 
   * - enabled: Enabled.
   * 
   * @example
   * disabled
   */
  udPullStatus?: string;
  /**
   * @remarks
   * The synchronization target node.
   * 
   * @example
   * ou_2buqmxsa3ltyqkjgpwfijurXXX
   */
  udPullTargetScope?: string;
  /**
   * @remarks
   * Specifies whether the outbound synchronization capability is enabled. Valid values:
   * 
   * - disabled: Disabled.
   * 
   * - enabled: Enabled.
   * 
   * @example
   * disabled
   */
  udPushStatus?: string;
  /**
   * @remarks
   * The update time. The value is a UNIX timestamp in milliseconds.
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

