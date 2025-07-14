// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecentGovernanceMetricsResponseBodyGovernanceMetricsGovernanceMetric extends $dara.Model {
  /**
   * @remarks
   * The name of the governance item.
   * 
   * @example
   * RecentAccountLoginTimes
   */
  governanceItem?: string;
  /**
   * @remarks
   * The type of the metric value. Valid values:
   * 
   * *   Number
   * *   String
   * *   Boolean
   * 
   * @example
   * Number
   */
  metricType?: string;
  /**
   * @remarks
   * The metric value. The type of the metric value is determined by `MetricType`.
   * 
   * @example
   * 5
   */
  metricValue?: any;
  static names(): { [key: string]: string } {
    return {
      governanceItem: 'GovernanceItem',
      metricType: 'MetricType',
      metricValue: 'MetricValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      governanceItem: 'string',
      metricType: 'string',
      metricValue: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentGovernanceMetricsResponseBodyGovernanceMetrics extends $dara.Model {
  governanceMetric?: ListRecentGovernanceMetricsResponseBodyGovernanceMetricsGovernanceMetric[];
  static names(): { [key: string]: string } {
    return {
      governanceMetric: 'GovernanceMetric',
    };
  }

  static types(): { [key: string]: any } {
    return {
      governanceMetric: { 'type': 'array', 'itemType': ListRecentGovernanceMetricsResponseBodyGovernanceMetricsGovernanceMetric },
    };
  }

  validate() {
    if(Array.isArray(this.governanceMetric)) {
      $dara.Model.validateArray(this.governanceMetric);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentGovernanceMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the report was generated.
   * 
   * @example
   * 2025-02-10T02:11:23Z
   */
  generateTime?: string;
  /**
   * @remarks
   * The metric values of all governance items. The value of the parameter is an array, and each row in the array contains the metric value of a governance item.
   */
  governanceMetrics?: ListRecentGovernanceMetricsResponseBodyGovernanceMetrics;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 49846A91-C1C5-5C2B-BC64-8B0B7BADB4C0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      generateTime: 'GenerateTime',
      governanceMetrics: 'GovernanceMetrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generateTime: 'string',
      governanceMetrics: ListRecentGovernanceMetricsResponseBodyGovernanceMetrics,
      requestId: 'string',
    };
  }

  validate() {
    if(this.governanceMetrics && typeof (this.governanceMetrics as any).validate === 'function') {
      (this.governanceMetrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

