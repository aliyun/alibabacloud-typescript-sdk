// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CapacityPlanRequestDataInfo extends $dara.Model {
  /**
   * @remarks
   * Disk data metric code. Options:
   * 
   * - totalRawData: Raw data information
   * - document: Data document information, estimated document count
   * - dailyIncrement: Daily data growth
   * - dailyIncrementDoc: Daily incremental document count
   * - retentionTime: Data retention period
   * - replica: Replica settings
   * 
   * @example
   * totalRawData
   */
  code?: string;
  /**
   * @remarks
   * Disk usage metric value.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * Total number of data entries.
   * 
   * @example
   * 10000
   */
  totalCount?: number;
  /**
   * @remarks
   * Disk data type. Options:
   * 
   * - hot: Hot data
   * - warm: Cold data
   * 
   * @example
   * hot
   */
  type?: string;
  /**
   * @remarks
   * Data or time unit. Options:
   * 
   * - Data units: MiB, GiB, TB, PB
   * - Time units: DAYS, WEEKS, MONTHS, YEARS
   * 
   * @example
   * MiB
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      size: 'size',
      totalCount: 'totalCount',
      type: 'type',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      size: 'number',
      totalCount: 'number',
      type: 'string',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CapacityPlanRequestMetric extends $dara.Model {
  /**
   * @remarks
   * Average QPS.
   * 
   * @example
   * 30
   */
  averageQps?: number;
  /**
   * @remarks
   * Search or write metric code. Options:
   * 
   * - write: Write
   * - search: Search
   * 
   * @example
   * write
   */
  code?: string;
  /**
   * @remarks
   * Concurrent number.
   * 
   * @example
   * 2
   */
  concurrent?: number;
  /**
   * @remarks
   * Peak QPS.
   * 
   * @example
   * 30
   */
  peakQps?: number;
  /**
   * @remarks
   * Expected average response time, unit: milliseconds.
   * 
   * @example
   * 100
   */
  responseTime?: number;
  /**
   * @remarks
   * Throughput, unit: MB/S.
   * 
   * @example
   * 100
   */
  throughput?: number;
  /**
   * @remarks
   * Search/write peak type. Options:
   * 
   * - common: Regular
   * - peak: Peak
   * 
   * @example
   * common
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      averageQps: 'averageQps',
      code: 'code',
      concurrent: 'concurrent',
      peakQps: 'peakQps',
      responseTime: 'responseTime',
      throughput: 'throughput',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageQps: 'number',
      code: 'string',
      concurrent: 'number',
      peakQps: 'number',
      responseTime: 'number',
      throughput: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CapacityPlanRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether there is a need for complex aggregation queries. Options:
   * 
   * - true: Yes
   * - false (default): No
   * 
   * @example
   * true
   */
  complexQueryAvailable?: boolean;
  /**
   * @remarks
   * Disk usage status.
   */
  dataInfo?: CapacityPlanRequestDataInfo[];
  /**
   * @remarks
   * Metrics information including disk usage, search and write operations, aggregation requests, etc.
   */
  metric?: CapacityPlanRequestMetric[];
  /**
   * @remarks
   * Usage scenarios, options:
   * 
   * - general: General scenario
   * - analysisVisualization: Data analysis scenario
   * - dbAcceleration: Database acceleration scenario
   * - search: Search scenario
   * - log: Log scenario
   * 
   * @example
   * general
   */
  usageScenario?: string;
  static names(): { [key: string]: string } {
    return {
      complexQueryAvailable: 'complexQueryAvailable',
      dataInfo: 'dataInfo',
      metric: 'metric',
      usageScenario: 'usageScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complexQueryAvailable: 'boolean',
      dataInfo: { 'type': 'array', 'itemType': CapacityPlanRequestDataInfo },
      metric: { 'type': 'array', 'itemType': CapacityPlanRequestMetric },
      usageScenario: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataInfo)) {
      $dara.Model.validateArray(this.dataInfo);
    }
    if(Array.isArray(this.metric)) {
      $dara.Model.validateArray(this.metric);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

