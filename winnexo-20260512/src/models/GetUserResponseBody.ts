// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * WINNEXO 登录账号
   * 
   * @example
   * exampleAccountId
   */
  accountId?: string;
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
   * 用户显示名称
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * 加入租户时间
   * 
   * @example
   * string_value
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 启用/停用状态
   * 
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @remarks
   * 最后登录时间
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  lastLoginTime?: string;
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
   * 用户拥有的系统角色 code 列表
   * 
   * @example
   * string_value
   */
  roleCodes?: string[];
  /**
   * @remarks
   * 用户所属用户组ID列表
   * 
   * @example
   * string_value
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * WINNEXO 平台用户ID
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

