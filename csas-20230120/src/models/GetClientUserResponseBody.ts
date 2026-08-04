// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientUserResponseBodyDataDepartment extends $dara.Model {
  /**
   * @remarks
   * Department ID.
   * 
   * @example
   * 107
   */
  id?: string;
  /**
   * @remarks
   * Department name.
   * 
   * @example
   * 示例部门
   */
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
  /**
   * @remarks
   * Department to which the user belongs.
   */
  department?: GetClientUserResponseBodyDataDepartment;
  /**
   * @remarks
   * Department ID.
   * 
   * @example
   * 10713
   */
  departmentId?: string;
  /**
   * @remarks
   * User description.
   * 
   * @example
   * 示例用户
   */
  description?: string;
  /**
   * @remarks
   * Email address.
   * 
   * @example
   * johndoe@example.com
   */
  email?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 83
   */
  id?: string;
  /**
   * @remarks
   * ID of the custom identity source configuration.
   * 
   * @example
   * idp-cfg68956d86e********
   */
  idpConfigId?: string;
  /**
   * @remarks
   * Mobile phone number without country code.
   * 
   * @example
   * 1364196****
   */
  mobileNumber?: string;
  /**
   * @remarks
   * User status. Valid values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @remarks
   * Unique identifier of the user.
   * 
   * @example
   * su_abcd7215****
   */
  userId?: string;
  /**
   * @remarks
   * Username.
   * 
   * @example
   * 张三
   */
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
  /**
   * @remarks
   * User details.
   */
  data?: GetClientUserResponseBodyData;
  /**
   * @remarks
   * ID of this request.
   * 
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

