// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyInstancesIdleInstanceCuller extends $dara.Model {
  /**
   * @remarks
   * The CPU utilization threshold. Unit: percentage. Valid values: 1 to 100. If the CPU utilization of the instance is lower than this threshold, the instance is considered idle.
   * 
   * @example
   * 20
   */
  cpuPercentThreshold?: number;
  /**
   * @remarks
   * The GPU utilization threshold. Unit: percentage. Valid values: 1 to 100. This parameter takes effect only if the instance is of the GPU instance type. If both CPU and GPU utilization is lower than the thresholds, the instance is considered idle.
   * 
   * @example
   * 10
   */
  gpuPercentThreshold?: number;
  /**
   * @remarks
   * The time duration for which the instance is idle. Unit: minutes.
   * 
   * @example
   * 30
   */
  idleTimeInMinutes?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum time duration for which the instance is idle. Unit: minutes. If the time duration for which the instance is idle exceeds this value, the system automatically stops the instance.
   * 
   * @example
   * 60
   */
  maxIdleTimeInMinutes?: number;
  static names(): { [key: string]: string } {
    return {
      cpuPercentThreshold: 'CpuPercentThreshold',
      gpuPercentThreshold: 'GpuPercentThreshold',
      idleTimeInMinutes: 'IdleTimeInMinutes',
      instanceId: 'InstanceId',
      maxIdleTimeInMinutes: 'MaxIdleTimeInMinutes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPercentThreshold: 'number',
      gpuPercentThreshold: 'number',
      idleTimeInMinutes: 'number',
      instanceId: 'string',
      maxIdleTimeInMinutes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

