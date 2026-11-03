// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CapacityPlanRequestDataInfo extends $dara.Model {
  /**
   * @remarks
   * The disk data metric code. Valid values:
   * - totalRawData: source data information.
   * - document: document information, which indicates the estimated number of documents.
   * - dailyIncrement: daily data increment.
   * - dailyIncrement: daily document increment.
   * - retentionTime: data retention period.
   * - replica: replica settings.
   * 
   * @example
   * totalRawData
   */
  code?: string;
  /**
   * @remarks
   * The metric value for disk usage.
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
   * - hot: hot data.
   * - warm: warm data.
   * 
   * @example
   * hot
   */
  type?: string;
  /**
   * @remarks
   * The data unit or time unit. Valid values:
   * - Data units: MiB, GiB, TB, and PB.
   * - Time units: DAYS, WEEKS, MONTHS, and YEARS.
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
   * - write: write.
   * - search: search.
   * 
   * @example
   * write
   */
  code?: string;
  /**
   * @remarks
   * The number of concurrent requests.
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
   * The expected average response time. Unit: milliseconds.
   * 
   * @example
   * 100
   */
  responseTime?: number;
  /**
   * @remarks
   * The throughput. Unit: MB/s.
   * 
   * @example
   * 100
   */
  throughput?: number;
  /**
   * @remarks
   * The peak type for search or write operations. Valid values:
   * - common: normal.
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
   * Indicates whether complex aggregation queries are required. Valid values:
   * - true: Yes.
   * - false: No.
   * Default value: false.
   * 
   * @example
   * true
   */
  complexQueryAvailable?: boolean;
  /**
   * @remarks
   * The disk usage.
   */
  dataInfo?: CapacityPlanRequestDataInfo[];
  /**
   * @remarks
   * The metric information such as disk usage, search and write performance, and aggregate requests.
   */
  metric?: CapacityPlanRequestMetric[];
  /**
   * @remarks
   * Scenarios. Valid values:
   * - general: general scenarios.
   * - analysisVisualization: data analytics scenarios.
   * - dbAcceleration: database acceleration scenarios.
   * - search: search scenarios.
   * - log: log scenarios.
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

