// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Identity } from "./Identity";


export class FilePermissionMember extends $dara.Model {
  actionList?: string[];
  disinheritSubGroup?: boolean;
  expireTime?: number;
  identity?: Identity;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      actionList: 'action_list',
      disinheritSubGroup: 'disinherit_sub_group',
      expireTime: 'expire_time',
      identity: 'identity',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: { 'type': 'array', 'itemType': 'string' },
      disinheritSubGroup: 'boolean',
      expireTime: 'number',
      identity: Identity,
      roleId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionList)) {
      $dara.Model.validateArray(this.actionList);
    }
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

