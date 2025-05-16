// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BidDomainResponseBody extends $dara.Model {
  /**
   * @example
   * 12345678
   */
  auctionId?: string;
  /**
   * @example
   * CC615585-9D93-4179-BD16-09337E32A3A7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      auctionId: 'AuctionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

