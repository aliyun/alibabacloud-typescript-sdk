// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyItems extends $dara.Model {
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
   * 用户拥有的系统角色 code 列表
   * 
   * @example
   * string_value
   */
  roleCodes?: string[];
  /**
   * @remarks
   * 用户ID
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
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 成员列表
   */
  items?: ListUsersResponseBodyItems[];
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 当前页码
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页数量
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * 符合条件的总记录数
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

