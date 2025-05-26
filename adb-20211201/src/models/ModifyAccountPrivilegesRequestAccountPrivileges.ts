// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyAccountPrivilegesRequestAccountPrivilegesPrivilegeObject } from "./ModifyAccountPrivilegesRequestAccountPrivilegesPrivilegeObject";


export class ModifyAccountPrivilegesRequestAccountPrivileges extends $dara.Model {
  /**
   * @remarks
   * The objects on which you want to grant permissions, including databases, tables, and columns.
   */
  privilegeObject?: ModifyAccountPrivilegesRequestAccountPrivilegesPrivilegeObject;
  /**
   * @remarks
   * The permission level that you want to assign to the database account. You can call the `DescribeEnabledPrivileges` operation to query the permission level that can be assigned to the database account.
   * 
   * @example
   * Global
   */
  privilegeType?: string;
  /**
   * @remarks
   * The permissions that you want to grant to the database account.
   */
  privileges?: string[];
  static names(): { [key: string]: string } {
    return {
      privilegeObject: 'PrivilegeObject',
      privilegeType: 'PrivilegeType',
      privileges: 'Privileges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privilegeObject: ModifyAccountPrivilegesRequestAccountPrivilegesPrivilegeObject,
      privilegeType: 'string',
      privileges: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.privilegeObject && typeof (this.privilegeObject as any).validate === 'function') {
      (this.privilegeObject as any).validate();
    }
    if(Array.isArray(this.privileges)) {
      $dara.Model.validateArray(this.privileges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

