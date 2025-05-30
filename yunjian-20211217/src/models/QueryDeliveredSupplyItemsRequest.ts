// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDeliveredSupplyItemsRequest extends $dara.Model {
  accountId?: string;
  commodityTypeCode?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      commodityTypeCode: 'commodityTypeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      commodityTypeCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

