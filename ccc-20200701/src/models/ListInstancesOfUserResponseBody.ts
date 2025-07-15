// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesOfUserResponseBodyDataListAdminList extends $dara.Model {
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

export class ListInstancesOfUserResponseBodyDataListNumberListSkillGroups extends $dara.Model {
  description?: string;
  displayName?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * skillgroup
   */
  name?: string;
  /**
   * @example
   * 1
   */
  phoneNumberCount?: number;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * 2
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      name: 'Name',
      phoneNumberCount: 'PhoneNumberCount',
      skillGroupId: 'SkillGroupId',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      name: 'string',
      phoneNumberCount: 'number',
      skillGroupId: 'string',
      userCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyDataListNumberList extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  city?: string;
  /**
   * @example
   * a3fb6c62-9b49-4942-ae5b-cf2abd4123ek
   */
  contactFlowId?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 0830011****
   */
  number?: string;
  province?: string;
  skillGroups?: ListInstancesOfUserResponseBodyDataListNumberListSkillGroups[];
  /**
   * @example
   * Bidirection
   */
  usage?: string;
  /**
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      city: 'City',
      contactFlowId: 'ContactFlowId',
      instanceId: 'InstanceId',
      number: 'Number',
      province: 'Province',
      skillGroups: 'SkillGroups',
      usage: 'Usage',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      city: 'string',
      contactFlowId: 'string',
      instanceId: 'string',
      number: 'string',
      province: 'string',
      skillGroups: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyDataListNumberListSkillGroups },
      usage: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.skillGroups)) {
      $dara.Model.validateArray(this.skillGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOfUserResponseBodyDataList extends $dara.Model {
  adminList?: ListInstancesOfUserResponseBodyDataListAdminList[];
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
  numberList?: ListInstancesOfUserResponseBodyDataListNumberList[];
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
      adminList: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyDataListAdminList },
      aliyunUid: 'string',
      consoleUrl: 'string',
      description: 'string',
      domainName: 'string',
      id: 'string',
      name: 'string',
      numberList: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyDataListNumberList },
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

export class ListInstancesOfUserResponseBodyData extends $dara.Model {
  list?: ListInstancesOfUserResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyDataList },
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

export class ListInstancesOfUserResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListInstancesOfUserResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 3969FC68-CEC2-4398-B76A-60D2F7EDEBAF
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
      data: ListInstancesOfUserResponseBodyData,
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

