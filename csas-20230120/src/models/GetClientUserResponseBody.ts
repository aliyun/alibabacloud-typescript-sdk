// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientUserResponseBodyDataDepartment extends $dara.Model {
  /**
   * @example
   * 107
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientUserResponseBodyData extends $dara.Model {
  department?: GetClientUserResponseBodyDataDepartment;
  /**
   * @example
   * 10713
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
   * 83
   */
  id?: string;
  /**
   * @example
   * 598
   */
  idpConfigId?: string;
  /**
   * @example
   * 13641966835
   */
  mobileNumber?: string;
  /**
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @example
   * su_abcd7215****
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
      department: GetClientUserResponseBodyDataDepartment,
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

export class GetClientUserResponseBody extends $dara.Model {
  data?: GetClientUserResponseBodyData;
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetClientUserResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

