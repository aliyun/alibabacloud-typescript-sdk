// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnosisMonitorPerformanceResponseBodyPerformances } from "./DescribeDiagnosisMonitorPerformanceResponseBodyPerformances";


export class DescribeDiagnosisMonitorPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of query execution.
   */
  performances?: DescribeDiagnosisMonitorPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The threshold for the number of queries.
   * 
   * @example
   * 10000
   */
  performancesThreshold?: number;
  /**
   * @remarks
   * Indicates whether the queries are truncated when the number of queries exceeds the threshold. Valid values:
   * 
   * *   **true**: The queries are truncated.
   * *   **false**: The queries are not truncated.
   * 
   * @example
   * false
   */
  performancesTruncated?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
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

