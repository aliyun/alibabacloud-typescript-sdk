// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetIdentityProviderUdPushConfigurationRequestLdapUdPushConfig extends $dara.Model {
  /**
   * @remarks
   * The organization object class.
   * 
   * @example
   * ou,top
   */
  organizationUnitObjectClass?: string;
  /**
   * @remarks
   * The organization RDN.
   * 
   * @example
   * ou
   */
  organizationalUnitRdn?: string;
  /**
   * @remarks
   * Specifies whether to synchronize passwords.
   * 
   * @example
   * enabled
   */
  passwordSyncStatus?: string;
  /**
   * @remarks
   * The user object class.
   * 
   * @example
   * user,top
   */
  userObjectClass?: string;
  /**
   * @remarks
   * The user RDN.
   * 
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
   * @remarks
   * The cron expression.
   * 
   * @example
   * 0 45 1 * * ?
   */
  periodicSyncCron?: string;
  /**
   * @remarks
   * The collection of time points.
   */
  periodicSyncTimes?: number[];
  /**
   * @remarks
   * The type.
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

export class SetIdentityProviderUdPushConfigurationRequestUdSyncScopeConfigs extends $dara.Model {
  /**
   * @remarks
   * The source node for synchronization.
   */
  sourceScopes?: string[];
  /**
   * @remarks
   * The target node for synchronization.
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
   * The identity provider ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idp_11111
   */
  identityProviderId?: string;
  /**
   * @remarks
   * Specifies whether to process incremental callback data from the IdP.
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
   * eiam-111ccc1111
   */
  instanceId?: string;
  /**
   * @remarks
   * The configuration for LDAP synchronization.
   */
  ldapUdPushConfig?: SetIdentityProviderUdPushConfigurationRequestLdapUdPushConfig;
  /**
   * @remarks
   * The periodic check configuration.
   */
  periodicSyncConfig?: SetIdentityProviderUdPushConfigurationRequestPeriodicSyncConfig;
  /**
   * @remarks
   * The periodic check status.
   * 
   * @example
   * disabled
   */
  periodicSyncStatus?: string;
  /**
   * @remarks
   * The outbound synchronization configuration.
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

