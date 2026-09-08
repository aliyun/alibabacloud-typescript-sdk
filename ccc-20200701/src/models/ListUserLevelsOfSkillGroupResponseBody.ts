// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserLevelsOfSkillGroupResponseBodyDataList extends $dara.Model {
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
   * Agent logon name.
   * 
   * @example
   * agent
   */
  loginName?: string;
  /**
   * @remarks
   * The user\\"s Resource Access Management (RAM) account.
   * 
   * @example
   * 28036411123456****
   */
  ramId?: string;
  /**
   * @remarks
   * Role ID, in the format: role\\@instance ID.
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
   * Skill group ID.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * Skill group Name.
   * 
   * @example
   * skillgroup
   */
  skillGroupName?: string;
  /**
   * @remarks
   * Agent skill Level.
   * 
   * @example
   * 5
   */
  skillLevel?: number;
  /**
   * @remarks
   * Agent ID.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      loginName: 'LoginName',
      ramId: 'RamId',
      roleId: 'RoleId',
      roleName: 'RoleName',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      skillLevel: 'SkillLevel',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      loginName: 'string',
      ramId: 'string',
      roleId: 'string',
      roleName: 'string',
      skillGroupId: 'string',
      skillGroupName: 'string',
      skillLevel: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserLevelsOfSkillGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of skill levels.
   */
  list?: ListUserLevelsOfSkillGroupResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': ListUserLevelsOfSkillGroupResponseBodyDataList },
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

export class ListUserLevelsOfSkillGroupResponseBody extends $dara.Model {
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
  data?: ListUserLevelsOfSkillGroupResponseBodyData;
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
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
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
      data: ListUserLevelsOfSkillGroupResponseBodyData,
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

