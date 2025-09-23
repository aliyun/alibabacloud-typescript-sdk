// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission.
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunRSDefaultPermissionVSwitch
   */
  permissionName?: string;
  /**
   * @remarks
   * The version of the permission.
   * 
   * @example
   * v1
   */
  permissionVersion?: string;
  static names(): { [key: string]: string } {
    return {
      permissionName: 'PermissionName',
      permissionVersion: 'PermissionVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionName: 'string',
      permissionVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

