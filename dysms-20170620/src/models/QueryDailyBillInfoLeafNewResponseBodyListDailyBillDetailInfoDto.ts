// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDailyBillInfoLeafNewResponseBodyListDailyBillDetailInfoDTO extends $dara.Model {
  addCount?: number;
  addDate?: string;
  addUnit?: string;
  billAmount?: string;
  detailItemName?: string;
  singlePrice?: string;
  static names(): { [key: string]: string } {
    return {
      addCount: 'AddCount',
      addDate: 'AddDate',
      addUnit: 'AddUnit',
      billAmount: 'BillAmount',
      detailItemName: 'DetailItemName',
      singlePrice: 'SinglePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCount: 'number',
      addDate: 'string',
      addUnit: 'string',
      billAmount: 'string',
      detailItemName: 'string',
      singlePrice: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

