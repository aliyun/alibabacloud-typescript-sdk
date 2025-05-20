// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Permission } from "./Permission";


export class IDPermission extends $dara.Model {
  disinheritSubGroup?: boolean;
  expireTime?: number;
  /**
   * **if can be null:**
   * false
   */
  permission?: Permission;
  roles?: string[];
  static names(): { [key: string]: string } {
    return {
      disinheritSubGroup: 'disinherit_sub_group',
      expireTime: 'expire_time',
      permission: 'permission',
      roles: 'roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disinheritSubGroup: 'boolean',
      expireTime: 'number',
      permission: Permission,
      roles: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.permission && typeof (this.permission as any).validate === 'function') {
      (this.permission as any).validate();
    }
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

