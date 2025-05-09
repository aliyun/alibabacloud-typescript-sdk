// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail } from "./ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail";


export class ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetails extends $dara.Model {
  permDetail?: ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail[];
  static names(): { [key: string]: string } {
    return {
      permDetail: 'PermDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permDetail: { 'type': 'array', 'itemType': ListDatabaseUserPermssionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail },
    };
  }

  validate() {
    if(Array.isArray(this.permDetail)) {
      $dara.Model.validateArray(this.permDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

