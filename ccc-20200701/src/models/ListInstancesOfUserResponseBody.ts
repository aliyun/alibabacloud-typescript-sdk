// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesOfUserResponseBodyDataListAdminList extends $dara.Model {
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

export class ListInstancesOfUserResponseBodyDataListNumberListSkillGroups extends $dara.Model {
  /**
   * @remarks
   * Skill group description.
   * 
   * @example
   * 云联络中心的测试技能组。
   */
  description?: string;
  /**
   * @remarks
   * The display name of the skill group.
   * 
   * @example
   * 测试技能组
   */
  displayName?: string;
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
   * The name of the skill group.
   * 
   * @example
   * skillgroup
   */
  name?: string;
  /**
   * @remarks
   * Number of phone numbers associated with the skill group.
   * 
   * @example
   * 1
   */
  phoneNumberCount?: number;
  /**
   * @remarks
   * The skill group ID.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * The number of agents associated with the skill group.
   * 
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
   * @remarks
   * Indicates whether the number is active.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The city of the phone number\\"s registration location.
   * 
   * @example
   * 乐山
   */
  city?: string;
  /**
   * @remarks
   * The contact flow ID (IVR) associated with this phone number.
   * 
   * @example
   * a3fb6c62-9b49-4942-ae5b-cf2abd4123ek
   */
  contactFlowId?: string;
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
   * The number.
   * 
   * @example
   * 0830011****
   */
  number?: string;
  /**
   * @remarks
   * The province of the phone number\\"s registration location.
   * 
   * @example
   * 四川
   */
  province?: string;
  /**
   * @remarks
   * List of skill groups associated with the phone number.
   */
  skillGroups?: ListInstancesOfUserResponseBodyDataListNumberListSkillGroups[];
  /**
   * @remarks
   * The usage of the number.
   * 
   * @example
   * Bidirection
   */
  usage?: string;
  /**
   * @remarks
   * Agent ID. If this parameter is not empty, the number is a personal outbound number assigned to the agent.
   * 
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
  /**
   * @remarks
   * Administrator list.
   */
  adminList?: ListInstancesOfUserResponseBodyDataListAdminList[];
  /**
   * @remarks
   * The Alibaba Cloud Account ID to which the instance belongs.
   * 
   * @example
   * 157123456789****
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The URL of the Cloud Contact Center instance, used to access the homepage of the Cloud Contact Center instance. It consists of the specific Cloud Contact Center URL followed by the instance ID.
   * 
   * @example
   * https://ccc-v2.aliyun.com/#/workbench/ccc-test
   */
  consoleUrl?: string;
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
   * List of numbers.
   */
  numberList?: ListInstancesOfUserResponseBodyDataListNumberList[];
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
  /**
   * @remarks
   * List.
   */
  list?: ListInstancesOfUserResponseBodyDataList[];
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
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: ListInstancesOfUserResponseBodyData;
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

