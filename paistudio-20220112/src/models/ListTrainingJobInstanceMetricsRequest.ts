// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrainingJobInstanceMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * End time in UTC, in ISO 8601 format. If empty, use the current time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * trains930928remn-master-0
   */
  instanceId?: string;
  /**
   * @remarks
   * Metric type:
   * 
   * - GpuCoreUsage: POD GPU usage
   * 
   * - GpuMemoryUsage: POD GPU memory usage
   * 
   * - CpuCoreUsage: POD CPU usage
   * 
   * - MemoryUsage: POD memory usage
   * 
   * - NetworkInputRate: POD network input rate (TCP/IP) (MB/s)
   * 
   * - NetworkOutputRate: POD network output rate (TCP/IP) (MB/s)
   * 
   * - DiskReadRate: POD disk read rate (MB/s)
   * 
   * - DiskWriteRate: POD disk write rate (MB/s)
   * 
   * This parameter is required.
   * 
   * @example
   * GpuCoreUsage
   */
  metricType?: string;
  /**
   * @remarks
   * Start time in UTC, in ISO 8601 format. If empty, use the job start time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Time interval. Valid values: 1h, 30m, 5m, 10s.
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

