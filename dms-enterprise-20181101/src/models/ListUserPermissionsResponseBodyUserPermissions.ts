// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserPermissionsResponseBodyUserPermissionsUserPermission } from "./ListUserPermissionsResponseBodyUserPermissionsUserPermission";


export class ListUserPermissionsResponseBodyUserPermissions extends $dara.Model {
  userPermission?: ListUserPermissionsResponseBodyUserPermissionsUserPermission[];
  static names(): { [key: string]: string } {
    return {
      userPermission: 'UserPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPermission: { 'type': 'array', 'itemType': ListUserPermissionsResponseBodyUserPermissionsUserPermission },
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

