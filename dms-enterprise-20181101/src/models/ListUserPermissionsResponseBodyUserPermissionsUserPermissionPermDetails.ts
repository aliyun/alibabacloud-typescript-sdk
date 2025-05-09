// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail } from "./ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail";


export class ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails extends $dara.Model {
  permDetail?: ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail[];
  static names(): { [key: string]: string } {
    return {
      permDetail: 'PermDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permDetail: { 'type': 'array', 'itemType': ListUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail },
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

