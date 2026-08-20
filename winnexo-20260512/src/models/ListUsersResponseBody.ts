// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * exampleAccountId
   */
  accountId?: string;
  /**
   * @remarks
   * The display name of the tool.
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * string_value
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Indicates whether the account is activated:
   * 
   * - 1: Activated.
   * - 0: Not activated.
   * 
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @remarks
   * The last logon time.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  lastLoginTime?: string;
  /**
   * @remarks
   * The list of new system role codes (full replacement, at least one role must be included). Valid values: SUPER_ADMIN / SYSTEM_ADMIN / SEMANTIC_ADMIN / SKILL_ADMIN / KB_ADMIN / AGENT_ADMIN / APPLICATION_USER.
   * 
   * @example
   * string_value
   */
  roleCodes?: string[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      displayName: 'displayName',
      gmtCreate: 'gmtCreate',
      isActive: 'isActive',
      lastLoginTime: 'lastLoginTime',
      roleCodes: 'roleCodes',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      isActive: 'boolean',
      lastLoginTime: 'string',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.roleCodes)) {
      $dara.Model.validateArray(this.roleCodes);
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
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The user information.
   */
  items?: ListUsersResponseBodyItems[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data entries in the project.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListUsersResponseBodyItems },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

