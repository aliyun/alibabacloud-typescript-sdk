// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustinsResourceInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The deadline for the CPU adjustment.
   * 
   * @example
   * 2023-10-25
   */
  cpuAdjustDeadline?: string;
  /**
   * @remarks
   * The maximum percentage of the system CPU resources that the instance can use.
   * 
   * @example
   * 30
   */
  cpuAdjustableMaxRatio?: string;
  /**
   * @remarks
   * The maximum CPU utilization.
   * 
   * @example
   * 60
   */
  cpuAdjustableMaxValue?: string;
  /**
   * @remarks
   * The CPU utilization.
   * 
   * @example
   * 10
   */
  cpuIncreaseRatio?: string;
  /**
   * @remarks
   * The CPU utilization. Unit: percentage.
   * 
   * @example
   * 20
   */
  cpuIncreaseRatioValue?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-wz92gn1ll9fe5d3a4
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The maximum IOPS.
   * 
   * @example
   * 20
   */
  iopsAdjustableMaxValue?: string;
  /**
   * @remarks
   * The deadline for the adjustment of the maximum number of connections.
   * 
   * @example
   * 2023-10-25
   */
  maxConnAdjustDeadline?: string;
  /**
   * @remarks
   * The maximum number of concurrent connections.
   * 
   * @example
   * 100
   */
  maxConnAdjustableMaxValue?: string;
  /**
   * @remarks
   * The maximum number of concurrent connections.
   * 
   * @example
   * 100
   */
  maxConnIncreaseRatio?: string;
  /**
   * @remarks
   * The maximum number of concurrent connections.
   * 
   * @example
   * 20
   */
  maxConnIncreaseRatioValue?: string;
  /**
   * @remarks
   * The deadline for the adjustment of the maximum IOPS.
   * 
   * @example
   * 2023-10-25
   */
  maxIopsAdjustDeadline?: string;
  /**
   * @remarks
   * The maximum IOPS.
   * 
   * @example
   * 100
   */
  maxIopsIncreaseRatio?: string;
  /**
   * @remarks
   * The maximum IOPS that can be supported by the instance.
   * 
   * @example
   * 20
   */
  maxIopsIncreaseRatioValue?: string;
  /**
   * @remarks
   * The maximum percentage of the system memory that the instance can use.
   * 
   * @example
   * 60
   */
  memAdjustableMaxRatio?: string;
  /**
   * @remarks
   * The maximum value of the resources to be evaluated.
   * 
   * @example
   * 200
   */
  memAdjustableMaxValue?: string;
  /**
   * @remarks
   * The deadline for the memory adjustment.
   * 
   * @example
   * 2023-10-25
   */
  memoryAdjustDeadline?: string;
  /**
   * @remarks
   * The memory increase percentage.
   * 
   * @example
   * 2023-10-25
   */
  memoryIncreaseRatio?: string;
  /**
   * @remarks
   * The memory usage. Unit: MB.
   * 
   * @example
   * 200
   */
  memoryIncreaseRatioValue?: string;
  /**
   * @remarks
   * The number of CPUs of the instance.
   * 
   * @example
   * 2
   */
  originCpu?: string;
  /**
   * @remarks
   * The maximum number of concurrent connections.
   * 
   * @example
   * 30
   */
  originMaxConn?: string;
  /**
   * @remarks
   * The maximum IOPS.
   * 
   * @example
   * 20
   */
  originMaxIops?: string;
  /**
   * @remarks
   * The actual memory used. Unit: MB.
   * 
   * @example
   * 20
   */
  originMemory?: string;
  static names(): { [key: string]: string } {
    return {
      cpuAdjustDeadline: 'CpuAdjustDeadline',
      cpuAdjustableMaxRatio: 'CpuAdjustableMaxRatio',
      cpuAdjustableMaxValue: 'CpuAdjustableMaxValue',
      cpuIncreaseRatio: 'CpuIncreaseRatio',
      cpuIncreaseRatioValue: 'CpuIncreaseRatioValue',
      DBInstanceId: 'DBInstanceId',
      iopsAdjustableMaxValue: 'IopsAdjustableMaxValue',
      maxConnAdjustDeadline: 'MaxConnAdjustDeadline',
      maxConnAdjustableMaxValue: 'MaxConnAdjustableMaxValue',
      maxConnIncreaseRatio: 'MaxConnIncreaseRatio',
      maxConnIncreaseRatioValue: 'MaxConnIncreaseRatioValue',
      maxIopsAdjustDeadline: 'MaxIopsAdjustDeadline',
      maxIopsIncreaseRatio: 'MaxIopsIncreaseRatio',
      maxIopsIncreaseRatioValue: 'MaxIopsIncreaseRatioValue',
      memAdjustableMaxRatio: 'MemAdjustableMaxRatio',
      memAdjustableMaxValue: 'MemAdjustableMaxValue',
      memoryAdjustDeadline: 'MemoryAdjustDeadline',
      memoryIncreaseRatio: 'MemoryIncreaseRatio',
      memoryIncreaseRatioValue: 'MemoryIncreaseRatioValue',
      originCpu: 'OriginCpu',
      originMaxConn: 'OriginMaxConn',
      originMaxIops: 'OriginMaxIops',
      originMemory: 'OriginMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuAdjustDeadline: 'string',
      cpuAdjustableMaxRatio: 'string',
      cpuAdjustableMaxValue: 'string',
      cpuIncreaseRatio: 'string',
      cpuIncreaseRatioValue: 'string',
      DBInstanceId: 'string',
      iopsAdjustableMaxValue: 'string',
      maxConnAdjustDeadline: 'string',
      maxConnAdjustableMaxValue: 'string',
      maxConnIncreaseRatio: 'string',
      maxConnIncreaseRatioValue: 'string',
      maxIopsAdjustDeadline: 'string',
      maxIopsIncreaseRatio: 'string',
      maxIopsIncreaseRatioValue: 'string',
      memAdjustableMaxRatio: 'string',
      memAdjustableMaxValue: 'string',
      memoryAdjustDeadline: 'string',
      memoryIncreaseRatio: 'string',
      memoryIncreaseRatioValue: 'string',
      originCpu: 'string',
      originMaxConn: 'string',
      originMaxIops: 'string',
      originMemory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustinsResourceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeCustinsResourceInfoResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D4D4BE8A-DD46-440A-BFCD-EE31DA81C9DD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeCustinsResourceInfoResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

