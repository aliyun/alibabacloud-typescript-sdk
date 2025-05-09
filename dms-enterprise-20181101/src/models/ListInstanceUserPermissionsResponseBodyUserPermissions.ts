// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermission } from "./ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermission";


export class ListInstanceUserPermissionsResponseBodyUserPermissions extends $dara.Model {
  userPermission?: ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermission[];
  static names(): { [key: string]: string } {
    return {
      userPermission: 'UserPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPermission: { 'type': 'array', 'itemType': ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermission },
    };
  }

  validate() {
    if(Array.isArray(this.userPermission)) {
      $dara.Model.validateArray(this.userPermission);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

