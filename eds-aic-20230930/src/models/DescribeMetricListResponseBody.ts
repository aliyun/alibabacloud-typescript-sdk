// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricListResponseBodyMetricTotalModelMetricModelListDataPoints extends $dara.Model {
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
  /**
   * @remarks
   * The data value. Unit: %.
   * 
   * > The unit is bps when the metric is \\`bandwidth_package_usage_out\\` or \\`bandwidth_package_usage_in\\`.
   * 
   * @example
   * tf-testacc-oos-parameter
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      gpuId: 'GpuId',
      maximum: 'Maximum',
      minimum: 'Minimum',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'number',
      gpuId: 'string',
      maximum: 'number',
      minimum: 'number',
      timestamp: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricListResponseBodyMetricTotalModelMetricModelList extends $dara.Model {
  /**
   * @remarks
   * A list of monitoring data points.
   */
  dataPoints?: DescribeMetricListResponseBodyMetricTotalModelMetricModelListDataPoints[];
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
   * The process name.
   * 
   * @example
   * Required
   */
  processName?: string;
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      metricName: 'MetricName',
      processName: 'ProcessName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: { 'type': 'array', 'itemType': DescribeMetricListResponseBodyMetricTotalModelMetricModelListDataPoints },
      metricName: 'string',
      processName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataPoints)) {
      $dara.Model.validateArray(this.dataPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricListResponseBodyMetricTotalModel extends $dara.Model {
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
   * The instance ID.
   * 
   * @example
   * np-5hh4a31emkt6u****
   */
  instanceId?: string;
  /**
   * @remarks
   * The monitoring data for metrics.
   */
  metricModelList?: DescribeMetricListResponseBodyMetricTotalModelMetricModelList[];
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      instanceId: 'InstanceId',
      metricModelList: 'MetricModelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
      instanceId: 'string',
      metricModelList: { 'type': 'array', 'itemType': DescribeMetricListResponseBodyMetricTotalModelMetricModelList },
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

export class DescribeMetricListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of records.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The instance monitoring data.
   */
  metricTotalModel?: DescribeMetricListResponseBodyMetricTotalModel[];
  /**
   * @remarks
   * The token for the next query. If not all results are returned, this parameter is not empty. Use the returned token to query the next page.
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
   * 425F351C-3F8E-5218-A520-B6311D0D****
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
      metricTotalModel: { 'type': 'array', 'itemType': DescribeMetricListResponseBodyMetricTotalModel },
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

