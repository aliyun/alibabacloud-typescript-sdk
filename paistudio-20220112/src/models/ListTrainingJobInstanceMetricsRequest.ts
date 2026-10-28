// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrainingJobInstanceMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The end UTC time in ISO 8601 format. If left empty, the current time is used.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * trains930928remn-master-0
   */
  instanceId?: string;
  /**
   * @remarks
   * The metric type. Valid values:
   * - GpuCoreUsage: POD GPU utilization.
   * - GpuMemoryUsage: POD GPU memory utilization.
   * - CpuCoreUsage: POD CPU utilization.
   * - MemoryUsage: POD memory utilization.
   * - NetworkInputRate: POD network write rate (TCP/IP) (MB/s).
   * - NetworkOutputRate: POD network read rate (TCP/IP) (MB/s).
   * - DiskReadRate: POD disk read rate (MB/s).
   * - DiskWriteRate: POD disk write rate (MB/s).
   * 
   * This parameter is required.
   * 
   * @example
   * GpuCoreUsage
   */
  metricType?: string;
  /**
   * @remarks
   * The start UTC time in ISO 8601 format. If left empty, the job start time is used.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The metric collection interval. Valid values: 1h, 30m, 5m, and 10s. h indicates hours, m indicates minutes, and s indicates seconds.
   * 
   * @example
   * 10s
   */
  timeStep?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      metricType: 'MetricType',
      startTime: 'StartTime',
      timeStep: 'TimeStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
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

