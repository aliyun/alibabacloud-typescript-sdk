// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationLdapUdPullConfig extends $dara.Model {
  /**
   * @remarks
   * The group member identifier attribute.
   * 
   * @example
   * group
   */
  groupMemberAttributeName?: string;
  /**
   * @remarks
   * The group ObjectClass.
   * 
   * @example
   * member
   */
  groupObjectClass?: string;
  /**
   * @remarks
   * The custom filter for groups.
   * 
   * @example
   * (|(cn=test)(group=test@test.com))
   */
  groupObjectClassCustomFilter?: string;
  /**
   * @remarks
   * The organizational unit ObjectClass.
   * 
   * @example
   * ou,top
   */
  organizationUnitObjectClass?: string;
  /**
   * @remarks
   * The user ObjectClass.
   * 
   * @example
   * ou,top
   */
  userObjectClass?: string;
  /**
   * @remarks
   * The custom filter for users.
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

export class GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationPeriodicSyncConfig extends $dara.Model {
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 0 45 1 * * ?
   */
  periodicSyncCron?: string;
  /**
   * @remarks
   * The execution time points. For example, [3, 5] indicates that synchronization runs once between 3:00 and 4:00 and once between 5:00 and 6:00.
   * 
   * @example
   * [3,5]
   */
  periodicSyncTimes?: number;
  /**
   * @remarks
   * The periodic synchronization type.
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
      periodicSyncTimes: 'number',
      periodicSyncType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationPullProtectedRule extends $dara.Model {
  /**
   * @remarks
   * The threshold for the number of deleted groups. If the number of deleted groups exceeds this value, the synchronization task is terminated.
   * 
   * @example
   * 10
   */
  groupDeletedThreshold?: number;
  /**
   * @remarks
   * The threshold for the number of deleted organizational units. If the number of deleted organizational units exceeds this value, the synchronization task is terminated.
   * 
   * @example
   * 10
   */
  organizationalUnitDeletedThreshold?: number;
  /**
   * @remarks
   * The threshold for the number of deleted accounts. If the number of deleted users exceeds this value, the synchronization task is terminated.
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

export class GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationUdSyncScopeConfig extends $dara.Model {
  /**
   * @remarks
   * The list of source nodes for synchronization.
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * The target node for synchronization.
   * 
   * @example
   * ou_asjdfhaskfhw213mnsj33sXXX
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

export class GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfiguration extends $dara.Model {
  /**
   * @remarks
   * The group synchronization status. Valid values:
   * 
   * - disabled
   * - enabled.
   * 
   * @example
   * enabled
   */
  groupSyncStatus?: string;
  /**
   * @remarks
   * The identity provider ID.
   * 
   * @example
   * idp_my664lwkhpicbyzirog3xxxxx
   */
  identityProviderId?: string;
  /**
   * @remarks
   * The incremental callback status, which specifies whether to process incremental callback data from the IdP. Valid values:
   * 
   * - disabled
   * - enabled.
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
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The LDAP synchronization configuration.
   */
  ldapUdPullConfig?: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationLdapUdPullConfig;
  /**
   * @remarks
   * The periodic synchronization configuration.
   */
  periodicSyncConfig?: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationPeriodicSyncConfig;
  /**
   * @remarks
   * The periodic verification status, which specifies whether to periodically verify data differences between IDaaS and the identity provider. Valid values:
   * 
   * - disabled
   * - enabled.
   * 
   * @example
   * enabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * The inbound synchronization protection rule configuration.
   */
  pullProtectedRule?: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationPullProtectedRule;
  /**
   * @remarks
   * The synchronization scope configuration.
   */
  udSyncScopeConfig?: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationUdSyncScopeConfig;
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
      ldapUdPullConfig: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationLdapUdPullConfig,
      periodicSyncConfig: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationPeriodicSyncConfig,
      periodicSyncStatus: 'string',
      pullProtectedRule: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationPullProtectedRule,
      udSyncScopeConfig: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfigurationUdSyncScopeConfig,
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

export class GetIdentityProviderUdPullConfigurationResponseBody extends $dara.Model {
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
   * The inbound synchronization configuration.
   */
  udPullConfiguration?: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      udPullConfiguration: 'UdPullConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      udPullConfiguration: GetIdentityProviderUdPullConfigurationResponseBodyUdPullConfiguration,
    };
  }

  validate() {
    if(this.udPullConfiguration && typeof (this.udPullConfiguration as any).validate === 'function') {
      (this.udPullConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

