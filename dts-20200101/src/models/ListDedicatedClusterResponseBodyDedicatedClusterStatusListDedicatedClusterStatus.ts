// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDedicatedClusterResponseBodyDedicatedClusterStatusListDedicatedClusterStatus extends $dara.Model {
  /**
   * @remarks
   * The CPU utilization, in percentage.
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
   * dtscluster*******
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
   * The ID of the DTS instance.
   * 
   * @example
   * dtsi03e3zty16i****
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
   * The DU usage, in percentage.
   * 
   * @example
   * 16.6667
   */
  duUtilization?: number;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 1647424384606
   */
  gmtCreated?: number;
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
   * The number of over-provisioned DUs.
   * 
   * @example
   * 60
   */
  oversoldDu?: number;
  /**
   * @remarks
   * The ID of the region in which the DTS instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * init
   */
  state?: string;
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
   * The total disk capacity. Unit: GB.
   * 
   * @example
   * 2048
   */
  totalDiskGBSize?: number;
  /**
   * @remarks
   * The total memory capacity. Unit: GB.
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
   * The used disk capacity. Unit: GB.
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
   * The used memory capacity. Unit: GB.
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
      gmtCreated: 'GmtCreated',
      memUtilization: 'MemUtilization',
      nodeCount: 'NodeCount',
      oversoldDu: 'OversoldDu',
      regionId: 'RegionId',
      state: 'State',
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
      gmtCreated: 'number',
      memUtilization: 'number',
      nodeCount: 'number',
      oversoldDu: 'number',
      regionId: 'string',
      state: 'string',
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

