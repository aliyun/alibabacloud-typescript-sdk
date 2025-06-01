// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClientUsersResponseBodyDataDataListDepartment } from "./ListClientUsersResponseBodyDataDataListDepartment";


export class ListClientUsersResponseBodyDataDataList extends $dara.Model {
  department?: ListClientUsersResponseBodyDataDataListDepartment;
  /**
   * @example
   * 10800
   */
  departmentId?: string;
  description?: string;
  /**
   * @example
   * johndoe@example.com
   */
  email?: string;
  /**
   * @example
   * 1970
   */
  id?: string;
  /**
   * @example
   * 1026
   */
  idpConfigId?: string;
  /**
   * @example
   * 15800820468
   */
  mobileNumber?: string;
  /**
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @example
   * su_dead7216****
   */
  userId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      departmentId: 'DepartmentId',
      description: 'Description',
      email: 'Email',
      id: 'Id',
      idpConfigId: 'IdpConfigId',
      mobileNumber: 'MobileNumber',
      status: 'Status',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: ListClientUsersResponseBodyDataDataListDepartment,
      departmentId: 'string',
      description: 'string',
      email: 'string',
      id: 'string',
      idpConfigId: 'string',
      mobileNumber: 'string',
      status: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  validate() {
    if(this.department && typeof (this.department as any).validate === 'function') {
      (this.department as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

