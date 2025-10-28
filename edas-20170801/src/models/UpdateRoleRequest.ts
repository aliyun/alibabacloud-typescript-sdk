// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The set of permissions to be granted to the role. The value is in the format of `Permission group ID 1:Permission serial number 1;...;Permission group ID n:Permission serial number n`. Example: `1:1;1:2;2:1;2:2`. For more information about permission groups and permission serial numbers, see [ListAuthority](https://help.aliyun.com/document_detail/149409.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 15:1
   */
  actionData?: string;
  /**
   * @remarks
   * The ID of the role. You can call the ListRole operation to query the role IDs. For more information, see [ListRole](https://help.aliyun.com/document_detail/149410.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 32371
   */
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      actionData: 'ActionData',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionData: 'string',
      roleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

