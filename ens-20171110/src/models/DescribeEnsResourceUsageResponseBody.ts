// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsResourceUsageResponseBodyEnsResourceUsage extends $dara.Model {
  /**
   * @remarks
   * The number of edge services. This field returns data only when ServiceType is set to 2.
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
   * The number of data cloud disks.
   * 
   * @example
   * 4
   */
  diskCount?: number;
  /**
   * @remarks
   * The number of stopped virtual machine instances.
   * 
   * @example
   * 7
   */
  downCount?: number;
  /**
   * @remarks
   * The number of expired virtual machine instances.
   * 
   * @example
   * 1
   */
  expiredCount?: number;
  /**
   * @remarks
   * The number of virtual machine instances that are about to expire.
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
   * The service type. Valid values:
   * - 1: Subscription instance.
   * - 2: Edge service instance.
   * - 3: Pay-as-you-go instance.
   * 
   * @example
   * 1
   */
  serviceType?: string;
  /**
   * @remarks
   * The total disk storage capacity.
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

export class DescribeEnsResourceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The resource usage data.
   */
  ensResourceUsage?: DescribeEnsResourceUsageResponseBodyEnsResourceUsage[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ensResourceUsage: 'EnsResourceUsage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensResourceUsage: { 'type': 'array', 'itemType': DescribeEnsResourceUsageResponseBodyEnsResourceUsage },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ensResourceUsage)) {
      $dara.Model.validateArray(this.ensResourceUsage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

