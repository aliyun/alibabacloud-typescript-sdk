// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem extends $dara.Model {
  /**
   * @remarks
   * The bandwidth. Unit: bit/s.
   * 
   * @example
   * 4839
   */
  bandwidth?: number;
  /**
   * @remarks
   * The region for which the billing records are generated. Valid values: **CN**, **OverSeas**, **AP1**, **AP2**, **AP3**, **NA**, **SA**, **EU**, and **MEAA**.
   * 
   * @example
   * AP1
   */
  cdnRegion?: string;
  /**
   * @remarks
   * The billing method of the disk. Valid values: **StaticHttp**, **DynamicHttp**, and **DynamicHttps**.
   * 
   * @example
   * DynamicHttp
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of billing entries.
   * 
   * @example
   * 205624
   */
  count?: number;
  /**
   * @remarks
   * The amount of network traffic. Unit: bytes.
   * 
   * @example
   * 2456
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

export class DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData extends $dara.Model {
  billingDataItem?: DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem[];
  static names(): { [key: string]: string } {
    return {
      billingDataItem: 'BillingDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingDataItem: { 'type': 'array', 'itemType': DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem },
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

export class DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range that was queried.
   * 
   * @example
   * 2018-09-30T17:00:00Z
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
  billingData?: DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData;
  /**
   * @remarks
   * The dimension.
   * 
   * @example
   * vas
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
      billingData: DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData,
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

export class DescribeDcdnUserBillHistoryResponseBodyBillHistoryData extends $dara.Model {
  billHistoryDataItem?: DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem[];
  static names(): { [key: string]: string } {
    return {
      billHistoryDataItem: 'BillHistoryDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billHistoryDataItem: { 'type': 'array', 'itemType': DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem },
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

export class DescribeDcdnUserBillHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The billing history returned.
   */
  billHistoryData?: DescribeDcdnUserBillHistoryResponseBodyBillHistoryData;
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
      billHistoryData: DescribeDcdnUserBillHistoryResponseBodyBillHistoryData,
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

