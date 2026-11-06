// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollaborationGroupMembersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 成员显示名称；未设置时为空。
   * 
   * @example
   * TEST001
   */
  displayName?: string;
  /**
   * @remarks
   * 租户账号是否启用。本接口只返回有效且账号启用的成员，值为true；不代表HR在职状态。
   * 
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @remarks
   * 成员在空间内的角色：ADMIN为管理员，MEMBER为普通成员。
   * 
   * @example
   * ADMIN
   */
  role?: string;
  /**
   * @remarks
   * 平台用户ID，字符串形式，可用作转交待办的目标用户ID。
   * 
   * @example
   * 5
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      isActive: 'isActive',
      role: 'role',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      isActive: 'boolean',
      role: 'string',
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

export class ListCollaborationGroupMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * 公共业务状态码，由后端Code字段映射；错误时用于识别失败原因。
   * 
   * @example
   * ERR.Robject.Auth.TenantAccessDenied
   */
  code?: string;
  /**
   * @remarks
   * 当前页记录列表；没有匹配记录时返回空数组。
   * 
   * @example
   * [{"userId":"5","displayName":"张三","role":"OWNER","isActive":true}]
   */
  items?: ListCollaborationGroupMembersResponseBodyItems[];
  /**
   * @remarks
   * 公共错误说明，由后端Message字段映射；错误时描述失败原因。
   * 
   * @example
   * 无权访问租户 2147483647，用户不属于该租户
   */
  message?: string;
  /**
   * @remarks
   * 当前返回页的页码，从1开始。
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 当前分页设置的每页记录数。
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 请求追踪ID，由后端RequestId字段映射，用于排查调用失败。
   * 
   * @example
   * c9cf6cb3-3f5c-4994-a8a1-c93379a6f5cf
   */
  requestId?: string;
  /**
   * @remarks
   * 满足查询条件的记录总数，不是当前页记录数。
   * 
   * @example
   * 10
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
      items: { 'type': 'array', 'itemType': ListCollaborationGroupMembersResponseBodyItems },
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

