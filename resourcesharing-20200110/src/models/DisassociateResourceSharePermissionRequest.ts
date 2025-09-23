// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociateResourceSharePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission. For more information, see [Permission library](https://help.aliyun.com/document_detail/465474.html).
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunRSDefaultPermissionVSwitch
   */
  permissionName?: string;
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
      resourceShareId: 'ResourceShareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionName: 'string',
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

