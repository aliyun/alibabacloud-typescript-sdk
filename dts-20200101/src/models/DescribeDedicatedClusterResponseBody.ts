// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CPU utilization percentage.
   * 
   * @example
   * 30
   */
  cpuUtilization?: number;
  /**
   * @remarks
   * The ID of the dedicated cluster.
   * 
   * @example
   * dtsCluster****
   */
  dedicatedClusterId?: string;
  /**
   * @remarks
   * The name of the dedicated cluster.
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
   * The instance ID.
   * 
   * @example
   * dtsb8r****
   */
  dtsInstanceID?: string;
  /**
   * @remarks
   * The number of DUs.
   * 
   * @example
   * 30
   */
  du?: number;
  /**
   * @remarks
   * The DU utilization percentage.
   * 
   * @example
   * 16
   */
  duUtilization?: number;
  /**
   * @remarks
   * The error code returned if the call fails.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1642476144000
   */
  gmtCreated?: number;
  /**
   * @remarks
   * The completion time.
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
   * The number of nodes in the dedicated cluster.
   * 
   * @example
   * 5
   */
  nodeCount?: number;
  /**
   * @remarks
   * The number of oversold DUs.
   * 
   * @example
   * 60
   */
  oversoldDu?: number;
  /**
   * @remarks
   * The region where the instance is deployed.
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
   * The status of the dedicated cluster. Valid values:
   * - **init**: initializing
   * - **schedule**: pending scheduling
   * - **running**: running
   * - **upgrade**: upgrading
   * - **downgrade**: downgrading
   * - **locked**: locked
   * - **releasing**: releasing
   * - **released**: released
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
   * The total disk size in GB.
   * 
   * @example
   * 2048
   */
  totalDiskGBSize?: number;
  /**
   * @remarks
   * The total memory size in GB.
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
   * The used disk size in GB.
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
   * The used memory size in GB.
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

