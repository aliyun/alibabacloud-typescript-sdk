// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSDGStatusResponseBodyDeploymentStatus extends $dara.Model {
  /**
   * @remarks
   * The size of the writable layer of the block device. Unit: GiB. A value of 0 indicates that this feature is disabled.
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
   * The edge zone ID.
   * 
   * @example
   * cn-guangzhou-26
   */
  ensRegionId?: string;
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
   * The deployment type of the SDG.
   * 
   * @example
   * shared
   */
  mountType?: string;
  /**
   * @remarks
   * The deployment phase of the SDG.
   * 
   * @example
   * attach
   */
  phase?: string;
  /**
   * @remarks
   * The ID of the SDG.
   * 
   * @example
   * sdg-xxxxxxx
   */
  SDGId?: string;
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
   * The latest status update time. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
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
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      mountType: 'MountType',
      phase: 'Phase',
      SDGId: 'SDGId',
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
      ensRegionId: 'string',
      instanceId: 'string',
      mountType: 'string',
      phase: 'string',
      SDGId: 'string',
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

export class DescribeInstanceSDGStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of SDG deployment information.
   */
  deploymentStatus?: DescribeInstanceSDGStatusResponseBodyDeploymentStatus[];
  /**
   * @remarks
   * The page number. Starting value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The Settings for the number of entries per page for paging in a paged query. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C0003E8B-B930-4F59-ADC0-0E209A9012A8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of deployment records returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
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
      deploymentStatus: { 'type': 'array', 'itemType': DescribeInstanceSDGStatusResponseBodyDeploymentStatus },
      pageNumber: 'number',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
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

