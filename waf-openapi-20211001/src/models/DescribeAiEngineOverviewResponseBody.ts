// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAiEngineOverviewResponseBodyHandleStatusCounts extends $dara.Model {
  /**
   * @remarks
   * The number of handled events.
   * 
   * @example
   * 0
   */
  handled?: number;
  /**
   * @remarks
   * The number of events that are being handled.
   * 
   * @example
   * 0
   */
  handling?: number;
  /**
   * @remarks
   * The number of unhandled events.
   * 
   * @example
   * 1
   */
  unhandled?: number;
  static names(): { [key: string]: string } {
    return {
      handled: 'Handled',
      handling: 'Handling',
      unhandled: 'Unhandled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handled: 'number',
      handling: 'number',
      unhandled: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAiEngineOverviewResponseBodyRiskCounts extends $dara.Model {
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

export class DescribeAiEngineOverviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of analyzed requests.
   * 
   * @example
   * 1000000
   */
  analyzedRequestCount?: number;
  /**
   * @remarks
   * The number of events within the specified time range.
   * 
   * @example
   * 1
   */
  eventCount?: number;
  /**
   * @remarks
   * The number of events categorized by handling status within the specified time range.
   */
  handleStatusCounts?: DescribeAiEngineOverviewResponseBodyHandleStatusCounts;
  /**
   * @remarks
   * The number of protection groups for which AI Engine is enabled.
   * 
   * @example
   * 2
   */
  protectedGroupCount?: number;
  /**
   * @remarks
   * The number of protected resources for which AI Engine is enabled. This number does not include protected resources in protection groups.
   * 
   * @example
   * 9
   */
  protectedResourceCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 01A1CEE****-019A-8B44-255****F9C2C8
   */
  requestId?: string;
  /**
   * @remarks
   * The number of events categorized by risk level within the specified time range.
   */
  riskCounts?: DescribeAiEngineOverviewResponseBodyRiskCounts;
  static names(): { [key: string]: string } {
    return {
      analyzedRequestCount: 'AnalyzedRequestCount',
      eventCount: 'EventCount',
      handleStatusCounts: 'HandleStatusCounts',
      protectedGroupCount: 'ProtectedGroupCount',
      protectedResourceCount: 'ProtectedResourceCount',
      requestId: 'RequestId',
      riskCounts: 'RiskCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzedRequestCount: 'number',
      eventCount: 'number',
      handleStatusCounts: DescribeAiEngineOverviewResponseBodyHandleStatusCounts,
      protectedGroupCount: 'number',
      protectedResourceCount: 'number',
      requestId: 'string',
      riskCounts: DescribeAiEngineOverviewResponseBodyRiskCounts,
    };
  }

  validate() {
    if(this.handleStatusCounts && typeof (this.handleStatusCounts as any).validate === 'function') {
      (this.handleStatusCounts as any).validate();
    }
    if(this.riskCounts && typeof (this.riskCounts as any).validate === 'function') {
      (this.riskCounts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

