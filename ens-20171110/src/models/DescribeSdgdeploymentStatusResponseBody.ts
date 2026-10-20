// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGDeploymentStatusResponseBodyDeploymentStatus extends $dara.Model {
  /**
   * @remarks
   * The size of the writable layer for the block device. Unit: GiB. A value of 0 indicates that this feature is disabled.
   * 
   * @example
   * 20
   */
  blockRwSplitSize?: number;
  /**
   * @remarks
   * The cache size. Unit: GiB. A value of 0 indicates that this feature is disabled.
   * 
   * @example
   * 20
   */
  cacheSize?: number;
  /**
   * @remarks
   * The disk access protocol type of the mounted shared cloud disk.
   * 
   * @example
   * iscsi
   */
  diskAccessProtocol?: string;
  /**
   * @remarks
   * The disk type of the mounted shared cloud disk.
   * 
   * @example
   * standard
   */
  diskType?: string;
  /**
   * @remarks
   * The AIC instance ID.
   * 
   * @example
   * aic-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The deployment type.
   * 
   * @example
   * overlay
   */
  mountType?: string;
  /**
   * @remarks
   * The SDG deployment phase.
   * 
   * @example
   * attach
   */
  phase?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The deployment status of the SDG.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The time when the status was last updated. The time is displayed in the ISO 8601 UTC format (YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2023-02-17T02:44:31Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      blockRwSplitSize: 'BlockRwSplitSize',
      cacheSize: 'CacheSize',
      diskAccessProtocol: 'DiskAccessProtocol',
      diskType: 'DiskType',
      instanceId: 'InstanceId',
      mountType: 'MountType',
      phase: 'Phase',
      regionId: 'RegionId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockRwSplitSize: 'number',
      cacheSize: 'number',
      diskAccessProtocol: 'string',
      diskType: 'string',
      instanceId: 'string',
      mountType: 'string',
      phase: 'string',
      regionId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSDGDeploymentStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of SDG deployment information.
   */
  deploymentStatus?: DescribeSDGDeploymentStatusResponseBodyDeploymentStatus[];
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 68B85217-03B8-5141-9216-EA4D7C496B9A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of deployment records returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deploymentStatus: 'DeploymentStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentStatus: { 'type': 'array', 'itemType': DescribeSDGDeploymentStatusResponseBodyDeploymentStatus },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deploymentStatus)) {
      $dara.Model.validateArray(this.deploymentStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

