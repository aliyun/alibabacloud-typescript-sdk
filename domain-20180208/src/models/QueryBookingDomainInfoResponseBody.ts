// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBookingDomainInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 1234
   */
  auctionId?: number;
  /**
   * @example
   * 1517985730419
   */
  bookEndTime?: number;
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
   * @example
   * 15
   */
  maxBid?: number;
  /**
   * @example
   * 4
   */
  partnerType?: string;
  /**
   * @example
   * 234234njhjkhkj
   */
  requestId?: string;
  snatchNo?: string;
  /**
   * @example
   * 17
   */
  transferInPrice?: number;
  static names(): { [key: string]: string } {
    return {
      auctionId: 'AuctionId',
      bookEndTime: 'BookEndTime',
      currency: 'Currency',
      maxBid: 'MaxBid',
      partnerType: 'PartnerType',
      requestId: 'RequestId',
      snatchNo: 'SnatchNo',
      transferInPrice: 'TransferInPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionId: 'number',
      bookEndTime: 'number',
      currency: 'string',
      maxBid: 'number',
      partnerType: 'string',
      requestId: 'string',
      snatchNo: 'string',
      transferInPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

