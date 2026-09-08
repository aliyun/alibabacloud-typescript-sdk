// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyDataListPersonalOutboundNumberList extends $dara.Model {
  /**
   * @remarks
   * Whether the number is active.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * City where the number is registered.
   * 
   * @example
   * 乐山
   */
  city?: string;
  /**
   * @remarks
   * Number.
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
   * Usage of the number.
   * 
   * @example
   * Bidirection
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      city: 'City',
      number: 'Number',
      province: 'Province',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      city: 'string',
      number: 'string',
      province: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataListSkillLevelList extends $dara.Model {
  /**
   * @remarks
   * The ID of the skill group.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * The name of the skill group.
   * 
   * @example
   * skillgroup
   */
  skillGroupName?: string;
  /**
   * @remarks
   * The skill level.
   * 
   * @example
   * 5
   */
  skillLevel?: number;
  static names(): { [key: string]: string } {
    return {
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      skillLevel: 'SkillLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillGroupId: 'string',
      skillGroupName: 'string',
      skillLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * SIP phone extension number. If the agent has registered a SIP phone, this parameter is the extension number of the SIP phone device.
   * 
   * @example
   * 8033****
   */
  deviceExt?: string;
  /**
   * @remarks
   * Device ID, which is the identity of a browser-based Web Real-Time Communication (WebRTC) softphone or a physical phone device. Only one type of device can be registered at a time.
   * 
   * @example
   * ACC-YUNBS-1.0.10-****
   */
  deviceId?: string;
  /**
   * @remarks
   * The status of the SIP phone device. If no SIP phone is registered, the status is UNREGISTERED (Unregistered). If a SIP phone is registered but offline, the status is OFFLINE (Offline). If a SIP phone is registered and online, the status is ONLINE (Online).
   * 
   * @example
   * OFFLINE
   */
  deviceState?: string;
  /**
   * @remarks
   * The agent\\"s employee ID.
   * 
   * @example
   * 1001
   */
  displayId?: string;
  /**
   * @remarks
   * Agent display name.
   * 
   * @example
   * 坐席小王
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
   * The landline extension number.
   * 
   * @example
   * 8031****
   */
  extension?: string;
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
   * List of personal outbound numbers for the agent.
   */
  personalOutboundNumberList?: ListUsersResponseBodyDataListPersonalOutboundNumberList[];
  /**
   * @remarks
   * Indicates whether the RAM account mapped to the agent is a RAM root account.
   */
  primary?: boolean;
  /**
   * @remarks
   * Indicates whether the RAM account mapped to the agent is a RAM primary account.
   * 
   * @example
   * 已弃用，请使用Primary代替此参数。
   */
  primaryAccount?: boolean;
  /**
   * @remarks
   * The UID of the Resource Access Management (RAM) user associated with the agent.
   * 
   * @example
   * 21234502254620****
   */
  ramId?: number;
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
   * The role name.
   * 
   * @example
   * Admin
   */
  roleName?: string;
  /**
   * @remarks
   * The list of skill group levels associated with the agent.
   */
  skillLevelList?: ListUsersResponseBodyDataListSkillLevelList[];
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
      deviceExt: 'DeviceExt',
      deviceId: 'DeviceId',
      deviceState: 'DeviceState',
      displayId: 'DisplayId',
      displayName: 'DisplayName',
      email: 'Email',
      extension: 'Extension',
      loginName: 'LoginName',
      mobile: 'Mobile',
      personalOutboundNumberList: 'PersonalOutboundNumberList',
      primary: 'Primary',
      primaryAccount: 'PrimaryAccount',
      ramId: 'RamId',
      roleId: 'RoleId',
      roleName: 'RoleName',
      skillLevelList: 'SkillLevelList',
      userId: 'UserId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceExt: 'string',
      deviceId: 'string',
      deviceState: 'string',
      displayId: 'string',
      displayName: 'string',
      email: 'string',
      extension: 'string',
      loginName: 'string',
      mobile: 'string',
      personalOutboundNumberList: { 'type': 'array', 'itemType': ListUsersResponseBodyDataListPersonalOutboundNumberList },
      primary: 'boolean',
      primaryAccount: 'boolean',
      ramId: 'number',
      roleId: 'string',
      roleName: 'string',
      skillLevelList: { 'type': 'array', 'itemType': ListUsersResponseBodyDataListSkillLevelList },
      userId: 'string',
      workMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.personalOutboundNumberList)) {
      $dara.Model.validateArray(this.personalOutboundNumberList);
    }
    if(Array.isArray(this.skillLevelList)) {
      $dara.Model.validateArray(this.skillLevelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Agent list.
   */
  list?: ListUsersResponseBodyDataList[];
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
   * 1
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
      list: { 'type': 'array', 'itemType': ListUsersResponseBodyDataList },
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

export class ListUsersResponseBody extends $dara.Model {
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
  data?: ListUsersResponseBodyData;
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
   * Response parameters.
   */
  params?: string[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListUsersResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

