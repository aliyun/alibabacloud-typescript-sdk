// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem extends $dara.Model {
  /**
   * @remarks
   * The bandwidth. Unit: bit/s.
   * 
   * @example
   * 4041
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billable region. Valid values:
   * 
   * *   **CN**: Chinese mainland
   * *   **OverSeas**: outside the Chinese mainland
   * *   **AP1**: Asia Pacific 1
   * *   **AP2**: Asia Pacific 2
   * *   **AP3**: Asia Pacific 3
   * *   **NA**: North America
   * *   **SA**: South America
   * *   **EU**: Europe
   * *   **MEAA**: Middle East and Africa
   * 
   * @example
   * AP1
   */
  cdnRegion?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **StaticHttp**: static HTTP requests
   * *   **DynamicHttp**: dynamic HTTP requests
   * *   **DynamicHttps**: dynamic HTTPS requests
   * 
   * @example
   * DynamicHttp
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 203601
   */
  count?: number;
  /**
   * @remarks
   * The amount of network traffic. Unit: bytes.
   * 
   * @example
   * 24567
   */
  flow?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cdnRegion: 'CdnRegion',
      chargeType: 'ChargeType',
      count: 'Count',
      flow: 'Flow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      cdnRegion: 'string',
      chargeType: 'string',
      count: 'number',
      flow: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData extends $dara.Model {
  billingDataItem?: DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem[];
  static names(): { [key: string]: string } {
    return {
      billingDataItem: 'BillingDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingDataItem: { 'type': 'array', 'itemType': DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.billingDataItem)) {
      $dara.Model.validateArray(this.billingDataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range that was queried.
   * 
   * @example
   * 2018-09-30T16:00:00Z
   */
  billTime?: string;
  /**
   * @remarks
   * The metering method.
   * 
   * @example
   * month_4th_day_bandwidth
   */
  billType?: string;
  /**
   * @remarks
   * The billable items.
   */
  billingData?: DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData;
  /**
   * @remarks
   * The dimension.
   * 
   * @example
   * flow
   */
  dimension?: string;
  static names(): { [key: string]: string } {
    return {
      billTime: 'BillTime',
      billType: 'BillType',
      billingData: 'BillingData',
      dimension: 'Dimension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billTime: 'string',
      billType: 'string',
      billingData: DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData,
      dimension: 'string',
    };
  }

  validate() {
    if(this.billingData && typeof (this.billingData as any).validate === 'function') {
      (this.billingData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillHistoryResponseBodyBillHistoryData extends $dara.Model {
  billHistoryDataItem?: DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem[];
  static names(): { [key: string]: string } {
    return {
      billHistoryDataItem: 'BillHistoryDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billHistoryDataItem: { 'type': 'array', 'itemType': DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.billHistoryDataItem)) {
      $dara.Model.validateArray(this.billHistoryDataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnUserBillHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing history returned.
   */
  billHistoryData?: DescribeCdnUserBillHistoryResponseBodyBillHistoryData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ED61C6C3-8241-4187-AAA7-5157AE175CEC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      billHistoryData: 'BillHistoryData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billHistoryData: DescribeCdnUserBillHistoryResponseBodyBillHistoryData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.billHistoryData && typeof (this.billHistoryData as any).validate === 'function') {
      (this.billHistoryData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

