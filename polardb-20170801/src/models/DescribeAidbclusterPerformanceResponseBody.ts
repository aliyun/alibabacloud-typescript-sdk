// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterPerformanceResponseBodyPerformanceKeysPoints extends $dara.Model {
  /**
   * @remarks
   * The specific time point of the monitoring metric. The format is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1724206183
   */
  timestamp?: number;
  /**
   * @remarks
   * The data value of the monitoring metric.
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
   * The ID of the database cluster node.
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
   * An API key for the model service.
   * 
   * @example
   * 6c4b1f0317cd4fd7a5b446d3503d**
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
   * 
   *   -3.0
   * 
   * @example
   * 3.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The end time of the query. The end time must be later than the start time. The format is YYYY-MM-DDThh:mmZ (UTC).
   * 
   * @example
   * 2022-11-16T16:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The data granularity of the performance data. Valid values:
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
   * The details of the instance performance metrics.
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
   * The start time of the query. The format is yyyy-MM-ddTHH:mm:ssZ (UTC).
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

