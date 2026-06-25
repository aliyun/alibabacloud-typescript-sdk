// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricLastResponseBodyMetricTotalModelMetricModelListDataPoints extends $dara.Model {
  /**
   * @remarks
   * The average value. Unit: %.
   * 
   * > The unit is bps when the metric is \\`bandwidth_package_usage_out\\` or \\`bandwidth_package_usage_in\\`.
   * 
   * @example
   * 99.52
   */
  average?: number;
  /**
   * @remarks
   * The GPU ID.
   * 
   * @example
   * cpn-1t1bxvp9az2pk****-gpu-0
   */
  gpuId?: string;
  /**
   * @remarks
   * The maximum value. Unit: %.
   * 
   * > The unit is bps when the metric is \\`bandwidth_package_usage_out\\` or \\`bandwidth_package_usage_in\\`.
   * 
   * @example
   * 100
   */
  maximum?: number;
  /**
   * @remarks
   * The minimum value. Unit: %.
   * 
   * > The unit is bps when the metric is \\`bandwidth_package_usage_out\\` or \\`bandwidth_package_usage_in\\`.
   * 
   * @example
   * 93.1
   */
  minimum?: number;
  /**
   * @remarks
   * The timestamp of the statistics. Unit: milliseconds.
   * 
   * @example
   * 1548777660000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      gpuId: 'GpuId',
      maximum: 'Maximum',
      minimum: 'Minimum',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'number',
      gpuId: 'string',
      maximum: 'number',
      minimum: 'number',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricLastResponseBodyMetricTotalModelMetricModelListProcessLastInfos extends $dara.Model {
  /**
   * @remarks
   * The CPU utilization. Unit: %.
   * 
   * @example
   * 50
   */
  cpuUsage?: number;
  /**
   * @remarks
   * The memory usage. Unit: %.
   * 
   * @example
   * 50
   */
  memoryUsage?: number;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * com.offerup
   */
  name?: string;
  /**
   * @remarks
   * The list of process IDs.
   */
  processIds?: number[];
  /**
   * @remarks
   * The timestamp of the statistics. Unit: milliseconds.
   * 
   * @example
   * 1548777660000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      cpuUsage: 'CpuUsage',
      memoryUsage: 'MemoryUsage',
      name: 'Name',
      processIds: 'ProcessIds',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuUsage: 'number',
      memoryUsage: 'number',
      name: 'string',
      processIds: { 'type': 'array', 'itemType': 'number' },
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.processIds)) {
      $dara.Model.validateArray(this.processIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricLastResponseBodyMetricTotalModelMetricModelList extends $dara.Model {
  /**
   * @remarks
   * The monitoring data points.
   */
  dataPoints?: DescribeMetricLastResponseBodyMetricTotalModelMetricModelListDataPoints[];
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * cpu_utilization
   */
  metricName?: string;
  /**
   * @remarks
   * The process monitoring metrics.
   * 
   * > This parameter is returned when the metric is \\`process_cpu\\` or \\`process_memory\\`.
   */
  processLastInfos?: DescribeMetricLastResponseBodyMetricTotalModelMetricModelListProcessLastInfos[];
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      metricName: 'MetricName',
      processLastInfos: 'ProcessLastInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: { 'type': 'array', 'itemType': DescribeMetricLastResponseBodyMetricTotalModelMetricModelListDataPoints },
      metricName: 'string',
      processLastInfos: { 'type': 'array', 'itemType': DescribeMetricLastResponseBodyMetricTotalModelMetricModelListProcessLastInfos },
    };
  }

  validate() {
    if(Array.isArray(this.dataPoints)) {
      $dara.Model.validateArray(this.dataPoints);
    }
    if(Array.isArray(this.processLastInfos)) {
      $dara.Model.validateArray(this.processLastInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricLastResponseBodyMetricTotalModel extends $dara.Model {
  /**
   * @remarks
   * For instance-level monitoring, the Cloud Phone instance ID is returned.
   * <props="china">For matrix-level monitoring, the matrix ID is returned.
   * 
   * @example
   * acp-fkuit0cmyru4p****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The monitoring data for metrics.
   */
  metricModelList?: DescribeMetricLastResponseBodyMetricTotalModelMetricModelList[];
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      metricModelList: 'MetricModelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      metricModelList: { 'type': 'array', 'itemType': DescribeMetricLastResponseBodyMetricTotalModelMetricModelList },
    };
  }

  validate() {
    if(Array.isArray(this.metricModelList)) {
      $dara.Model.validateArray(this.metricModelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricLastResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of records.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The instance monitoring data.
   */
  metricTotalModel?: DescribeMetricLastResponseBodyMetricTotalModel[];
  /**
   * @remarks
   * The token for the next query. If not all results are returned in a single query, the returned NextToken is not empty. You can use the returned NextToken in the next query to query the next page.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2B9E6946-0E2A-5D2B-B275-361DF81F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      metricTotalModel: 'MetricTotalModel',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      metricTotalModel: { 'type': 'array', 'itemType': DescribeMetricLastResponseBodyMetricTotalModel },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metricTotalModel)) {
      $dara.Model.validateArray(this.metricTotalModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

