// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppResourcePermissionRecordsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2026-10-16T10:30:00+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * 到期时间
   * 
   * @example
   * 2026-12-31T23:59:59+08:00
   */
  expireAt?: string;
  /**
   * @remarks
   * 授权人平台用户 ID
   * 
   * @example
   * 10086
   */
  grantedBy?: string;
  /**
   * @remarks
   * 主体 ID
   * 
   * @example
   * 10086
   */
  granteeId?: string;
  /**
   * @remarks
   * 主体名称
   * 
   * @example
   * 张三
   */
  granteeName?: string;
  /**
   * @remarks
   * 跨租户 USER 所属租户
   * 
   * @example
   * 10000
   */
  granteeTenantId?: string;
  /**
   * @remarks
   * 主体类型
   * 
   * @example
   * USER
   */
  granteeType?: string;
  /**
   * @remarks
   * 权限点
   * 
   * @example
   * APP/VIEW
   */
  permission?: string;
  /**
   * @remarks
   * 权限记录 ID
   * 
   * @example
   * 1001
   */
  permissionId?: number;
  /**
   * @remarks
   * 资源键
   * 
   * @example
   * app.demo.resource_1
   */
  resourceKey?: string;
  /**
   * @remarks
   * 资源类型
   * 
   * @example
   * APP_RESOURCE
   */
  resourceType?: string;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 2026-10-16T10:30:00+08:00
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      expireAt: 'expireAt',
      grantedBy: 'grantedBy',
      granteeId: 'granteeId',
      granteeName: 'granteeName',
      granteeTenantId: 'granteeTenantId',
      granteeType: 'granteeType',
      permission: 'permission',
      permissionId: 'permissionId',
      resourceKey: 'resourceKey',
      resourceType: 'resourceType',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      expireAt: 'string',
      grantedBy: 'string',
      granteeId: 'string',
      granteeName: 'string',
      granteeTenantId: 'string',
      granteeType: 'string',
      permission: 'string',
      permissionId: 'number',
      resourceKey: 'string',
      resourceType: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppResourcePermissionRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码；成功为 200
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 当前页授权记录
   */
  items?: ListAppResourcePermissionRecordsResponseBodyItems[];
  /**
   * @remarks
   * 错误描述；成功时为空
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
  /**
   * @remarks
   * 页码
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页条数
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
   * 记录总数
   * 
   * @example
   * 100
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
      items: { 'type': 'array', 'itemType': ListAppResourcePermissionRecordsResponseBodyItems },
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

