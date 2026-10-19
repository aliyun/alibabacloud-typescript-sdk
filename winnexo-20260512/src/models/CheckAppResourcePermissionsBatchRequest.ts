// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAppResourcePermissionsBatchRequestChecks extends $dara.Model {
  /**
   * @remarks
   * 目标权限点
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
   * 固定为 APP_RESOURCE
   * 
   * This parameter is required.
   * 
   * @example
   * APP_RESOURCE
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      permission: 'permission',
      resourceKey: 'resourceKey',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: 'string',
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

export class CheckAppResourcePermissionsBatchRequest extends $dara.Model {
  /**
   * @remarks
   * 检查项
   * 
   * This parameter is required.
   */
  checks?: CheckAppResourcePermissionsBatchRequestChecks[];
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
      checks: 'checks',
      resourceTenantId: 'resourceTenantId',
      targetUserId: 'targetUserId',
      targetUserTenantId: 'targetUserTenantId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checks: { 'type': 'array', 'itemType': CheckAppResourcePermissionsBatchRequestChecks },
      resourceTenantId: 'string',
      targetUserId: 'number',
      targetUserTenantId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checks)) {
      $dara.Model.validateArray(this.checks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

