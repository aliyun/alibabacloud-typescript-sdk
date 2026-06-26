// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingPolicy extends $dara.Model {
  /**
   * @remarks
   * The time when the policy expires.
   * 
   * @example
   * 2024-03-10T10:10:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of instances.
   * 
   * @example
   * 10
   */
  maxInstances?: number;
  /**
   * @remarks
   * The target value for the metric.
   * 
   * @example
   * 0.6
   */
  metricTarget?: number;
  /**
   * @remarks
   * The type of metric to track. ProvisionedConcurrencyUtilization is the concurrency utilization of provisioned instances. CPUUtilization is the CPU utilization. GPUMemUtilization is the GPU memory utilization.
   * 
   * @example
   * CPUUtilization
   */
  metricType?: string;
  /**
   * @remarks
   * The minimum number of instances.
   * 
   * @example
   * 1
   */
  minInstances?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The time when the policy takes effect.
   * 
   * @example
   * 2023-03-10T10:10:10Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time zone. If this parameter is empty, the times for startTime, endTime, and scheduleExpression must be in Coordinated Universal Time (UTC).
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxInstances: 'maxInstances',
      metricTarget: 'metricTarget',
      metricType: 'metricType',
      minInstances: 'minInstances',
      name: 'name',
      startTime: 'startTime',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxInstances: 'number',
      metricTarget: 'number',
      metricType: 'string',
      minInstances: 'number',
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

