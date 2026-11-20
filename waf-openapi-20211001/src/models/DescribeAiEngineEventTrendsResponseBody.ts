// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAiEngineEventTrendsResponseBodyPointsRiskCounts extends $dara.Model {
  /**
   * @remarks
   * The number of critical events.
   * 
   * @example
   * 0
   */
  critical?: number;
  /**
   * @remarks
   * The number of high-risk events.
   * 
   * @example
   * 1
   */
  high?: number;
  /**
   * @remarks
   * The number of low-risk events.
   * 
   * @example
   * 0
   */
  low?: number;
  /**
   * @remarks
   * The number of medium-risk events.
   * 
   * @example
   * 0
   */
  medium?: number;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      high: 'High',
      low: 'Low',
      medium: 'Medium',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: 'number',
      high: 'number',
      low: 'number',
      medium: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAiEngineEventTrendsResponseBodyPoints extends $dara.Model {
  /**
   * @remarks
   * The number of events first discovered within the time period.
   * 
   * @example
   * 1
   */
  eventCount?: number;
  /**
   * @remarks
   * The number of events within the time period, aggregated by risk level.
   */
  riskCounts?: DescribeAiEngineEventTrendsResponseBodyPointsRiskCounts;
  /**
   * @remarks
   * The start time of the statistical period in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1792973400000
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      eventCount: 'EventCount',
      riskCounts: 'RiskCounts',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCount: 'number',
      riskCounts: DescribeAiEngineEventTrendsResponseBodyPointsRiskCounts,
      time: 'number',
    };
  }

  validate() {
    if(this.riskCounts && typeof (this.riskCounts as any).validate === 'function') {
      (this.riskCounts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAiEngineEventTrendsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The aggregation interval, which is automatically selected based on the query time range. Valid values:
   * 
   * - **1m**: 1 minute
   * - **5m**: 5 minutes
   * - **15m**: 15 minutes
   * - **1h**: 1 hour
   * - **1d**: 1 day
   * 
   * @example
   * 1m
   */
  aggregateInterval?: string;
  /**
   * @remarks
   * The time series data of events aggregated by first discovery time, sorted in ascending order of time.
   */
  points?: DescribeAiEngineEventTrendsResponseBodyPoints[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 01A****-1219-019A-8B44-2557C*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateInterval: 'AggregateInterval',
      points: 'Points',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateInterval: 'string',
      points: { 'type': 'array', 'itemType': DescribeAiEngineEventTrendsResponseBodyPoints },
      requestId: 'string',
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

