// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time (UTC) of the time range for querying monitoring data. Default value: the current time.
   * 
   * @example
   * 2020-11-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The metric type of the monitoring data to query. Valid values:
   * 
   * - GpuCoreUsage: GPU utilization.
   * 
   * - GpuMemoryUsage: GPU memory usage.
   * 
   * - CpuCoreUsage: CPU utilization.
   * 
   * - MemoryUsage: memory usage.
   * 
   * - NetworkInputRate: network input rate.
   * 
   * - NetworkOutputRate: network output rate.
   * 
   * - DiskReadRate: disk read rate.
   * 
   * - DiskWriteRate: disk write rate.
   * 
   * This parameter is required.
   * 
   * @example
   * GpuMemoryUsage
   */
  metricType?: string;
  /**
   * @remarks
   * The start time (UTC) of the time range for querying monitoring data. Default value: one hour before the current time.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time interval at which monitoring data is returned. Default value: 5 minutes.
   * 
   * @example
   * 5m
   */
  timeStep?: string;
  /**
   * @remarks
   * The temporary token used for authentication.
   * 
   * @example
   * eyXXXX-XXXX.XXXXX
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      metricType: 'MetricType',
      startTime: 'StartTime',
      timeStep: 'TimeStep',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      metricType: 'string',
      startTime: 'string',
      timeStep: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

