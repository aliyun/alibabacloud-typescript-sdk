// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnosisMonitorPerformanceResponseBodyPerformances } from "./DescribeDiagnosisMonitorPerformanceResponseBodyPerformances";


export class DescribeDiagnosisMonitorPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring information about queries displayed in Gantt charts.
   */
  performances?: DescribeDiagnosisMonitorPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The threshold for the number of queries displayed in a Gantt chart. Default value: 10000.
   * 
   * >  Up to 10,000 queries can be displayed in a Gantt chart even if more queries exist.
   * 
   * @example
   * 10000
   */
  performancesThreshold?: number;
  /**
   * @remarks
   * Indicates whether all queries are returned. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  performancesTruncated?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0F1AC5FD-16E9-5399-B81F-5AC434B1D9F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      performances: 'Performances',
      performancesThreshold: 'PerformancesThreshold',
      performancesTruncated: 'PerformancesTruncated',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performances: { 'type': 'array', 'itemType': DescribeDiagnosisMonitorPerformanceResponseBodyPerformances },
      performancesThreshold: 'number',
      performancesTruncated: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performances)) {
      $dara.Model.validateArray(this.performances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

