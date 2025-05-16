// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BidDomainRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  auctionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RMB
   */
  currency?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  maxBid?: number;
  static names(): { [key: string]: string } {
    return {
      auctionId: 'AuctionId',
      currency: 'Currency',
      maxBid: 'MaxBid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionId: 'string',
      currency: 'string',
      maxBid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

