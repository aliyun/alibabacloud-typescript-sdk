// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMonthlyBillRentalResponseBodyDataRecords extends $dara.Model {
  billTime?: number;
  itemId?: string;
  itemName?: string;
  offerTime?: number;
  rental?: string;
  subItemId?: string;
  subItemName?: string;
  static names(): { [key: string]: string } {
    return {
      billTime: 'billTime',
      itemId: 'itemId',
      itemName: 'itemName',
      offerTime: 'offerTime',
      rental: 'rental',
      subItemId: 'subItemId',
      subItemName: 'subItemName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billTime: 'number',
      itemId: 'string',
      itemName: 'string',
      offerTime: 'number',
      rental: 'string',
      subItemId: 'string',
      subItemName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

