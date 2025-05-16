// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuctionsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1515961936000
   */
  auctionEndTime?: number;
  /**
   * @example
   * 123456
   */
  auctionId?: string;
  /**
   * @example
   * 1515961936000
   */
  bookEndTime?: number;
  /**
   * @example
   * 4
   */
  bookedPartner?: string;
  /**
   * @example
   * RMB
   */
  currency?: string;
  /**
   * @example
   * 1515961936000
   */
  deliveryTime?: number;
  /**
   * @example
   * test.com
   */
  domainName?: string;
  /**
   * @example
   * 0
   */
  domainType?: string;
  /**
   * @example
   * 0
   */
  failCode?: string;
  /**
   * @example
   * 100
   */
  highBid?: number;
  /**
   * @example
   * abc
   */
  highBidder?: string;
  /**
   * @example
   * 110
   */
  nextValidBid?: number;
  /**
   * @example
   * 4
   */
  partnerType?: string;
  /**
   * @example
   * 1515961936000
   */
  payEndTime?: number;
  /**
   * @example
   * 200
   */
  payPrice?: number;
  /**
   * @example
   * 1
   */
  payStatus?: string;
  /**
   * @example
   * 0
   */
  produceStatus?: string;
  reserveMax?: number;
  /**
   * @example
   * true
   */
  reserveMet?: boolean;
  reserveMin?: number;
  reservePrice?: number;
  /**
   * @example
   * 2
   */
  status?: string;
  /**
   * @example
   * 50
   */
  transferInPrice?: number;
  /**
   * @example
   * 100
   */
  yourCurrentBid?: number;
  /**
   * @example
   * 120
   */
  yourMaxBid?: number;
  static names(): { [key: string]: string } {
    return {
      auctionEndTime: 'AuctionEndTime',
      auctionId: 'AuctionId',
      bookEndTime: 'BookEndTime',
      bookedPartner: 'BookedPartner',
      currency: 'Currency',
      deliveryTime: 'DeliveryTime',
      domainName: 'DomainName',
      domainType: 'DomainType',
      failCode: 'FailCode',
      highBid: 'HighBid',
      highBidder: 'HighBidder',
      nextValidBid: 'NextValidBid',
      partnerType: 'PartnerType',
      payEndTime: 'PayEndTime',
      payPrice: 'PayPrice',
      payStatus: 'PayStatus',
      produceStatus: 'ProduceStatus',
      reserveMax: 'ReserveMax',
      reserveMet: 'ReserveMet',
      reserveMin: 'ReserveMin',
      reservePrice: 'ReservePrice',
      status: 'Status',
      transferInPrice: 'TransferInPrice',
      yourCurrentBid: 'YourCurrentBid',
      yourMaxBid: 'YourMaxBid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionEndTime: 'number',
      auctionId: 'string',
      bookEndTime: 'number',
      bookedPartner: 'string',
      currency: 'string',
      deliveryTime: 'number',
      domainName: 'string',
      domainType: 'string',
      failCode: 'string',
      highBid: 'number',
      highBidder: 'string',
      nextValidBid: 'number',
      partnerType: 'string',
      payEndTime: 'number',
      payPrice: 'number',
      payStatus: 'string',
      produceStatus: 'string',
      reserveMax: 'number',
      reserveMet: 'boolean',
      reserveMin: 'number',
      reservePrice: 'number',
      status: 'string',
      transferInPrice: 'number',
      yourCurrentBid: 'number',
      yourMaxBid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

