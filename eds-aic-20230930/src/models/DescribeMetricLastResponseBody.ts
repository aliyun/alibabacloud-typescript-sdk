// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricLastResponseBodyMetricTotalModelMetricModelListDataPoints extends $dara.Model {
  /**
   * @example
   * 99.52
   */
  average?: number;
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
   * @example
   * 50
   */
  cpuUsage?: number;
  /**
   * @example
   * 50
   */
  memoryUsage?: number;
  /**
   * @example
   * com.offerup
   */
  name?: string;
  processIds?: number[];
  /**
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
  dataPoints?: DescribeMetricLastResponseBodyMetricTotalModelMetricModelListDataPoints[];
  /**
   * @example
   * cpu_utilization
   */
  metricName?: string;
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
   * @example
   * acp-fkuit0cmyru4p****
   */
  androidInstanceId?: string;
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
   * @example
   * 100
   */
  count?: number;
  metricTotalModel?: DescribeMetricLastResponseBodyMetricTotalModel[];
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
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

