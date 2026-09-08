// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyDataAdminList extends $dara.Model {
  /**
   * @remarks
   * The name of the administrator.
   * 
   * @example
   * 管理员
   */
  displayName?: string;
  /**
   * @remarks
   * The mailbox.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The agent\\"s extension number.
   * 
   * @example
   * 8032****
   */
  extension?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The agent\\"s logon name.
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
   * The role ID. The format is: Role\\@Instance ID.
   * 
   * @example
   * Admin@ccc-test
   */
  roleId?: string;
  /**
   * @remarks
   * The role name.
   * 
   * @example
   * Admin
   */
  roleName?: string;
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  /**
   * @remarks
   * The work mode.
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

export class GetInstanceResponseBodyDataChatbotBusinessUnit extends $dara.Model {
  unitId?: number;
  unitKey?: string;
  static names(): { [key: string]: string } {
    return {
      unitId: 'UnitId',
      unitKey: 'UnitKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unitId: 'number',
      unitKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataNumberListSkillGroups extends $dara.Model {
  /**
   * @remarks
   * The description of the skill group.
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
   * The instance ID.
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
   * The number of phone numbers associated with the skill group.
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
   * 3
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

export class GetInstanceResponseBodyDataNumberList extends $dara.Model {
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
   * The city where the number is registered.
   * 
   * @example
   * 乐山
   */
  city?: string;
  /**
   * @remarks
   * The ID of the contact flow (IVR) associated with the phone number.
   * 
   * @example
   * 2ec7a58f-3243-4815-bb21-97b480b95f5e
   */
  contactFlowId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 0830011****
   */
  number?: string;
  /**
   * @remarks
   * The province where the number is registered.
   * 
   * @example
   * 四川
   */
  province?: string;
  /**
   * @remarks
   * The list of skill groups associated with the number.
   */
  skillGroups?: GetInstanceResponseBodyDataNumberListSkillGroups[];
  /**
   * @remarks
   * The purpose of the number.
   * 
   * @example
   * Bidirection
   */
  usage?: string;
  /**
   * @remarks
   * The agent ID. If this parameter is not empty, the number is a personal outbound number for the agent.
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
      skillGroups: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataNumberListSkillGroups },
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

export class GetInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of administrators.
   */
  adminList?: GetInstanceResponseBodyDataAdminList[];
  agentType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the instance belongs.
   * 
   * @example
   * 157123456789****
   */
  aliyunUid?: string;
  chatbotBusinessUnit?: GetInstanceResponseBodyDataChatbotBusinessUnit;
  /**
   * @remarks
   * The URL of the Cloud Contact Center instance homepage. This URL is formed by combining the base URL of Cloud Contact Center and the instance ID.
   * 
   * @example
   * https://ccc-v2.aliyun.com/#/workbench/ccc-test
   */
  consoleUrl?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * 云联络中心的测试实例。
   */
  description?: string;
  /**
   * @remarks
   * The domain name of the instance. It is globally unique.
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
  numberList?: GetInstanceResponseBodyDataNumberList[];
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      adminList: 'AdminList',
      agentType: 'AgentType',
      aliyunUid: 'AliyunUid',
      chatbotBusinessUnit: 'ChatbotBusinessUnit',
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
      adminList: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataAdminList },
      agentType: 'string',
      aliyunUid: 'string',
      chatbotBusinessUnit: GetInstanceResponseBodyDataChatbotBusinessUnit,
      consoleUrl: 'string',
      description: 'string',
      domainName: 'string',
      id: 'string',
      name: 'string',
      numberList: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataNumberList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adminList)) {
      $dara.Model.validateArray(this.adminList);
    }
    if(this.chatbotBusinessUnit && typeof (this.chatbotBusinessUnit as any).validate === 'function') {
      (this.chatbotBusinessUnit as any).validate();
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

export class GetInstanceResponseBody extends $dara.Model {
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
   * The data.
   */
  data?: GetInstanceResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2778FA12-EDD6-42AA-9B15-AF855072E5E5
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
      data: GetInstanceResponseBodyData,
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

