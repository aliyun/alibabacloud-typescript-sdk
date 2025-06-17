// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem } from "./DescribeCdnUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem";


export class DescribeCdnUserBillPredictionResponseBodyBillPredictionData extends $dara.Model {
  billPredictionDataItem?: DescribeCdnUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem[];
  static names(): { [key: string]: string } {
    return {
      billPredictionDataItem: 'BillPredictionDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billPredictionDataItem: { 'type': 'array', 'itemType': DescribeCdnUserBillPredictionResponseBodyBillPredictionDataBillPredictionDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.billPredictionDataItem)) {
      $dara.Model.validateArray(this.billPredictionDataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

