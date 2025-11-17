// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricListResponseBodyMetricTotalModelMetricModelListDataPoints extends $dara.Model {
  /**
   * @example
   * 99.52
   */
  average?: number;
  /**
   * @example
   * cpn-1t1bxvp9az2pk****-gpu-0
   */
  gpuId?: string;
  /**
   * @example
   * 100
   */
  maximum?: number;
  /**
   * @example
   * 93.1
   */
  minimum?: number;
  /**
   * @example
   * 1548777660000
   */
  timestamp?: number;
  /**
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
  dataPoints?: DescribeMetricListResponseBodyMetricTotalModelMetricModelListDataPoints[];
  /**
   * @example
   * cpu_utilization
   */
  metricName?: string;
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
   * @example
   * acp-fkuit0cmyru4p****
   */
  androidInstanceId?: string;
  /**
   * @example
   * np-5hh4a31emkt6u****
   */
  instanceId?: string;
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
   * @example
   * 1
   */
  count?: number;
  metricTotalModel?: DescribeMetricListResponseBodyMetricTotalModel[];
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
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

