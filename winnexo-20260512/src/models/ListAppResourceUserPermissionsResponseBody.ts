// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppResourceUserPermissionsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 实际存储且有效的权限点
   */
  permissions?: string[];
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
  static names(): { [key: string]: string } {
    return {
      permissions: 'permissions',
      resourceKey: 'resourceKey',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
      resourceKey: 'string',
      resourceType: 'string',
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

export class ListAppResourceUserPermissionsResponseBody extends $dara.Model {
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
   * 当前页资源与权限
   */
  items?: ListAppResourceUserPermissionsResponseBodyItems[];
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
   * 总资源数
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
      items: { 'type': 'array', 'itemType': ListAppResourceUserPermissionsResponseBodyItems },
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

