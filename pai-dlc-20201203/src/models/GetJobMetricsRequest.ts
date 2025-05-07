// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the time range to query monitoring data. The time is displayed in UTC. The default value is the current time.
   * 
   * @example
   * 2020-11-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The type of the monitoring metrics. Valid values:
   * 
   * *   GpuCoreUsage: GPU utilization
   * *   GpuMemoryUsage: GPU memory utilization
   * *   CpuCoreUsage: CPU utilization
   * *   MemoryUsage: memory utilization
   * *   NetworkInputRate: the network write in rate.
   * *   NetworkOutputRate: the network write out rate
   * *   DiskReadRate: the disk read rate
   * *   DiskWriteRate: the disk write rate
   * 
   * This parameter is required.
   * 
   * @example
   * GpuMemoryUsage
   */
  metricType?: string;
  /**
   * @remarks
   * The beginning of the time range to query monitoring data. The time is displayed in UTC. The default value is the time 1 hour before the current time.
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The interval at which monitoring data is returned. Default value: 5. Unit: minutes.
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

