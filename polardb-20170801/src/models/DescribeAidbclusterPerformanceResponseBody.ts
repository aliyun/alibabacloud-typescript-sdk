// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterPerformanceResponseBodyPerformanceKeysPoints extends $dara.Model {
  /**
   * @remarks
   * The UNIX timestamp that indicates when the metric was collected. Unit: milliseconds.
   * 
   * @example
   * 1724206183
   */
  timestamp?: number;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 42.38
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterPerformanceResponseBodyPerformanceKeys extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster node.
   * 
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The performance metric.
   * 
   * @example
   * PolarDBAIModelCall
   */
  measurement?: string;
  /**
   * @remarks
   * The name of the specific performance metric.
   * 
   * @example
   * model_input_amount
   */
  metricName?: string;
  /**
   * @remarks
   * The array of performance data.
   */
  points?: DescribeAIDBClusterPerformanceResponseBodyPerformanceKeysPoints[];
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      measurement: 'Measurement',
      metricName: 'MetricName',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      measurement: 'string',
      metricName: 'string',
      points: { 'type': 'array', 'itemType': DescribeAIDBClusterPerformanceResponseBodyPerformanceKeysPoints },
    };
  }

  validate() {
    if(Array.isArray(this.points)) {
      $dara.Model.validateArray(this.points);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API key for the model service.
   * 
   * @example
   * xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The ID of the database cluster.
   * 
   * @example
   * pc-a************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The type of the database engine. Only **polardb_ai** is supported.
   * 
   * @example
   * polardb_ai
   */
  DBType?: string;
  /**
   * @remarks
   * The version number of the database AI engine.
   * 
   * Example: 3.0
   * 
   * @example
   * 3.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The end of the time range that was queried. The time is in the `YYYY-MM-DDThh:mmZ` format and is in UTC.
   * 
   * @example
   * 2022-11-16T16:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time granularity of the performance data. Valid values:
   * 
   * - 60
   * - 3600
   * 
   * @example
   * 60
   */
  interval?: string;
  /**
   * @remarks
   * The details of the instance performance parameters.
   */
  performanceKeys?: DescribeAIDBClusterPerformanceResponseBodyPerformanceKeys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD86******
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range that was queried. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and is in UTC.
   * 
   * @example
   * 2022-11-15T16:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      endTime: 'EndTime',
      interval: 'Interval',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      DBClusterId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      endTime: 'string',
      interval: 'string',
      performanceKeys: { 'type': 'array', 'itemType': DescribeAIDBClusterPerformanceResponseBodyPerformanceKeys },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performanceKeys)) {
      $dara.Model.validateArray(this.performanceKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

