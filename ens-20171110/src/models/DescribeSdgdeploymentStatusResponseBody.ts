// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGDeploymentStatusResponseBodyDeploymentStatus extends $dara.Model {
  blockRwSplitSize?: number;
  cacheSize?: number;
  diskAccessProtocol?: string;
  diskType?: string;
  /**
   * @remarks
   * The ID of the AIC instance.
   * 
   * @example
   * aic-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The deployment type.
   * 
   * Valid values:
   * 
   * *   overlay: read/write splitting.
   * *   common: common deployment.
   * 
   * @example
   * overlay
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
   * The ID of the edge node.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The deployment status of the SDG.
   * 
   * Valid values:
   * 
   * *   sdg_deploying
   * *   success
   * *   failed
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The time when the status was last updated.
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
   * The page number. Pages start from page 1. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
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
   * The total number of queried deployment records.
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

