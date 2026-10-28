// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the time range for querying monitoring data, in UTC. Default value: the current time.
   * 
   * @example
   * 2020-11-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The metric type of the monitoring data to query. Valid values:
   * - GpuCoreUsage: the GPU usage
   * - GpuMemoryUsage: the GPU memory usage
   * - CpuCoreUsage: the CPU usage
   * - MemoryUsage: the memory usage
   * - NetworkInputRate: the network input rate
   * - NetworkOutputRate: the network output rate
   * - DiskReadRate: the disk read rate
   * - DiskWriteRate: the disk write rate
   * 
   * This parameter is required.
   * 
   * @example
   * GpuMemoryUsage
   */
  metricType?: string;
  /**
   * @remarks
   * The start time of the time range for querying monitoring data, in UTC. Default value: 1 hour ago.
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

