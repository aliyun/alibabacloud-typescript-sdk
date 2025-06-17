// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryExportAuctionDetailResponseBody extends $dara.Model {
  auctionEndTime?: string;
  auctionId?: string;
  auctionStatus?: string;
  bookEndTime?: string;
  buyerStatus?: string;
  currentPrice?: number;
  increasePrice?: number;
  myPrice?: number;
  myProxyPrice?: number;
  othersMaxProxyPrice?: number;
  proxyPrice?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      auctionEndTime: 'AuctionEndTime',
      auctionId: 'AuctionId',
      auctionStatus: 'AuctionStatus',
      bookEndTime: 'BookEndTime',
      buyerStatus: 'BuyerStatus',
      currentPrice: 'CurrentPrice',
      increasePrice: 'IncreasePrice',
      myPrice: 'MyPrice',
      myProxyPrice: 'MyProxyPrice',
      othersMaxProxyPrice: 'OthersMaxProxyPrice',
      proxyPrice: 'ProxyPrice',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionEndTime: 'string',
      auctionId: 'string',
      auctionStatus: 'string',
      bookEndTime: 'string',
      buyerStatus: 'string',
      currentPrice: 'number',
      increasePrice: 'number',
      myPrice: 'number',
      myProxyPrice: 'number',
      othersMaxProxyPrice: 'number',
      proxyPrice: 'number',
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

