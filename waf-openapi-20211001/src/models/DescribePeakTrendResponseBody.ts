// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePeakTrendResponseBodyFlowChart extends $dara.Model {
  /**
   * @remarks
   * The number of requests protected by the ACL module. This includes requests that are monitored and blocked.
   * 
   * @example
   * 0
   */
  aclSum?: number;
  /**
   * @remarks
   * The number of requests protected by the scan protection module. This includes requests that are monitored and blocked.
   * 
   * @example
   * 0
   */
  antiScanSum?: number;
  /**
   * @remarks
   * The number of requests protected by the CC protection module. This includes requests that are monitored and blocked.
   * 
   * @example
   * 0
   */
  ccSum?: number;
  /**
   * @remarks
   * The total number of requests.
   * 
   * @example
   * 2622
   */
  count?: number;
  /**
   * @remarks
   * The ordinal number for the time point, sorted in chronological order.
   * 
   * @example
   * 10
   */
  index?: number;
  /**
   * @remarks
   * The number of requests protected by the web attack protection module. This includes requests that are monitored and blocked.
   * 
   * @example
   * 0
   */
  wafSum?: number;
  static names(): { [key: string]: string } {
    return {
      aclSum: 'AclSum',
      antiScanSum: 'AntiScanSum',
      ccSum: 'CcSum',
      count: 'Count',
      index: 'Index',
      wafSum: 'WafSum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclSum: 'number',
      antiScanSum: 'number',
      ccSum: 'number',
      count: 'number',
      index: 'number',
      wafSum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePeakTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The QPS statistics of WAF.
   */
  flowChart?: DescribePeakTrendResponseBodyFlowChart[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9D11AC3A-A10C-56E7-A342-E87EC892BAE2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flowChart: 'FlowChart',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowChart: { 'type': 'array', 'itemType': DescribePeakTrendResponseBodyFlowChart },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flowChart)) {
      $dara.Model.validateArray(this.flowChart);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

