// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Money } from "./Money";


export class GeneralBill extends $dara.Model {
  billId?: string;
  billPeriod?: string;
  downloadUrl?: string[];
  endTime?: string;
  gmtCreate?: string;
  gmtModified?: string;
  shopId?: string;
  shopName?: string;
  startTime?: string;
  totalAmount?: Money;
  static names(): { [key: string]: string } {
    return {
      billId: 'billId',
      billPeriod: 'billPeriod',
      downloadUrl: 'downloadUrl',
      endTime: 'endTime',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      shopId: 'shopId',
      shopName: 'shopName',
      startTime: 'startTime',
      totalAmount: 'totalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      billPeriod: 'string',
      downloadUrl: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      shopId: 'string',
      shopName: 'string',
      startTime: 'string',
      totalAmount: Money,
    };
  }

  validate() {
    if(Array.isArray(this.downloadUrl)) {
      $dara.Model.validateArray(this.downloadUrl);
    }
    if(this.totalAmount && typeof (this.totalAmount as any).validate === 'function') {
      (this.totalAmount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

