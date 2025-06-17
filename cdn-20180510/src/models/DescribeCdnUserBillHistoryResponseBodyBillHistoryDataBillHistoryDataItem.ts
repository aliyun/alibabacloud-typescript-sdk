// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData } from "./DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData";


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

