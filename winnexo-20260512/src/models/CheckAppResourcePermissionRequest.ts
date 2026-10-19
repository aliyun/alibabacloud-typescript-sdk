// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAppResourcePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * 需要检查的权限点
   * 
   * This parameter is required.
   * 
   * @example
   * APP/VIEW
   */
  permission?: string;
  /**
   * @remarks
   * 首段为 APP 应用键的点分资源键
   * 
   * This parameter is required.
   * 
   * @example
   * app.demo.resource_1
   */
  resourceKey?: string;
  /**
   * @remarks
   * 资源所属租户 ID；省略为调用人当前租户
   * 
   * @example
   * 10000
   */
  resourceTenantId?: string;
  /**
   * @remarks
   * 固定为 APP_RESOURCE
   * 
   * This parameter is required.
   * 
   * @example
   * APP_RESOURCE
   */
  resourceType?: string;
  /**
   * @remarks
   * 目标平台用户 ID
   * 
   * @example
   * 10086
   */
  targetUserId?: number;
  /**
   * @remarks
   * 目标用户所属租户；跨租户目标必填
   * 
   * @example
   * 10000
   */
  targetUserTenantId?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      permission: 'permission',
      resourceKey: 'resourceKey',
      resourceTenantId: 'resourceTenantId',
      resourceType: 'resourceType',
      targetUserId: 'targetUserId',
      targetUserTenantId: 'targetUserTenantId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: 'string',
      resourceKey: 'string',
      resourceTenantId: 'string',
      resourceType: 'string',
      targetUserId: 'number',
      targetUserTenantId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

