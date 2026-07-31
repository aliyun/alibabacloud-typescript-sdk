// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrepayDailyBillsResponseBodyBills extends $dara.Model {
  /**
   * @remarks
   * The burstable QPS specification of the WAF instance.
   * 
   * @example
   * 100
   */
  elasticQpsSetValue?: number;
  /**
   * @remarks
   * The end time of the billing record. The value is a UNIX timestamp (UTC). Unit: seconds.
   * 
   * @example
   * 1687591200
   */
  endTime?: number;
  /**
   * @remarks
   * The overuse status of the current period. Valid values:
   * - **0**: Normal.
   * - **1**: overused.
   * - **2**: sandboxed.
   * 
   * @example
   * 0
   */
  exceedStatus?: number;
  /**
   * @remarks
   * Indicates whether the extension plug-in is enabled. Valid values:
   * - **true**: The extension plug-in is enabled.
   * - **false**: The extension plug-in is not enabled.
   * 
   * @example
   * true
   */
  extensionPlugin?: boolean;
  /**
   * @remarks
   * The number of requests processed by the plug-in.
   * 
   * @example
   * 100
   */
  extensionPluginRequest?: number;
  /**
   * @remarks
   * The maximum QPS during the current period.
   * 
   * @example
   * 600
   */
  maxQps?: number;
  /**
   * @remarks
   * The unit price for burstable billing. Unit: CNY for the China site and USD for the international site.
   * 
   * @example
   * 0.25
   */
  price?: number;
  /**
   * @remarks
   * The QPS extension specification of the WAF instance.
   * 
   * @example
   * 10
   */
  qps?: number;
  /**
   * @remarks
   * The QPS specification included in the WAF instance edition.
   * 
   * @example
   * 10
   */
  qpsVersion?: number;
  /**
   * @remarks
   * Indicates whether risk identification is enabled. Valid values:
   * - **true**: Risk identification is enabled.
   * - **false**: Risk identification is not enabled.
   * 
   * @example
   * true
   */
  riskControl?: boolean;
  /**
   * @remarks
   * The number of times risk identification is used.
   * 
   * @example
   * 100
   */
  riskTraffic?: number;
  /**
   * @remarks
   * The start time of the billing record. The value is a UNIX timestamp (UTC). Unit: seconds.
   * 
   * @example
   * 1687822980
   */
  startTime?: number;
  /**
   * @remarks
   * The total QPS that is billed.
   * 
   * @example
   * 0
   */
  total?: number;
  /**
   * @remarks
   * The burstable billing type.
   */
  type?: string[];
  static names(): { [key: string]: string } {
    return {
      elasticQpsSetValue: 'ElasticQpsSetValue',
      endTime: 'EndTime',
      exceedStatus: 'ExceedStatus',
      extensionPlugin: 'ExtensionPlugin',
      extensionPluginRequest: 'ExtensionPluginRequest',
      maxQps: 'MaxQps',
      price: 'Price',
      qps: 'Qps',
      qpsVersion: 'QpsVersion',
      riskControl: 'RiskControl',
      riskTraffic: 'RiskTraffic',
      startTime: 'StartTime',
      total: 'Total',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticQpsSetValue: 'number',
      endTime: 'number',
      exceedStatus: 'number',
      extensionPlugin: 'boolean',
      extensionPluginRequest: 'number',
      maxQps: 'number',
      price: 'number',
      qps: 'number',
      qpsVersion: 'number',
      riskControl: 'boolean',
      riskTraffic: 'number',
      startTime: 'number',
      total: 'number',
      type: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.type)) {
      $dara.Model.validateArray(this.type);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePrepayDailyBillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of WAF burstable billing records.
   */
  bills?: DescribePrepayDailyBillsResponseBodyBills[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC10C9EA-A367-52D5-***-***
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bills: 'Bills',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bills: { 'type': 'array', 'itemType': DescribePrepayDailyBillsResponseBodyBills },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bills)) {
      $dara.Model.validateArray(this.bills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

