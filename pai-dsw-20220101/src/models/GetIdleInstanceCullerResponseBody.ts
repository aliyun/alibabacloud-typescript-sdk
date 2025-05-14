// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdleInstanceCullerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * *   InternalError: an internal error. All errors, except for parameter validation errors, are classified as internal errors.
   * *   ValidationError: a parameter validation error.
   * 
   * @example
   * ValidationError
   */
  code?: string;
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
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * "XXX"
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cpuPercentThreshold: 'CpuPercentThreshold',
      gpuPercentThreshold: 'GpuPercentThreshold',
      idleTimeInMinutes: 'IdleTimeInMinutes',
      instanceId: 'InstanceId',
      maxIdleTimeInMinutes: 'MaxIdleTimeInMinutes',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cpuPercentThreshold: 'number',
      gpuPercentThreshold: 'number',
      idleTimeInMinutes: 'number',
      instanceId: 'string',
      maxIdleTimeInMinutes: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

