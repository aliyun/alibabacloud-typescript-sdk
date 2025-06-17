// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem } from "./DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem";


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

