// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabaseInstanceMetricDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The format of the metric data. Valid values:
   * 
   * - `cpuusage&memusage`
   * 
   * - `active_session&total_session`
   * 
   * - `ins_size&data_size&log_size&tmp_size&other_size`
   * 
   * - `io`
   * 
   * @example
   * cpuusage&memusage
   */
  dataFormat?: string;
  /**
   * @remarks
   * The metric data details.
   * 
   * @example
   * [  {     \\"date"\\: " 2022-09-06T04:04:00Z",\\"value\\":\\"0.77&3.69\\"  } ]
   */
  metricData?: string;
  /**
   * @remarks
   * The name of the metric. Valid values:
   * 
   * - `MySQL_MemCpuUsage`: The CPU utilization and memory usage of the instance, as a percentage of the total resources of the operating system.
   * 
   * - `MySQL_DetailedSpaceUsage`: The total, data, log, temporary, and system disk space usage of the instance.
   * 
   * - `MySQL_Sessions`: The number of active and total connections.
   * 
   * - `MySQL_IOPS`: The IOPS of the instance.
   * 
   * @example
   * MySQL_MemCpuUsage
   */
  metricName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The unit of the metric data.
   * 
   * - %
   * 
   * - int
   * 
   * - MB
   * 
   * @example
   * %
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      metricData: 'MetricData',
      metricName: 'MetricName',
      requestId: 'RequestId',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      metricData: 'string',
      metricName: 'string',
      requestId: 'string',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

