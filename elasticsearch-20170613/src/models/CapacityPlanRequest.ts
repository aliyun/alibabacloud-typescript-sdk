// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CapacityPlanRequestDataInfo extends $dara.Model {
  /**
   * @remarks
   * The disk data metric code. Valid values:
   * 
   * - totalRawData: source data information
   * - document: data document information, estimated number of documents
   * - dailyIncrement: daily data growth
   * - dailyIncrement: daily incremental documents
   * - retentionTime: data retention period
   * - replica: replica settings.
   * 
   * @example
   * totalRawData
   */
  code?: string;
  /**
   * @remarks
   * The metric value of disk usage.
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * The total number of data entries.
   * 
   * @example
   * 10000
   */
  totalCount?: number;
  /**
   * @remarks
   * The disk data type. Valid values:
   * 
   * - hot: hot data
   * - warm: warm data.
   * 
   * @example
   * hot
   */
  type?: string;
  /**
   * @remarks
   * The data unit or time unit. Valid values:
   * 
   * - Data units: MiB, GiB, TB, PB
   * - Time units: DAYS, WEEKS, MONTHS, YEARS.
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
   * The average QPS.
   * 
   * @example
   * 30
   */
  averageQps?: number;
  /**
   * @remarks
   * The search or write metric code. Valid values:
   * 
   * - write: write
   * - search: search.
   * 
   * @example
   * write
   */
  code?: string;
  /**
   * @remarks
   * The number of concurrent connections.
   * 
   * @example
   * 2
   */
  concurrent?: number;
  /**
   * @remarks
   * The peak QPS.
   * 
   * @example
   * 30
   */
  peakQps?: number;
  /**
   * @remarks
   * The expected average response time, in milliseconds.
   * 
   * @example
   * 100
   */
  responseTime?: number;
  /**
   * @remarks
   * The throughput, in MB/s.
   * 
   * @example
   * 100
   */
  throughput?: number;
  /**
   * @remarks
   * The search or write peak type. Valid values:
   * 
   * - common: normal
   * - peak: peak.
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
   * Specifies whether complex aggregate query is required. Valid values:
   * 
   * - true: Required.
   * - false (default): Not required.
   * 
   * @example
   * true
   */
  complexQueryAvailable?: boolean;
  /**
   * @remarks
   * The disk usage information.
   */
  dataInfo?: CapacityPlanRequestDataInfo[];
  /**
   * @remarks
   * The metric information, including disk usage, search and write operations, and aggregation requests.
   */
  metric?: CapacityPlanRequestMetric[];
  /**
   * @remarks
   * Scenarios. Valid values:
   * 
   * - general: general-purpose scenario
   * - analysisVisualization: data analytics scenario
   * - dbAcceleration: database acceleration scenario
   * - search: search scenario
   * - log: log scenario.
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

