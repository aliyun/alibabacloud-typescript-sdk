// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCollaborationGroupsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 协作空间ID，可用于查询空间成员、查询节点详情及预览对话文件。
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 当前调用用户在空间内的角色：ADMIN为管理员，MEMBER为普通成员。
   * 
   * @example
   * ADMIN
   */
  currentUserRole?: string;
  /**
   * @remarks
   * 协作空间显示名称。
   * 
   * @example
   * 工作流待办测试
   */
  name?: string;
  /**
   * @remarks
   * 协作空间状态，当前接口只返回ACTIVE。
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      currentUserRole: 'currentUserRole',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      currentUserRole: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollaborationGroupsResponseBody extends $dara.Model {
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
   * [{"collaborationGroupId":"cg_9401","name":"产品协作空间","status":"ACTIVE","currentUserRole":"OWNER"}]
   */
  items?: ListCollaborationGroupsResponseBodyItems[];
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
   * 满足查询条件的有效空间总数，不是当前页记录数。
   * 
   * @example
   * 39
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
      items: { 'type': 'array', 'itemType': ListCollaborationGroupsResponseBodyItems },
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

