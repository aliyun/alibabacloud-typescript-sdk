// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationLdapUdPushConfig extends $dara.Model {
  /**
   * @example
   * ou,top
   */
  organizationUnitObjectClass?: string;
  /**
   * @example
   * ou
   */
  organizationalUnitRdn?: string;
  /**
   * @example
   * enabled
   */
  passwordSyncStatus?: string;
  /**
   * @example
   * user,top
   */
  userObjectClass?: string;
  /**
   * @example
   * cn
   */
  userRdn?: string;
  static names(): { [key: string]: string } {
    return {
      organizationUnitObjectClass: 'OrganizationUnitObjectClass',
      organizationalUnitRdn: 'OrganizationalUnitRdn',
      passwordSyncStatus: 'PasswordSyncStatus',
      userObjectClass: 'UserObjectClass',
      userRdn: 'UserRdn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationUnitObjectClass: 'string',
      organizationalUnitRdn: 'string',
      passwordSyncStatus: 'string',
      userObjectClass: 'string',
      userRdn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationPeriodicSyncConfig extends $dara.Model {
  /**
   * @example
   * 0 45 1 * * ?
   */
  periodicSyncCron?: string;
  periodicSyncTimes?: string[];
  /**
   * @example
   * cron
   */
  periodicSyncType?: string;
  static names(): { [key: string]: string } {
    return {
      periodicSyncCron: 'PeriodicSyncCron',
      periodicSyncTimes: 'PeriodicSyncTimes',
      periodicSyncType: 'PeriodicSyncType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      periodicSyncCron: 'string',
      periodicSyncTimes: { 'type': 'array', 'itemType': 'string' },
      periodicSyncType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.periodicSyncTimes)) {
      $dara.Model.validateArray(this.periodicSyncTimes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationUdSyncScopeConfigs extends $dara.Model {
  /**
   * @remarks
   * 同步来源节点
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * 同步目标节点
   * 
   * @example
   * 604352338
   */
  targetScope?: string;
  static names(): { [key: string]: string } {
    return {
      sourceScopes: 'SourceScopes',
      targetScope: 'TargetScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceScopes: { 'type': 'array', 'itemType': 'string' },
      targetScope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceScopes)) {
      $dara.Model.validateArray(this.sourceScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfiguration extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM 身份提供方ID
   * 
   * @example
   * idp_na2rzpyc67zr7ixdfy35zgrxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * 增量回调状态，是否处理来自IdP的增量回调数据
   * 
   * @example
   * enabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * IDaaS EIAM 实例Id
   * 
   * @example
   * idaas_7vdv3olzk36gymwtlaq6fixxxx
   */
  instanceId?: string;
  ldapUdPushConfig?: GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationLdapUdPushConfig;
  periodicSyncConfig?: GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationPeriodicSyncConfig;
  /**
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * 同步出配置信息
   */
  udSyncScopeConfigs?: GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationUdSyncScopeConfigs[];
  static names(): { [key: string]: string } {
    return {
      identityProviderId: 'IdentityProviderId',
      incrementalCallbackStatus: 'IncrementalCallbackStatus',
      instanceId: 'InstanceId',
      ldapUdPushConfig: 'LdapUdPushConfig',
      periodicSyncConfig: 'PeriodicSyncConfig',
      periodicSyncStatus: 'PeriodicSyncStatus',
      udSyncScopeConfigs: 'UdSyncScopeConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderId: 'string',
      incrementalCallbackStatus: 'string',
      instanceId: 'string',
      ldapUdPushConfig: GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationLdapUdPushConfig,
      periodicSyncConfig: GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationPeriodicSyncConfig,
      periodicSyncStatus: 'string',
      udSyncScopeConfigs: { 'type': 'array', 'itemType': GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfigurationUdSyncScopeConfigs },
    };
  }

  validate() {
    if(this.ldapUdPushConfig && typeof (this.ldapUdPushConfig as any).validate === 'function') {
      (this.ldapUdPushConfig as any).validate();
    }
    if(this.periodicSyncConfig && typeof (this.periodicSyncConfig as any).validate === 'function') {
      (this.periodicSyncConfig as any).validate();
    }
    if(Array.isArray(this.udSyncScopeConfigs)) {
      $dara.Model.validateArray(this.udSyncScopeConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderUdPushConfigurationResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  udPushConfiguration?: GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      udPushConfiguration: 'UdPushConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      udPushConfiguration: GetIdentityProviderUdPushConfigurationResponseBodyUdPushConfiguration,
    };
  }

  validate() {
    if(this.udPushConfiguration && typeof (this.udPushConfiguration as any).validate === 'function') {
      (this.udPushConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

