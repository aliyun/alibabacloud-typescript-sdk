// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBodyUserRoleIdList extends $dara.Model {
  roleIds?: number[];
  static names(): { [key: string]: string } {
    return {
      roleIds: 'RoleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.roleIds)) {
      $dara.Model.validateArray(this.roleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

