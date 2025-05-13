// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

