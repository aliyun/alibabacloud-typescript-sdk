// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermission } from "./ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermission";


export class ListDatabaseUserPermssionsResponseBodyUserPermissions extends $dara.Model {
  userPermission?: ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermission[];
  static names(): { [key: string]: string } {
    return {
      userPermission: 'UserPermission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userPermission: { 'type': 'array', 'itemType': ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermission },
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

