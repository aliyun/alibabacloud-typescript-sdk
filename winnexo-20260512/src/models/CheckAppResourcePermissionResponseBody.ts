// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAppResourcePermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * 目标用户是否拥有该资源权限
   * 
   * @example
   * true
   */
  allowed?: boolean;
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
   * 错误描述；成功时为空
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
  /**
   * @remarks
   * 目标权限点
   * 
   * @example
   * APP/VIEW
   */
  permission?: string;
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
   * 首段为 APP 应用键的点分资源键
   * 
   * @example
   * app.demo.resource_1
   */
  resourceKey?: string;
  /**
   * @remarks
   * 固定为 APP_RESOURCE
   * 
   * @example
   * APP_RESOURCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      allowed: 'allowed',
      code: 'code',
      message: 'message',
      permission: 'permission',
      requestId: 'requestId',
      resourceKey: 'resourceKey',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowed: 'boolean',
      code: 'string',
      message: 'string',
      permission: 'string',
      requestId: 'string',
      resourceKey: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

