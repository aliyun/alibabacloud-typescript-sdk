// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CPU utilization. Unit: percentage.
   * 
   * @example
   * 30
   */
  cpuUtilization?: number;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * dtsCluster****
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * daily_test
   */
  dedicatedClusterName?: string;
  /**
   * @remarks
   * The disk usage.
   * 
   * @example
   * 50
   */
  diskUtilization?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * dtsb8r****
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The number of DTS units (DUs).
   * 
   * @example
   * 30
   */
  du?: number;
  /**
   * @remarks
   * The DU usage. Unit: percentage.
   * 
   * @example
   * 16
   */
  duUtilization?: number;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 1642476144000
   */
  gmtCreated?: number;
  /**
   * @remarks
   * The time when the cluster stopped.
   * 
   * @example
   * 1645200000000
   */
  gmtFinished?: number;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The memory usage.
   * 
   * @example
   * 20
   */
  memUtilization?: number;
  /**
   * @remarks
   * The number of nodes in the cluster.
   * 
   * @example
   * 5
   */
  nodeCount?: number;
  /**
   * @remarks
   * The number of DUs that exceeds the upper limit.
   * 
   * @example
   * 60
   */
  oversoldDu?: number;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 621BB4F8-3016-4FAA-8D5A-5D3163CC****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   **init**: The cluster is being initialized.
   * *   **schedule**: The cluster is pending scheduling.
   * *   **running**: The cluster is running.
   * *   **upgrade**: The cluster is being upgraded.
   * *   **downgrade**: The cluster is being downgraded.
   * *   **locked**: The cluster is locked.
   * *   **releasing**: The cluster is being released.
   * *   **released**: The cluster is released.
   * 
   * @example
   * inti
   */
  state?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of CPU cores.
   * 
   * @example
   * 100
   */
  totalCpuCore?: number;
  /**
   * @remarks
   * The total disk size. Unit: GB.
   * 
   * @example
   * 2048
   */
  totalDiskGBSize?: number;
  /**
   * @remarks
   * The total amount of memory. Unit: GB.
   * 
   * @example
   * 256
   */
  totalMemGBSize?: number;
  /**
   * @remarks
   * The number of used CPU cores.
   * 
   * @example
   * 30
   */
  usedCpuCore?: number;
  /**
   * @remarks
   * The used disk size. Unit: GB.
   * 
   * @example
   * 1024
   */
  usedDiskGBSize?: number;
  /**
   * @remarks
   * The number of used DUs.
   * 
   * @example
   * 5
   */
  usedDu?: number;
  /**
   * @remarks
   * The amount of used memory. Unit: GB.
   * 
   * @example
   * 128
   */
  usedMemGBSize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuUtilization: 'CpuUtilization',
      dedicatedClusterId: 'DedicatedClusterId',
      dedicatedClusterName: 'DedicatedClusterName',
      diskUtilization: 'DiskUtilization',
      dtsInstanceID: 'DtsInstanceID',
      du: 'Du',
      duUtilization: 'DuUtilization',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      gmtCreated: 'GmtCreated',
      gmtFinished: 'GmtFinished',
      httpStatusCode: 'HttpStatusCode',
      memUtilization: 'MemUtilization',
      nodeCount: 'NodeCount',
      oversoldDu: 'OversoldDu',
      regionId: 'RegionId',
      requestId: 'RequestId',
      state: 'State',
      success: 'Success',
      totalCpuCore: 'TotalCpuCore',
      totalDiskGBSize: 'TotalDiskGBSize',
      totalMemGBSize: 'TotalMemGBSize',
      usedCpuCore: 'UsedCpuCore',
      usedDiskGBSize: 'UsedDiskGBSize',
      usedDu: 'UsedDu',
      usedMemGBSize: 'UsedMemGBSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuUtilization: 'number',
      dedicatedClusterId: 'string',
      dedicatedClusterName: 'string',
      diskUtilization: 'number',
      dtsInstanceID: 'string',
      du: 'number',
      duUtilization: 'number',
      errCode: 'string',
      errMessage: 'string',
      gmtCreated: 'number',
      gmtFinished: 'number',
      httpStatusCode: 'string',
      memUtilization: 'number',
      nodeCount: 'number',
      oversoldDu: 'number',
      regionId: 'string',
      requestId: 'string',
      state: 'string',
      success: 'string',
      totalCpuCore: 'number',
      totalDiskGBSize: 'number',
      totalMemGBSize: 'number',
      usedCpuCore: 'number',
      usedDiskGBSize: 'number',
      usedDu: 'number',
      usedMemGBSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

