// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataValue extends $dara.Model {
  itemId?: string;
  businessType?: string;
  appName?: string;
  status?: string;
  purchaseStatus?: string;
  expiredOn?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      businessType: 'BusinessType',
      appName: 'AppName',
      status: 'Status',
      purchaseStatus: 'PurchaseStatus',
      expiredOn: 'ExpiredOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      businessType: 'string',
      appName: 'string',
      status: 'string',
      purchaseStatus: 'string',
      expiredOn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

