// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetTrackingPolicy extends $dara.Model {
  /**
   * @remarks
   * The end time of the policy, in UTC.
   * 
   * @example
   * 2024-03-10T10:10:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of provisioned instances for scale-out.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The threshold value for metric-based auto scaling.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.6
   */
  metricTarget?: number;
  /**
   * @remarks
   * The metric type for tracing. ProvisionedConcurrencyUtilization: the concurrency utilization of provisioned instances. CPUUtilization: the CPU utilization. GPUMemUtilization: the GPU utilization.
   * 
   * This parameter is required.
   * 
   * @example
   * CPUUtilization
   */
  metricType?: string;
  /**
   * @remarks
   * The minimum number of provisioned instances for scale-in.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  minCapacity?: number;
  /**
   * @remarks
   * The policy name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_1
   */
  name?: string;
  /**
   * @remarks
   * The time when the policy starts to take effect, in UTC.
   * 
   * @example
   * 2023-03-10T10:10:10Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time zone. If the time zone parameter is empty, the time of startTime and endTime must be in UTC format.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxCapacity: 'maxCapacity',
      metricTarget: 'metricTarget',
      metricType: 'metricType',
      minCapacity: 'minCapacity',
      name: 'name',
      startTime: 'startTime',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxCapacity: 'number',
      metricTarget: 'number',
      metricType: 'string',
      minCapacity: 'number',
      name: 'string',
      startTime: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

