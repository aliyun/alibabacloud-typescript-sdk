// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail } from "./ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail";


export class ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails extends $dara.Model {
  permDetail?: ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail[];
  static names(): { [key: string]: string } {
    return {
      permDetail: 'PermDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permDetail: { 'type': 'array', 'itemType': ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetailsPermDetail },
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

