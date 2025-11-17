// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricTopResponseBodyMetricTotalModelMetricModelListDataPoints extends $dara.Model {
  /**
   * @example
   * 99.52
   */
  average?: number;
  /**
   * @example
   * acp-fkuit0cmyru4p****
   */
  id?: string;
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
  name?: string;
  properties?: string;
  /**
   * @example
   * 1548777660000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      id: 'Id',
      maximum: 'Maximum',
      minimum: 'Minimum',
      name: 'Name',
      properties: 'Properties',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'number',
      id: 'string',
      maximum: 'number',
      minimum: 'number',
      name: 'string',
      properties: 'string',
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

export class DescribeMetricTopResponseBodyMetricTotalModelMetricModelList extends $dara.Model {
  dataPoints?: DescribeMetricTopResponseBodyMetricTotalModelMetricModelListDataPoints[];
  /**
   * @example
   * instance_in_traffic
   */
  metricName?: string;
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      metricName: 'MetricName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: { 'type': 'array', 'itemType': DescribeMetricTopResponseBodyMetricTotalModelMetricModelListDataPoints },
      metricName: 'string',
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

export class DescribeMetricTopResponseBodyMetricTotalModel extends $dara.Model {
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
  metricModelList?: DescribeMetricTopResponseBodyMetricTotalModelMetricModelList[];
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
      metricModelList: { 'type': 'array', 'itemType': DescribeMetricTopResponseBodyMetricTotalModelMetricModelList },
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

export class DescribeMetricTopResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  metricTotalModel?: DescribeMetricTopResponseBodyMetricTotalModel[];
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU+SQXzm0H9mu/FiSc****
   */
  nextToken?: string;
  /**
   * @example
   * 4610632D-D661-5982-B3D7-5D3FD183F****
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
      metricTotalModel: { 'type': 'array', 'itemType': DescribeMetricTopResponseBodyMetricTotalModel },
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

