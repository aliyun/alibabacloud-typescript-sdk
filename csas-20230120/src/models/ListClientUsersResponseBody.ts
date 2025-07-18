// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientUsersResponseBodyDataDataListDepartment extends $dara.Model {
  /**
   * @example
   * 105
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

export class ListClientUsersResponseBodyData extends $dara.Model {
  dataList?: ListClientUsersResponseBodyDataDataList[];
  /**
   * @example
   * 2
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListClientUsersResponseBodyDataDataList },
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientUsersResponseBody extends $dara.Model {
  data?: ListClientUsersResponseBodyData;
  /**
   * @example
   * FEF1144C-95D1-5F7C-81EF-9DB70EA49FCE
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
      data: ListClientUsersResponseBodyData,
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

