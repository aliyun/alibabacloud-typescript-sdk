// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppResourcePermissionRecordsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 主体 ID 筛选
   * 
   * @example
   * 10086
   */
  granteeId?: string;
  /**
   * @remarks
   * 跨租户 USER 所属租户筛选
   * 
   * @example
   * 10000
   */
  granteeTenantId?: string;
  /**
   * @remarks
   * 主体类型筛选
   * 
   * @example
   * USER
   */
  granteeType?: string;
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
   * 权限点筛选
   */
  permissionsShrink?: string;
  /**
   * @remarks
   * 应用键或其子路径
   * 
   * This parameter is required.
   * 
   * @example
   * app.demo
   */
  resourceKeyPrefix?: string;
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
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      granteeId: 'granteeId',
      granteeTenantId: 'granteeTenantId',
      granteeType: 'granteeType',
      page: 'page',
      pageSize: 'pageSize',
      permissionsShrink: 'permissions',
      resourceKeyPrefix: 'resourceKeyPrefix',
      resourceTenantId: 'resourceTenantId',
      resourceType: 'resourceType',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granteeId: 'string',
      granteeTenantId: 'string',
      granteeType: 'string',
      page: 'number',
      pageSize: 'number',
      permissionsShrink: 'string',
      resourceKeyPrefix: 'string',
      resourceTenantId: 'string',
      resourceType: 'string',
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

