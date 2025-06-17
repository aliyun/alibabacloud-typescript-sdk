// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem } from "./DescribeCdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem";


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

