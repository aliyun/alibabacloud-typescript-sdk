// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Money } from "./Money";


export class GeneralBill extends $dara.Model {
  /**
   * @remarks
   * The bill ID.
   * 
   * @example
   * bill_demo_001
   */
  billId?: string;
  /**
   * @remarks
   * The billing cycle.
   * 
   * @example
   * 2022-08
   */
  billPeriod?: string;
  /**
   * @remarks
   * The details download URL.
   */
  downloadUrl?: string[];
  /**
   * @remarks
   * The end time of the billing cycle.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The bill creation time.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The bill modification time.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The shop ID.
   * 
   * @example
   * 21000017
   */
  shopId?: string;
  /**
   * @remarks
   * The shop name.
   * 
   * @example
   * Children\\"s distribution store
   */
  shopName?: string;
  /**
   * @remarks
   * The start time of the billing cycle.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The bill amount.
   */
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

