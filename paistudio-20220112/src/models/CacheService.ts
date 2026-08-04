// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CacheInfo } from "./CacheInfo";
import { UserVpc } from "./UserVpc";


export class CacheService extends $dara.Model {
  /**
   * @remarks
   * Information about each cache node in the service.
   */
  cacheInfos?: CacheInfo[];
  /**
   * @remarks
   * The unique identifier of the CacheService.
   */
  cacheServiceId?: string;
  /**
   * @remarks
   * The ID of the PAI cluster where the CacheService is deployed.
   */
  clusterId?: string;
  /**
   * @remarks
   * The user or entity that created the resource.
   */
  createdBy?: string;
  /**
   * @remarks
   * The time (in UTC, ISO 8601 format) when the CacheService was created.
   */
  gmtCreated?: string;
  /**
   * @remarks
   * Indicates whether the CacheService is sharded across multiple nodes.
   */
  isSharded?: boolean;
  /**
   * @remarks
   * The network type of the CacheService. For example, `VPC`.
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the resource quota associated with the CacheService.
   */
  quotaId?: string;
  /**
   * @remarks
   * The current status of the CacheService. For example: `Creating`, `Available`, or `Deleting`.
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the CacheService supports RDMA.
   */
  supportRDMA?: string;
  /**
   * @remarks
   * A list of quota IDs for clients that can connect to this CacheService.
   */
  supportedClientQuotaIds?: string[];
  /**
   * @remarks
   * The ID of the tenant that owns the CacheService.
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the user associated with the CacheService.
   */
  userId?: string;
  /**
   * @remarks
   * The configuration of the user\\"s VPC where the CacheService is deployed.
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

