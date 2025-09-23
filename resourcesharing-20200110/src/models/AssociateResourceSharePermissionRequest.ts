// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateResourceSharePermissionRequest extends $dara.Model {
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
   * Specifies whether to use the specified permission to replace an existing permission. Valid values:
   * 
   * *   false: does not use the specified permission to replace an existing permission. This is the default value. If you set the value to false for a resource share that does not have associated permissions, the system associates the specified permission with the resource share. In a resource share, one resource type can have only one permission. If you set the value to false for a resource share that already has a permission for the resource type indicated by the specified permission, the system reports an error. This prevents you from replacing the existing permission by mistake.
   * *   true: uses the specified permission to replace an existing permission of the same resource type.
   * 
   * @example
   * false
   */
  replace?: boolean;
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareId?: string;
  static names(): { [key: string]: string } {
    return {
      permissionName: 'PermissionName',
      replace: 'Replace',
      resourceShareId: 'ResourceShareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionName: 'string',
      replace: 'boolean',
      resourceShareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

