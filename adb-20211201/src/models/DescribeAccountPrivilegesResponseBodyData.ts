// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountPrivilegesResponseBodyDataPrivilegeObject } from "./DescribeAccountPrivilegesResponseBodyDataPrivilegeObject";


export class DescribeAccountPrivilegesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The objects on which the permission takes effect, including databases, tables, columns, and additional descriptions.
   */
  privilegeObject?: DescribeAccountPrivilegesResponseBodyDataPrivilegeObject;
  /**
   * @remarks
   * The permission level of the permission. Valid values: `Global`, `Database`, `Table`, and `Column`. You can call the `DescribeEnabledPrivileges` parameter to query the permission level of a specific permission.
   * 
   * @example
   * Column
   */
  privilegeType?: string;
  /**
   * @remarks
   * The name of the permission. You can call the `DescribeEnabledPrivileges` operation to query the name of the permission.
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
      privilegeObject: DescribeAccountPrivilegesResponseBodyDataPrivilegeObject,
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

