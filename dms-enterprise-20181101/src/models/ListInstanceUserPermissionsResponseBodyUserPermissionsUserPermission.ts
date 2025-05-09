// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails } from "./ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails";


export class ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermission extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 174****
   */
  instanceId?: string;
  /**
   * @remarks
   * The details of permissions.
   */
  permDetails?: ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 51****
   */
  userId?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * test_nick_name
   */
  userNickName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      permDetails: 'PermDetails',
      userId: 'UserId',
      userNickName: 'UserNickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      permDetails: ListInstanceUserPermissionsResponseBodyUserPermissionsUserPermissionPermDetails,
      userId: 'string',
      userNickName: 'string',
    };
  }

  validate() {
    if(this.permDetails && typeof (this.permDetails as any).validate === 'function') {
      (this.permDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

