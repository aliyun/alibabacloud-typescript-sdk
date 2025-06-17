// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem } from "./DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem";


export class DescribeCdnUserBillTypeResponseBodyBillTypeData extends $dara.Model {
  billTypeDataItem?: DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem[];
  static names(): { [key: string]: string } {
    return {
      billTypeDataItem: 'BillTypeDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billTypeDataItem: { 'type': 'array', 'itemType': DescribeCdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.billTypeDataItem)) {
      $dara.Model.validateArray(this.billTypeDataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

