// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterAppResourcePermissionsRequestItemsGrantees extends $dara.Model {
  /**
   * @remarks
   * 主体 ID；ALL_USERS 省略
   * 
   * @example
   * 10086
   */
  granteeId?: string;
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
   * This parameter is required.
   * 
   * @example
   * USER
   */
  granteeType?: string;
  static names(): { [key: string]: string } {
    return {
      granteeId: 'granteeId',
      granteeTenantId: 'granteeTenantId',
      granteeType: 'granteeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granteeId: 'string',
      granteeTenantId: 'string',
      granteeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterAppResourcePermissionsRequestItems extends $dara.Model {
  /**
   * @remarks
   * 带时区的到期时间；省略表示永久
   * 
   * @example
   * 2026-12-31T23:59:59+08:00
   */
  expireAt?: string;
  /**
   * @remarks
   * 被授权主体
   * 
   * This parameter is required.
   */
  grantees?: RegisterAppResourcePermissionsRequestItemsGrantees[];
  /**
   * @remarks
   * 授权权限点
   * 
   * This parameter is required.
   */
  permissions?: string[];
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
      expireAt: 'expireAt',
      grantees: 'grantees',
      permissions: 'permissions',
      resourceKey: 'resourceKey',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireAt: 'string',
      grantees: { 'type': 'array', 'itemType': RegisterAppResourcePermissionsRequestItemsGrantees },
      permissions: { 'type': 'array', 'itemType': 'string' },
      resourceKey: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.grantees)) {
      $dara.Model.validateArray(this.grantees);
    }
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterAppResourcePermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * 批量授权项
   * 
   * This parameter is required.
   */
  items?: RegisterAppResourcePermissionsRequestItems[];
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
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      resourceTenantId: 'resourceTenantId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': RegisterAppResourcePermissionsRequestItems },
      resourceTenantId: 'string',
      tenantId: 'string',
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

