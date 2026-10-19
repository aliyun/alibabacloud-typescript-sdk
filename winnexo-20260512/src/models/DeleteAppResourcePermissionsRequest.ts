// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppResourcePermissionsRequestItems extends $dara.Model {
  /**
   * @remarks
   * GRANTEE 主体 ID 列表
   */
  granteeIds?: string[];
  /**
   * @remarks
   * GRANTEE USER 所属租户；同资源租户可省略，跨租户 USER 必填
   * 
   * @example
   * 10000
   */
  granteeTenantId?: string;
  /**
   * @remarks
   * GRANTEE 主体类型
   * 
   * @example
   * USER
   */
  granteeType?: string;
  /**
   * @remarks
   * RESOURCE 是否包含点分后代资源；省略为 false
   * 
   * @example
   * false
   */
  includeDescendants?: boolean;
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
  /**
   * @remarks
   * 删除范围：按资源或按主体
   * 
   * This parameter is required.
   * 
   * @example
   * RESOURCE
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      granteeIds: 'granteeIds',
      granteeTenantId: 'granteeTenantId',
      granteeType: 'granteeType',
      includeDescendants: 'includeDescendants',
      resourceKey: 'resourceKey',
      resourceType: 'resourceType',
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granteeIds: { 'type': 'array', 'itemType': 'string' },
      granteeTenantId: 'string',
      granteeType: 'string',
      includeDescendants: 'boolean',
      resourceKey: 'string',
      resourceType: 'string',
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.granteeIds)) {
      $dara.Model.validateArray(this.granteeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppResourcePermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * 撤权范围
   * 
   * This parameter is required.
   */
  items?: DeleteAppResourcePermissionsRequestItems[];
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
      items: { 'type': 'array', 'itemType': DeleteAppResourcePermissionsRequestItems },
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

