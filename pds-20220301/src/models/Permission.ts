// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PermissionCondition } from "./PermissionCondition";


export class PermissionActionList extends $dara.Model {
  /**
   * @remarks
   * Specific action, such as FILE.ALL
   * 
   * @example
   * FILE.ALL
   */
  action?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Permission extends $dara.Model {
  /**
   * @remarks
   * Action list.
   */
  actionList?: PermissionActionList[];
  /**
   * @remarks
   * The permission set. Set this parameter to global for global permissions. In other scenarios, this parameter is empty by default.
   * 
   * @example
   * global
   */
  collection?: string;
  /**
   * @remarks
   * Condition
   */
  condition?: PermissionCondition;
  /**
   * @remarks
   * The creation time in the millisecond timestamp format.
   * 
   * @example
   * 1703648502811
   */
  createdAt?: number;
  /**
   * @remarks
   * Effect. Valid values: allow, deny.
   * 
   * @example
   * deny
   */
  effect?: string;
  /**
   * @remarks
   * Identity ID.
   * 
   * @example
   * af22***
   */
  identityId?: string;
  /**
   * @remarks
   * Identity type. Valid values: IT_User, IT_Group, IT_Role.
   * 
   * @example
   * IT_User
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * fa212***
   */
  resource?: string;
  /**
   * @remarks
   * The type of the resource. The file type resource is RT_File.
   * 
   * @example
   * RT_File
   */
  resourceType?: string;
  /**
   * @remarks
   * The time when the modification was made. The value is a millisecond timestamp.
   * 
   * @example
   * 1703648502811
   */
  updatedAt?: number;
  /**
   * @remarks
   * Custom tag.
   */
  userTags?: string[];
  static names(): { [key: string]: string } {
    return {
      actionList: 'action_list',
      collection: 'collection',
      condition: 'condition',
      createdAt: 'created_at',
      effect: 'effect',
      identityId: 'identity_id',
      identityType: 'identity_type',
      resource: 'resource',
      resourceType: 'resource_type',
      updatedAt: 'updated_at',
      userTags: 'user_tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: { 'type': 'array', 'itemType': PermissionActionList },
      collection: 'string',
      condition: PermissionCondition,
      createdAt: 'number',
      effect: 'string',
      identityId: 'string',
      identityType: 'string',
      resource: 'string',
      resourceType: 'string',
      updatedAt: 'number',
      userTags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.actionList)) {
      $dara.Model.validateArray(this.actionList);
    }
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    if(Array.isArray(this.userTags)) {
      $dara.Model.validateArray(this.userTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

