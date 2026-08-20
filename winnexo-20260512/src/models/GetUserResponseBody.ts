// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBody extends $dara.Model {
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
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The display name of the account.
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
   * Indicates whether the account is activated. Valid values:
   *  - **true**: Activated.
   * - **false**: Not activated.
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
   * The status code description.
   * 
   * @example
   * ok
   */
  message?: string;
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
   * The list of system role codes (full replacement, must contain at least one role). Valid values: SUPER_ADMIN, SYSTEM_ADMIN, SEMANTIC_ADMIN, SKILL_ADMIN, KB_ADMIN, AGENT_ADMIN, and APPLICATION_USER.
   * 
   * @example
   * string_value
   */
  roleCodes?: string[];
  /**
   * @remarks
   * The list of user group IDs to which the user belongs.
   * 
   * @example
   * string_value
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The WINNEXO platform user ID.
   * 
   * @example
   * 1
   */
  wnUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      code: 'code',
      displayName: 'displayName',
      gmtCreate: 'gmtCreate',
      isActive: 'isActive',
      lastLoginTime: 'lastLoginTime',
      message: 'message',
      requestId: 'requestId',
      roleCodes: 'roleCodes',
      userGroupIds: 'userGroupIds',
      wnUserId: 'wnUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      code: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      isActive: 'boolean',
      lastLoginTime: 'string',
      message: 'string',
      requestId: 'string',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      wnUserId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roleCodes)) {
      $dara.Model.validateArray(this.roleCodes);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

