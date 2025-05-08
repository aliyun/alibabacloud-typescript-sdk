// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsResourceUsageResponseBodyEnsResourceUsage extends $dara.Model {
  /**
   * @remarks
   * The number of edge services. This parameter is available only when you set the ServiceType parameter to 2.
   * 
   * @example
   * 2
   */
  computeResourceCount?: number;
  /**
   * @remarks
   * The CPU usage. Unit: cores.
   * 
   * @example
   * 2
   */
  cpuSum?: number;
  /**
   * @remarks
   * The number of data disks.
   * 
   * @example
   * 4
   */
  diskCount?: number;
  /**
   * @remarks
   * The number of stopped VMs.
   * 
   * @example
   * 7
   */
  downCount?: number;
  /**
   * @remarks
   * The number of expired VM instances.
   * 
   * @example
   * 1
   */
  expiredCount?: number;
  /**
   * @remarks
   * The number of VM instances that are about to expire.
   * 
   * @example
   * 0
   */
  expiringCount?: number;
  /**
   * @remarks
   * The number of GPUs.
   * 
   * @example
   * 6
   */
  gpuSum?: number;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 2
   */
  instanceCount?: number;
  /**
   * @remarks
   * The number of running instances.
   * 
   * @example
   * 19
   */
  runningCount?: number;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   1: subscription instance.
   * *   2: edge service instance.
   * *   3: pay-as-you-go instance.
   * 
   * @example
   * 1
   */
  serviceType?: string;
  /**
   * @remarks
   * The total disk size.
   * 
   * @example
   * 5000
   */
  storageSum?: number;
  static names(): { [key: string]: string } {
    return {
      computeResourceCount: 'ComputeResourceCount',
      cpuSum: 'CpuSum',
      diskCount: 'DiskCount',
      downCount: 'DownCount',
      expiredCount: 'ExpiredCount',
      expiringCount: 'ExpiringCount',
      gpuSum: 'GpuSum',
      instanceCount: 'InstanceCount',
      runningCount: 'RunningCount',
      serviceType: 'ServiceType',
      storageSum: 'StorageSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResourceCount: 'number',
      cpuSum: 'number',
      diskCount: 'number',
      downCount: 'number',
      expiredCount: 'number',
      expiringCount: 'number',
      gpuSum: 'number',
      instanceCount: 'number',
      runningCount: 'number',
      serviceType: 'string',
      storageSum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

