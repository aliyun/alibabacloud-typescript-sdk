// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentityProvidersResponseBodyIdentityProviders extends $dara.Model {
  /**
   * @remarks
   * Advanced configuration capabilities
   * 
   * @example
   * disabled
   */
  advancedStatus?: string;
  /**
   * @remarks
   * Authentication source product.
   * - urn:alibaba:idaas:idp:okta:okta
   * - urn:alibaba:idaas:idp:google:account
   * - urn:alibaba:idaas:idp:microsoft:aad
   * - urn:alibaba:idaas:idp:microsoft:ad
   * - urn:alibaba:idaas:idp:bytedance:lark
   * - urn:alibaba:idaas:idp:unknown:ldap
   * - urn:alibaba:idaas:idp:alibaba:idaas
   * - urn:alibaba:idaas:idp:tencent:wecom
   * - urn:alibaba:idaas:idp:alibaba:aliyunram
   * 
   * @example
   * urn:alibaba:idaas:idp:bytedance:lark
   */
  authnSourceSupplier?: string;
  /**
   * @remarks
   * Authentication method type.
   * - urn:alibaba:idaas:authntype:oidc
   * - urn:alibaba:idaas:authntype:saml2
   * 
   * @example
   * urn:alibaba:idaas:authntype:oidc
   */
  authnSourceType?: string;
  /**
   * @remarks
   * Does the corresponding IdP support authentication.
   * 
   * @example
   * disabled
   */
  authnStatus?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1712561597000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the Identity provider.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Identity provider external ID.
   * 
   * @example
   * test_123xxx
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
   * Identity provider name.
   * 
   * @example
   * ceshi
   */
  identityProviderName?: string;
  /**
   * @remarks
   * Identity provider synchronization type.
   * 
   * - Inbound to DingTalk: urn:alibaba:idaas:idp:alibaba:dingtalk:pull
   * 
   * - Outbound to DingTalk: urn:alibaba:idaas:idp:alibaba:dingtalk:push
   * 
   * - Inbound to WeCom: urn:alibaba:idaas:idp:tencent:wecom:pull
   * 
   * - Inbound to Lark: urn:alibaba:idaas:idp:bytedance:lark:pull
   * 
   * - Inbound to AD: urn:alibaba:idaas:idp:microsoft:ad:pull
   * 
   * - Inbound to LDAP: urn:alibaba:idaas:idp:unknown:ldap:pull
   * 
   * - Standard OIDC: urn:alibaba:idaas:idp:standard:oidc
   * 
   * - SASE Custom OIDC: urn:alibaba:idaas:idp:alibaba:sase
   * 
   * @example
   * urn:alibaba:idaas:idp:bytedance:lark:pull
   */
  identityProviderType?: string;
  /**
   * @remarks
   * Incremental callback status, whether to process the incremental callback data from IdP.
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
   * Last status check result.
   * 
   * @example
   * success
   */
  lastStatusCheckJobResult?: string;
  /**
   * @remarks
   * The reason why write operations are locked.
   * 
   * @example
   * ConfigNotReady.UuidIsNul
   */
  lockReason?: string;
  /**
   * @remarks
   * IdP logo url.
   * 
   * @example
   * https://cdn-cn-hangzhou.aliyunidaas.com/xx/logos/xx
   */
  logoUrl?: string;
  /**
   * @remarks
   * Regular verification status.
   * 
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * Whether support UD synchronization.Values:
   * - enabled
   * - disabled
   * 
   * @example
   * disabled
   */
  udPullStatus?: string;
  /**
   * @remarks
   * When supporting the range in the UD of ud_pullIDaaS side.
   * 
   * @example
   * ou_2buqmxsa3ltyqkjgpwfijurXXX
   */
  udPullTargetScope?: string;
  /**
   * @remarks
   * Synchronize capabilities
   * 
   * @example
   * disabled
   */
  udPushStatus?: string;
  /**
   * @remarks
   * The time when the service was updated.
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
   * Identity provider information array.
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
   * The total number of entries returned.
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

