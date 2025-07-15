// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyDataListPersonalOutboundNumberList extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  city?: string;
  /**
   * @example
   * 0830011****
   */
  number?: string;
  province?: string;
  /**
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
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * skillgroup
   */
  skillGroupName?: string;
  /**
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
   * @example
   * 8033****
   */
  deviceExt?: string;
  /**
   * @example
   * ACC-YUNBS-1.0.10-****
   */
  deviceId?: string;
  /**
   * @example
   * OFFLINE
   */
  deviceState?: string;
  /**
   * @example
   * 1001
   */
  displayId?: string;
  displayName?: string;
  /**
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @example
   * 8031****
   */
  extension?: string;
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
  personalOutboundNumberList?: ListUsersResponseBodyDataListPersonalOutboundNumberList[];
  primary?: boolean;
  /**
   * @example
   * false
   */
  primaryAccount?: boolean;
  /**
   * @example
   * 21234502254620****
   */
  ramId?: number;
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
  skillLevelList?: ListUsersResponseBodyDataListSkillLevelList[];
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
  list?: ListUsersResponseBodyDataList[];
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
   * @example
   * OK
   */
  code?: string;
  data?: ListUsersResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
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

