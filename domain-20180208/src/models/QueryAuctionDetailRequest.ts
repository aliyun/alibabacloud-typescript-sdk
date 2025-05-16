// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuctionDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  auctionId?: string;
  static names(): { [key: string]: string } {
    return {
      auctionId: 'AuctionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

