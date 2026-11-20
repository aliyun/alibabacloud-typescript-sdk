// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserDepartmentDTO } from "./UserDepartmentDto";


export class UserListItemDTO extends $dara.Model {
  /**
   * @remarks
   * The list of departments and roles to which the user belongs.
   * 
   * @example
   * []
   */
  departments?: UserDepartmentDTO[];
  /**
   * @remarks
   * The creation time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2026-07-01 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The logon name.
   * 
   * @example
   * zhangsan
   */
  loginName?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Zhang San
   */
  name?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 13800000000
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      departments: 'departments',
      gmtCreate: 'gmtCreate',
      id: 'id',
      loginName: 'loginName',
      name: 'name',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departments: { 'type': 'array', 'itemType': UserDepartmentDTO },
      gmtCreate: 'string',
      id: 'number',
      loginName: 'string',
      name: 'string',
      phone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.departments)) {
      $dara.Model.validateArray(this.departments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

