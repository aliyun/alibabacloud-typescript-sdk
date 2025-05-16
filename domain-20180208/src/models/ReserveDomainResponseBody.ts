// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReserveDomainResponseBody extends $dara.Model {
  /**
   * @example
   * 12080761
   */
  auctionId?: string;
  /**
   * @example
   * 64F63E07-3AF6-4D59-8616-55DF1A9E03ED
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

