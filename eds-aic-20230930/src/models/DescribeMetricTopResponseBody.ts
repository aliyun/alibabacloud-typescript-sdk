// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricTopResponseBodyMetricTotalModelMetricModelListDataPoints extends $dara.Model {
  /**
   * @remarks
   * The average value. Unit: %.
   * > If the monitoring metric is instance_in_traffic or instance_out_traffic, the unit is bps.
   * 
   * @example
   * 99.52
   */
  average?: number;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * acp-fkuit0cmyru4p****
   */
  id?: string;
  /**
   * @remarks
   * The maximum value. Unit: %.
   * > If the monitoring metric is instance_in_traffic or instance_out_traffic, the unit is bps.
   * 
   * @example
   * 100
   */
  maximum?: number;
  /**
   * @remarks
   * The minimum value.
   * > If the monitoring metric is instance_in_traffic or instance_out_traffic, the unit is bps.
   * 
   * @example
   * 93.1
   */
  minimum?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * cloudPhone-****
   */
  name?: string;
  /**
   * @remarks
   * The property information.
   * > The extended property information string in JSON format is returned.
   * 
   * @example
   * {"IP":"192.168.*.***"}
   */
  properties?: string;
  /**
   * @remarks
   * The statistical timestamp. Unit: milliseconds.
   * 
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
  /**
   * @remarks
   * The monitoring statistical data points.
   */
  dataPoints?: DescribeMetricTopResponseBodyMetricTotalModelMetricModelListDataPoints[];
  /**
   * @remarks
   * The name of the monitoring metric.
   * 
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
   * @remarks
   * For instance-level monitoring, the cloud phone instance ID is returned. 
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
   * The list of metric monitoring results.
   */
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
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The list of instance monitoring results.
   */
  metricTotalModel?: DescribeMetricTopResponseBodyMetricTotalModel[];
  /**
   * @remarks
   * The token for the next query. If a single query does not return all results, the returned NextToken is not empty. You can use the returned NextToken in subsequent queries to continue the query.
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

