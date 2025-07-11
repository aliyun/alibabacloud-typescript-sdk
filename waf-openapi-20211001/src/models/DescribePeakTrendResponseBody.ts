// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePeakTrendResponseBodyFlowChart extends $dara.Model {
  /**
   * @remarks
   * The number of requests that are monitored or blocked by the custom rule (access control) module.
   * 
   * @example
   * 0
   */
  aclSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored or blocked by the scan protection module.
   * 
   * @example
   * 0
   */
  antiScanSum?: number;
  /**
   * @remarks
   * The number of requests that are monitored or blocked by the HTTP flood protection module.
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
   * The serial number of the time interval. The serial numbers are arranged in chronological order.
   * 
   * @example
   * 10
   */
  index?: number;
  /**
   * @remarks
   * The number of requests that are monitored or blocked by the regular expression protection engine.
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
   * An array of the QPS statistics of the WAF instance.
   */
  flowChart?: DescribePeakTrendResponseBodyFlowChart[];
  /**
   * @remarks
   * The ID of the request.
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

