// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyDataListAdminList extends $dara.Model {
  /**
   * @remarks
   * The administrator\\"s name.
   * 
   * @example
   * 测试坐席
   */
  displayName?: string;
  /**
   * @remarks
   * Mailbox.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * Agent extension number.
   * 
   * @example
   * 8032****
   */
  extension?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Agent logon name.
   * 
   * @example
   * agent
   */
  loginName?: string;
  /**
   * @remarks
   * The agent\\"s personal phone number.
   * 
   * @example
   * 1382114****
   */
  mobile?: string;
  /**
   * @remarks
   * The role ID, in the format: role\\@instance ID.
   * 
   * @example
   * Admin@ccc-test
   */
  roleId?: string;
  /**
   * @remarks
   * Role name.
   * 
   * @example
   * Admin
   */
  roleName?: string;
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  /**
   * @remarks
   * Work mode.
   * 
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
   * @remarks
   * The number.
   * 
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
  /**
   * @remarks
   * Administrator list.
   */
  adminList?: ListInstancesResponseBodyDataListAdminList[];
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the instance belongs.
   * 
   * @example
   * 157123456789****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The URL of the Cloud Contact Center instance, used to access the homepage of the Cloud Call Center instance. It is composed of the specific Cloud Call Center URL followed by the instance ID.
   * 
   * @example
   * https://ccc-v2.aliyun.com/#/workbench/ccc-test
   */
  consoleUrl?: string;
  /**
   * @remarks
   * The creation time of the instance.
   * 
   * @example
   * 1624679747000
   */
  createTime?: number;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * 云联络中心的测试实例。
   */
  description?: string;
  /**
   * @remarks
   * The domain name of the instance, which is globally unique.
   * 
   * @example
   * ccc-test
   */
  domainName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ccc-test
   */
  id?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * 测试实例
   */
  name?: string;
  /**
   * @remarks
   * The list of numbers.
   */
  numberList?: ListInstancesResponseBodyDataListNumberList[];
  /**
   * @remarks
   * Instance status.
   * 
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
  /**
   * @remarks
   * List.
   */
  list?: ListInstancesResponseBodyDataList[];
  /**
   * @remarks
   * Page number, ranging from 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count.
   * 
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
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: ListInstancesResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
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

