// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurchaseIntlDomainRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  auctionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  currency?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  price?: number;
  static names(): { [key: string]: string } {
    return {
      auctionId: 'AuctionId',
      currency: 'Currency',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionId: 'string',
      currency: 'string',
      price: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

