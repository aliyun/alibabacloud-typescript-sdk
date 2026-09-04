// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePxfsTenantRequest extends $dara.Model {
  /**
   * @remarks
   * Agent文件服务关联的PolarDB-X实例ID。
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-xxxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * 租户容量配额，单位为字节；0表示禁止新增数据。
   * 
   * This parameter is required.
   * 
   * @example
   * 107374182400
   */
  quotaBytes?: number;
  /**
   * @remarks
   * 租户文件数量配额；0表示禁止新增文件。
   * 
   * This parameter is required.
   * 
   * @example
   * 1000000
   */
  quotaFiles?: number;
  /**
   * @remarks
   * 租户每秒请求数上限；0表示不限制。
   * 
   * @example
   * 1000
   */
  rateLimitRps?: number;
  /**
   * @remarks
   * 租户每秒写入字节数上限；0表示不限制。
   * 
   * @example
   * 104857600
   */
  rateLimitWbps?: number;
  /**
   * @remarks
   * Agent文件服务实例所属地域的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Agent文件服务的租户ID。
   * 
   * This parameter is required.
   * 
   * @example
   * tenant-001
   */
  tenantId?: string;
  /**
   * @remarks
   * Agent文件服务的租户名称。
   * 
   * This parameter is required.
   * 
   * @example
   * agent-files
   */
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      quotaBytes: 'QuotaBytes',
      quotaFiles: 'QuotaFiles',
      rateLimitRps: 'RateLimitRps',
      rateLimitWbps: 'RateLimitWbps',
      regionId: 'RegionId',
      tenantId: 'TenantId',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      quotaBytes: 'number',
      quotaFiles: 'number',
      rateLimitRps: 'number',
      rateLimitWbps: 'number',
      regionId: 'string',
      tenantId: 'string',
      tenantName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

