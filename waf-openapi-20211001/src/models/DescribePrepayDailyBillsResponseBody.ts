// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrepayDailyBillsResponseBodyBills extends $dara.Model {
  /**
   * @remarks
   * Elastic QPS specification for the WAF instance.
   * 
   * @example
   * 100
   */
  elasticQpsSetValue?: number;
  /**
   * @remarks
   * End time of the billing period, in Unix timestamp format (UTC), measured in seconds.
   * 
   * @example
   * 1687591200
   */
  endTime?: number;
  /**
   * @remarks
   * Overuse status for the current period. Valid values:
   * 
   * - **0**: Normal.
   * 
   * - **1**: Overused.
   * 
   * - **2**: Sandbox.
   * 
   * @example
   * 0
   */
  exceedStatus?: number;
  /**
   * @remarks
   * Maximum QPS for the current period.
   * 
   * @example
   * 600
   */
  maxQps?: number;
  /**
   * @remarks
   * Unit price for burstable charges. Unit: CNY for the Alibaba Cloud China Website (www\\.aliyun.com) and USD for the Alibaba Cloud International Website (www\\.alibabacloud.com).
   * 
   * @example
   * 0.25
   */
  price?: number;
  /**
   * @remarks
   * QPS extension specification for the WAF instance.
   * 
   * @example
   * 10
   */
  qps?: number;
  /**
   * @remarks
   * QPS specification within the version of the WAF instance.
   * 
   * @example
   * 10
   */
  qpsVersion?: number;
  /**
   * @remarks
   * Whether Fraud Detection is enabled. Valid values:
   * 
   * - **true**: Fraud Detection is enabled.
   * 
   * - **false**: Fraud Detection is disabled.
   * 
   * @example
   * true
   */
  riskControl?: boolean;
  /**
   * @remarks
   * Number of Fraud Detection requests processed.
   * 
   * @example
   * 100
   */
  riskTraffic?: number;
  /**
   * @remarks
   * Start time of the billing period, in Unix timestamp format (UTC), measured in seconds.
   * 
   * @example
   * 1687822980
   */
  startTime?: number;
  /**
   * @remarks
   * Total QPS subject to burstable billing.
   * 
   * @example
   * 0
   */
  total?: number;
  /**
   * @remarks
   * The billing type.
   */
  type?: string[];
  static names(): { [key: string]: string } {
    return {
      elasticQpsSetValue: 'ElasticQpsSetValue',
      endTime: 'EndTime',
      exceedStatus: 'ExceedStatus',
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
   * List of WAF burstable billing records.
   */
  bills?: DescribePrepayDailyBillsResponseBodyBills[];
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * EC10C9EA-A367-52D5-***-***
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of entries returned.
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

