// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetIdentityProviderUdPullConfigurationRequestLdapUdPullConfig extends $dara.Model {
  /**
   * @remarks
   * Group member attribute name
   * 
   * @example
   * memberxxx
   */
  groupMemberAttributeName?: string;
  /**
   * @remarks
   * GroupObjectClass
   * 
   * @example
   * groupxxx
   */
  groupObjectClass?: string;
  /**
   * @remarks
   * GroupObjectClass custom filter
   * 
   * @example
   * (|(cn=test)(group=test@test.com))
   */
  groupObjectClassCustomFilter?: string;
  /**
   * @remarks
   * OrganizationUnitObjectClass
   * 
   * @example
   * organizationUnitxxx,top
   */
  organizationUnitObjectClass?: string;
  /**
   * @remarks
   * UserObjectClass
   * 
   * @example
   * userPrincipalNamexxx, mail
   */
  userObjectClass?: string;
  /**
   * @remarks
   * UserObjectClass custom filter
   * 
   * @example
   * (|(cn=test)(mail=test@test.com))
   */
  userObjectClassCustomFilter?: string;
  static names(): { [key: string]: string } {
    return {
      groupMemberAttributeName: 'GroupMemberAttributeName',
      groupObjectClass: 'GroupObjectClass',
      groupObjectClassCustomFilter: 'GroupObjectClassCustomFilter',
      organizationUnitObjectClass: 'OrganizationUnitObjectClass',
      userObjectClass: 'UserObjectClass',
      userObjectClassCustomFilter: 'UserObjectClassCustomFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupMemberAttributeName: 'string',
      groupObjectClass: 'string',
      groupObjectClassCustomFilter: 'string',
      organizationUnitObjectClass: 'string',
      userObjectClass: 'string',
      userObjectClassCustomFilter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderUdPullConfigurationRequestPeriodicSyncConfig extends $dara.Model {
  /**
   * @remarks
   * Periodic synchronize cron
   * 
   * @example
   * 0 45 1 * * ?
   */
  periodicSyncCron?: string;
  /**
   * @remarks
   * Periodic synchronize times
   */
  periodicSyncTimes?: number[];
  /**
   * @remarks
   * Periodic synchronize type
   * 
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

export class SetIdentityProviderUdPullConfigurationRequestPullProtectedRule extends $dara.Model {
  /**
   * @remarks
   * Group deleted threshold
   * 
   * @example
   * 10
   */
  groupDeletedThreshold?: number;
  /**
   * @remarks
   * OrganizationalUnit deleted threshold
   * 
   * @example
   * 10
   */
  organizationalUnitDeletedThreshold?: number;
  /**
   * @remarks
   * User deleted threshold
   * 
   * @example
   * 30
   */
  userDeletedThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      groupDeletedThreshold: 'GroupDeletedThreshold',
      organizationalUnitDeletedThreshold: 'OrganizationalUnitDeletedThreshold',
      userDeletedThreshold: 'UserDeletedThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupDeletedThreshold: 'number',
      organizationalUnitDeletedThreshold: 'number',
      userDeletedThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentityProviderUdPullConfigurationRequestUdSyncScopeConfig extends $dara.Model {
  /**
   * @remarks
   * Synchronize source scopes
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * Synchronize target scope
   * 
   * @example
   * ou_asdaq1addsxzdq1XXX
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

export class SetIdentityProviderUdPullConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * Group synchronization status.
   * 
   * @example
   * disabled
   */
  groupSyncStatus?: string;
  /**
   * @remarks
   * Identity provider ID
   * 
   * This parameter is required.
   * 
   * @example
   * idp_my664lwkhpicbyzirog3xxxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * Incremental callback status, whether to process incremental callback data from IdP.
   * 
   * This parameter is required.
   * 
   * @example
   * disabled
   */
  incrementalCallbackStatus?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Ldap ud pull config
   */
  ldapUdPullConfig?: SetIdentityProviderUdPullConfigurationRequestLdapUdPullConfig;
  /**
   * @remarks
   * Periodic synchronize config
   */
  periodicSyncConfig?: SetIdentityProviderUdPullConfigurationRequestPeriodicSyncConfig;
  /**
   * @remarks
   * Periodic synchronize status
   * 
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * Synchronize protected rule
   */
  pullProtectedRule?: SetIdentityProviderUdPullConfigurationRequestPullProtectedRule;
  /**
   * @remarks
   * Synchronize configuration information.
   */
  udSyncScopeConfig?: SetIdentityProviderUdPullConfigurationRequestUdSyncScopeConfig;
  static names(): { [key: string]: string } {
    return {
      groupSyncStatus: 'GroupSyncStatus',
      identityProviderId: 'IdentityProviderId',
      incrementalCallbackStatus: 'IncrementalCallbackStatus',
      instanceId: 'InstanceId',
      ldapUdPullConfig: 'LdapUdPullConfig',
      periodicSyncConfig: 'PeriodicSyncConfig',
      periodicSyncStatus: 'PeriodicSyncStatus',
      pullProtectedRule: 'PullProtectedRule',
      udSyncScopeConfig: 'UdSyncScopeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupSyncStatus: 'string',
      identityProviderId: 'string',
      incrementalCallbackStatus: 'string',
      instanceId: 'string',
      ldapUdPullConfig: SetIdentityProviderUdPullConfigurationRequestLdapUdPullConfig,
      periodicSyncConfig: SetIdentityProviderUdPullConfigurationRequestPeriodicSyncConfig,
      periodicSyncStatus: 'string',
      pullProtectedRule: SetIdentityProviderUdPullConfigurationRequestPullProtectedRule,
      udSyncScopeConfig: SetIdentityProviderUdPullConfigurationRequestUdSyncScopeConfig,
    };
  }

  validate() {
    if(this.ldapUdPullConfig && typeof (this.ldapUdPullConfig as any).validate === 'function') {
      (this.ldapUdPullConfig as any).validate();
    }
    if(this.periodicSyncConfig && typeof (this.periodicSyncConfig as any).validate === 'function') {
      (this.periodicSyncConfig as any).validate();
    }
    if(this.pullProtectedRule && typeof (this.pullProtectedRule as any).validate === 'function') {
      (this.pullProtectedRule as any).validate();
    }
    if(this.udSyncScopeConfig && typeof (this.udSyncScopeConfig as any).validate === 'function') {
      (this.udSyncScopeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

