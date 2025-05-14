// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2020-11-08T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The metric type. Valid values:
   * 
   * *   GpuCoreUsage: the GPU utilization.
   * *   GpuMemoryUsage: the GPU memory utilization.
   * *   CpuCoreUsage: the CPU utilization.
   * *   MemoryUsage: the memory utilization.
   * *   NetworkInputRate: the network ingress rate.
   * *   NetworkOutputRate: the network egress rate.
   * *   DiskReadRate: the disk read rate.
   * *   DiskWriteRate: the disk write rate.
   * 
   * This parameter is required.
   * 
   * @example
   * GpuCoreUsage
   */
  metricType?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 2020-11-08T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The interval at which metrics are returned. Unit: minutes.
   * 
   * @example
   * 15m
   */
  timeStep?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      metricType: 'MetricType',
      startTime: 'StartTime',
      timeStep: 'TimeStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      metricType: 'string',
      startTime: 'string',
      timeStep: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

