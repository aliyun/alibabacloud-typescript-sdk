// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUsersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 授权截止时间戳（毫秒）
   * 
   * @example
   * 1
   */
  expireDate?: number;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * string_value
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 最后修改时间
   * 
   * @example
   * string_value
   */
  gmtModified?: string;
  /**
   * @remarks
   * 授权人用户 ID
   * 
   * @example
   * 1
   */
  grantedBy?: number;
  /**
   * @remarks
   * 被授权对象 ID
   * 
   * @example
   * exampleGranteeId
   */
  granteeId?: string;
  /**
   * @remarks
   * 被授权对象类型：USER / USER_GROUP
   * 
   * @example
   * string_value
   */
  granteeType?: string;
  /**
   * @remarks
   * 授权记录 ID
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * 用户组成员数
   * 
   * @example
   * 1
   */
  memberCount?: number;
  /**
   * @remarks
   * 已授权的权限列表
   * 
   * @example
   * string_value
   */
  permissions?: string[];
  /**
   * @remarks
   * 用户组 ID（granteeType=USER_GROUP 时有值）
   * 
   * @example
   * exampleUserGroupId
   */
  userGroupId?: string;
  /**
   * @remarks
   * 用户组名
   * 
   * @example
   * string_value
   */
  userGroupName?: string;
  /**
   * @remarks
   * 用户 ID（granteeType=USER 时有值）
   * 
   * @example
   * 1
   */
  userId?: number;
  /**
   * @remarks
   * 用户名
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
   * 授权模式：SPECIFIED_USERS / ALL_USERS
   * 
   * @example
   * string_value
   */
  authMode?: string;
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 已授权对象列表
   */
  items?: ListAuthorizedUsersResponseBodyItems[];
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 授权记录总数
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

