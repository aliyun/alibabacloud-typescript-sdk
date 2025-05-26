// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountAllPrivilegesResponseBodyDataResultPrivilegeObject } from "./DescribeAccountAllPrivilegesResponseBodyDataResultPrivilegeObject";


export class DescribeAccountAllPrivilegesResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The objects on which the permission takes effect, including databases, tables, and columns. If Global is returned for the PrivilegeType parameter, an empty string is returned for this parameter.
   */
  privilegeObject?: DescribeAccountAllPrivilegesResponseBodyDataResultPrivilegeObject;
  /**
   * @remarks
   * The permission level of the database account. You can call the `DescribeEnabledPrivileges` operation to query the permission level of the database account.
   * 
   * @example
   * Global
   */
  privilegeType?: string;
  /**
   * @remarks
   * The name of the permission, which is the same as the permission name returned by the `DescribeEnabledPrivileges` operation.
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
      privilegeObject: DescribeAccountAllPrivilegesResponseBodyDataResultPrivilegeObject,
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

