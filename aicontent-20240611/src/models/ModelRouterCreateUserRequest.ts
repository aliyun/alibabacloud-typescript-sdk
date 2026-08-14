// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DepartmentRoleCmd } from "./DepartmentRoleCmd";


export class ModelRouterCreateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The department roles to assign to the user during creation. This parameter is optional.
   * 
   * @example
   * []
   */
  departmentRoles?: DepartmentRoleCmd[];
  /**
   * @remarks
   * The logon name. This parameter is required. The logon name can be the same as the phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * zhangsan
   */
  loginName?: string;
  /**
   * @remarks
   * The name. This parameter is required. The value must be 2 to 20 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * John
   */
  name?: string;
  /**
   * @remarks
   * The phone number. This parameter is required.
   * 
   * @example
   * 13800000000
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      departmentRoles: 'departmentRoles',
      loginName: 'loginName',
      name: 'name',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentRoles: { 'type': 'array', 'itemType': DepartmentRoleCmd },
      loginName: 'string',
      name: 'string',
      phone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.departmentRoles)) {
      $dara.Model.validateArray(this.departmentRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

