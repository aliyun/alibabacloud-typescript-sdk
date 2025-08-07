// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterPerformanceResponseBodyPerformanceKeysPoints extends $dara.Model {
  /**
   * @example
   * 1724206183
   */
  timestamp?: number;
  /**
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
   * @example
   * pi-*************
   */
  DBNodeId?: string;
  /**
   * @example
   * PolarDBAIModelCall
   */
  measurement?: string;
  /**
   * @example
   * model_input_amount
   */
  metricName?: string;
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
   * @example
   * xxx
   */
  apiKey?: string;
  /**
   * @example
   * pc-a************
   */
  DBClusterId?: string;
  /**
   * @example
   * polardb_ai
   */
  DBType?: string;
  /**
   * @example
   * 3.0
   */
  DBVersion?: string;
  /**
   * @example
   * 2022-11-16T16:00Z
   */
  endTime?: string;
  /**
   * @example
   * 60
   */
  interval?: string;
  performanceKeys?: DescribeAIDBClusterPerformanceResponseBodyPerformanceKeys[];
  /**
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD86******
   */
  requestId?: string;
  /**
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

