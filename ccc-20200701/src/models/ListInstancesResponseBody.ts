// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyDataListAdminList extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 8032****
   */
  extension?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * agent
   */
  loginName?: string;
  /**
   * @example
   * 1382114****
   */
  mobile?: string;
  /**
   * @example
   * Admin@ccc-test
   */
  roleId?: string;
  /**
   * @example
   * Admin
   */
  roleName?: string;
  /**
   * @example
   * agent@ccc-test
   */
  userId?: string;
  /**
   * @example
   * ON_SITE
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      email: 'Email',
      extension: 'Extension',
      instanceId: 'InstanceId',
      loginName: 'LoginName',
      mobile: 'Mobile',
      roleId: 'RoleId',
      roleName: 'RoleName',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      email: 'string',
      extension: 'string',
      instanceId: 'string',
      loginName: 'string',
      mobile: 'string',
      roleId: 'string',
      roleName: 'string',
      userId: 'string',
      workMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyDataListNumberList extends $dara.Model {
  /**
   * @example
   * 0830011****
   */
  number?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyDataList extends $dara.Model {
  adminList?: ListInstancesResponseBodyDataListAdminList[];
  /**
   * @example
   * 157123456789****
   */
  aliyunUid?: string;
  /**
   * @example
   * https://ccc-v2.aliyun.com/#/workbench/ccc-test
   */
  consoleUrl?: string;
  /**
   * @example
   * 1624679747000
   */
  createTime?: number;
  description?: string;
  /**
   * @example
   * ccc-test
   */
  domainName?: string;
  /**
   * @example
   * ccc-test
   */
  id?: string;
  name?: string;
  numberList?: ListInstancesResponseBodyDataListNumberList[];
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      adminList: 'AdminList',
      aliyunUid: 'AliyunUid',
      consoleUrl: 'ConsoleUrl',
      createTime: 'CreateTime',
      description: 'Description',
      domainName: 'DomainName',
      id: 'Id',
      name: 'Name',
      numberList: 'NumberList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminList: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataListAdminList },
      aliyunUid: 'string',
      consoleUrl: 'string',
      createTime: 'number',
      description: 'string',
      domainName: 'string',
      id: 'string',
      name: 'string',
      numberList: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataListNumberList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adminList)) {
      $dara.Model.validateArray(this.adminList);
    }
    if(Array.isArray(this.numberList)) {
      $dara.Model.validateArray(this.numberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyData extends $dara.Model {
  list?: ListInstancesResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListInstancesResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 26A34338-5CD9-4C95-A7A6-5BDCE76C6B94
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListInstancesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

