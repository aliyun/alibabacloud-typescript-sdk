// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrepayDailyBillsResponseBodyBills extends $dara.Model {
  /**
   * @remarks
   * The burstable QPS of the WAF instance.
   * 
   * @example
   * 100
   */
  elasticQpsSetValue?: number;
  /**
   * @remarks
   * The billing end time. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1687591200
   */
  endTime?: number;
  /**
   * @remarks
   * The status of QPS usage within the current period of time. Valid values:
   * 
   * *   **0**: normal.
   * *   **1**: excess.
   * *   **2**: sandbox.
   * 
   * @example
   * 0
   */
  exceedStatus?: number;
  /**
   * @remarks
   * The peak QPS within the current period of time.
   * 
   * @example
   * 600
   */
  maxQps?: number;
  /**
   * @remarks
   * The unit price in the bill. The price is measured in CNY for bills at the China site (aliyun.com) and in USD for bills at the international site (alibabacloud.com).
   * 
   * @example
   * 0.25
   */
  price?: number;
  /**
   * @remarks
   * The extended QPS of the WAF instance.
   * 
   * @example
   * 10
   */
  qps?: number;
  /**
   * @remarks
   * The default QPS of the WAF instance.
   * 
   * @example
   * 10
   */
  qpsVersion?: number;
  /**
   * @remarks
   * Indicates whether risk identification is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  riskControl?: boolean;
  /**
   * @remarks
   * The number of times that risk identification is performed.
   * 
   * @example
   * 100
   */
  riskTraffic?: number;
  /**
   * @remarks
   * The billing start time. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1687822980
   */
  startTime?: number;
  /**
   * @remarks
   * The actual QPS in total.
   * 
   * @example
   * 0
   */
  total?: number;
  /**
   * @remarks
   * The billing types.
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
   * The bills of the burstable QPS (pay-as-you-go) feature.
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

