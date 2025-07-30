// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSynchronizationJobRequestSynchronizationScopeConfig extends $dara.Model {
  /**
   * @remarks
   * The group IDs.
   */
  groupIds?: string[];
  /**
   * @remarks
   * The IDs of organizational units.
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * UserIds
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      organizationalUnitIds: 'OrganizationalUnitIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    if(Array.isArray(this.organizationalUnitIds)) {
      $dara.Model.validateArray(this.organizationalUnitIds);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSynchronizationJobRequest extends $dara.Model {
  /**
   * @remarks
   * Synchronization task description
   * 
   * @example
   * 描述
   */
  description?: string;
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
   * Whether initialize password
   * 
   * @example
   * true
   */
  passwordInitialization?: boolean;
  /**
   * @remarks
   * Synchronization scope
   */
  synchronizationScopeConfig?: RunSynchronizationJobRequestSynchronizationScopeConfig;
  /**
   * @remarks
   * The ID of the synchronization destination.
   * 
   * This parameter is required.
   * 
   * @example
   * idp_my664lwkhpicbyzirog3ngxxxxx
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the synchronization destination. Valid values:
   * 
   * *   identity_provider
   * *   application
   * 
   * This parameter is required.
   * 
   * @example
   * identity_provider
   */
  targetType?: string;
  /**
   * @remarks
   * User identity types
   */
  userIdentityTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      passwordInitialization: 'PasswordInitialization',
      synchronizationScopeConfig: 'SynchronizationScopeConfig',
      targetId: 'TargetId',
      targetType: 'TargetType',
      userIdentityTypes: 'UserIdentityTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      passwordInitialization: 'boolean',
      synchronizationScopeConfig: RunSynchronizationJobRequestSynchronizationScopeConfig,
      targetId: 'string',
      targetType: 'string',
      userIdentityTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.synchronizationScopeConfig && typeof (this.synchronizationScopeConfig as any).validate === 'function') {
      (this.synchronizationScopeConfig as any).validate();
    }
    if(Array.isArray(this.userIdentityTypes)) {
      $dara.Model.validateArray(this.userIdentityTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

