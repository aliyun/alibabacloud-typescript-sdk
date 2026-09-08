// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CacheInfo } from "./CacheInfo";
import { UserVpc } from "./UserVpc";


export class CacheService extends $dara.Model {
  /**
   * @remarks
   * The list of data source cache information connected to the cache service. Each element corresponds to a data source and its access port.
   */
  cacheInfos?: CacheInfo[];
  /**
   * @remarks
   * The cache service ID. This is the unique identifier of the cache service.
   * 
   * @example
   * cachea1b2c3d4e5f
   */
  cacheServiceId?: string;
  /**
   * @remarks
   * The ID of the cluster where the cache service resides.
   * 
   * @example
   * c1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the resource quota that created the cache service.
   * 
   * @example
   * quota1a2b3c4d5e6
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the cache service was created, in UTC in ISO 8601 format.
   * 
   * @example
   * 2026-08-10T03:17:31Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * Indicates whether the service discovery of the cache service uses shard mode.
   */
  isSharded?: boolean;
  /**
   * @remarks
   * The type of RDMA network interface controller used by the cache service. This parameter is returned only when SupportRDMA is set to true. Valid values:
   * - eic: EIC network interface controller.
   * - mlx: Mellanox network interface controller.
   * 
   * This parameter is empty when RDMA is not enabled.
   * 
   * @example
   * eic
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the resource quota to which the cache service belongs.
   * 
   * @example
   * quota1a2b3c4d5e6
   */
  quotaId?: string;
  /**
   * @remarks
   * The current status of the cache service.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the cache service supports access through RDMA networks.
   */
  supportRDMA?: string;
  /**
   * @remarks
   * The list of client quota IDs that are allowed to access the cache service.
   */
  supportedClientQuotaIds?: string[];
  /**
   * @remarks
   * The tenant ID to which the cache service belongs, which is the Alibaba Cloud account ID.
   * 
   * @example
   * 1234567890123456
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the user who created the cache service.
   * 
   * @example
   * 123456789012345678
   */
  userId?: string;
  /**
   * @remarks
   * The VPC network information of the cache service, including the VPC, vSwitch, and security group configurations.
   */
  userVpc?: UserVpc;
  static names(): { [key: string]: string } {
    return {
      cacheInfos: 'CacheInfos',
      cacheServiceId: 'CacheServiceId',
      clusterId: 'ClusterId',
      createdBy: 'CreatedBy',
      gmtCreated: 'GmtCreated',
      isSharded: 'IsSharded',
      networkType: 'NetworkType',
      quotaId: 'QuotaId',
      status: 'Status',
      supportRDMA: 'SupportRDMA',
      supportedClientQuotaIds: 'SupportedClientQuotaIds',
      tenantId: 'TenantId',
      userId: 'UserId',
      userVpc: 'UserVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheInfos: { 'type': 'array', 'itemType': CacheInfo },
      cacheServiceId: 'string',
      clusterId: 'string',
      createdBy: 'string',
      gmtCreated: 'string',
      isSharded: 'boolean',
      networkType: 'string',
      quotaId: 'string',
      status: 'string',
      supportRDMA: 'string',
      supportedClientQuotaIds: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
      userId: 'string',
      userVpc: UserVpc,
    };
  }

  validate() {
    if(Array.isArray(this.cacheInfos)) {
      $dara.Model.validateArray(this.cacheInfos);
    }
    if(Array.isArray(this.supportedClientQuotaIds)) {
      $dara.Model.validateArray(this.supportedClientQuotaIds);
    }
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

