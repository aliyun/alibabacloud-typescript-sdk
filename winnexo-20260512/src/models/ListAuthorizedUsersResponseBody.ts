// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUsersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The authorization expiration timestamp in milliseconds. If not specified, the authorization never expires.
   * 
   * @example
   * 1
   */
  expireDate?: number;
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
   * The last update time.
   * 
   * @example
   * string_value
   */
  gmtModified?: string;
  /**
   * @remarks
   * The user ID of the person who granted the authorization.
   * 
   * @example
   * 1
   */
  grantedBy?: number;
  /**
   * @remarks
   * The ID of the authorized object.
   * 
   * @example
   * exampleGranteeId
   */
  granteeId?: string;
  /**
   * @remarks
   * The authorization object type. Valid values: USER, USER_GROUP.
   * 
   * @example
   * string_value
   */
  granteeType?: string;
  /**
   * @remarks
   * The Operation logs ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The number of members.
   * 
   * @example
   * 1
   */
  memberCount?: number;
  /**
   * @remarks
   * The permission member type. Valid values:
   * 
   * - **ORG**: Enterprise.
   * 
   * - **DEPT**: Department.
   * 
   * - **TAG**: Custom tag.
   * 
   * - **CONVERSATION**: Conversation.
   * 
   * - **USER**: User.
   * 
   * @example
   * string_value
   */
  permissions?: string[];
  /**
   * @remarks
   * The user group ID. This parameter has a value only when granteeType is set to USER_GROUP.
   * 
   * @example
   * exampleUserGroupId
   */
  userGroupId?: string;
  /**
   * @remarks
   * The user group name.
   * 
   * @example
   * string_value
   */
  userGroupName?: string;
  /**
   * @remarks
   * The user ID. This parameter has a value only when granteeType is set to USER.
   * 
   * @example
   * 1
   */
  userId?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * string_value
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      expireDate: 'expireDate',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      grantedBy: 'grantedBy',
      granteeId: 'granteeId',
      granteeType: 'granteeType',
      id: 'id',
      memberCount: 'memberCount',
      permissions: 'permissions',
      userGroupId: 'userGroupId',
      userGroupName: 'userGroupName',
      userId: 'userId',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireDate: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      grantedBy: 'number',
      granteeId: 'string',
      granteeType: 'string',
      id: 'number',
      memberCount: 'number',
      permissions: { 'type': 'array', 'itemType': 'string' },
      userGroupId: 'string',
      userGroupName: 'string',
      userId: 'number',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizedUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authentication mode.
   * 
   * @example
   * string_value
   */
  authMode?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details.
   */
  items?: ListAuthorizedUsersResponseBodyItems[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * successful
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
   * The total number of records.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      authMode: 'authMode',
      code: 'code',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMode: 'string',
      code: 'string',
      items: { 'type': 'array', 'itemType': ListAuthorizedUsersResponseBodyItems },
      message: 'string',
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

