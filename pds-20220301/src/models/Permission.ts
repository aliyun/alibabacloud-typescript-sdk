// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PermissionActionList } from "./PermissionActionList";
import { PermissionCondition } from "./PermissionCondition";


export class Permission extends $dara.Model {
  actionList?: PermissionActionList[];
  collection?: string;
  condition?: PermissionCondition;
  createdAt?: number;
  effect?: string;
  identityId?: string;
  identityType?: string;
  resource?: string;
  resourceType?: string;
  updatedAt?: number;
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

