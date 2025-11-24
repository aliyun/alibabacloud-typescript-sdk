// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersWithPermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the IDs of all RAM users or RAM roles to which an RBAC role is assigned. Valid values:
   * 
   * *   `SubUser`: Query the IDs of all RAM users to which an RBAC role is assigned.
   * *   `RamRole`: Query the IDs of all RAM roles to which an RBAC role is assigned.
   * 
   * This parameter is required.
   * 
   * @example
   * SubUser
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

