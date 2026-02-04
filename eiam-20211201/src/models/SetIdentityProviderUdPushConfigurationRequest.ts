// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetIdentityProviderUdPushConfigurationRequestLdapUdPushConfig extends $dara.Model {
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

export class SetIdentityProviderUdPushConfigurationRequestPeriodicSyncConfig extends $dara.Model {
  /**
   * @example
   * 0 45 1 * * ?
   */
  periodicSyncCron?: string;
  periodicSyncTimes?: number[];
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
      periodicSyncTimes: { 'type': 'array', 'itemType': 'number' },
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

export class SetIdentityProviderUdPushConfigurationRequestUdSyncScopeConfigs extends $dara.Model {
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
   * 6537211
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

export class SetIdentityProviderUdPushConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS的身份提供方主键id
   * 
   * This parameter is required.
   * 
   * @example
   * idp_11111
   */
  identityProviderId?: string;
  /**
   * @remarks
   * 增量回调状态，是否处理来自IdP的增量回调数据
   * 
   * This parameter is required.
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * IDaaS EIAM的实例id
   * 
   * This parameter is required.
   * 
   * @example
   * eiam-111ccc1111
   */
  instanceId?: string;
  ldapUdPushConfig?: SetIdentityProviderUdPushConfigurationRequestLdapUdPushConfig;
  periodicSyncConfig?: SetIdentityProviderUdPushConfigurationRequestPeriodicSyncConfig;
  /**
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * 同步出配置信息
   */
  udSyncScopeConfigs?: SetIdentityProviderUdPushConfigurationRequestUdSyncScopeConfigs[];
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
      ldapUdPushConfig: SetIdentityProviderUdPushConfigurationRequestLdapUdPushConfig,
      periodicSyncConfig: SetIdentityProviderUdPushConfigurationRequestPeriodicSyncConfig,
      periodicSyncStatus: 'string',
      udSyncScopeConfigs: { 'type': 'array', 'itemType': SetIdentityProviderUdPushConfigurationRequestUdSyncScopeConfigs },
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

