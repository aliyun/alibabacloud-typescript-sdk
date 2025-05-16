// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChangeAuctionRequestAuctionListBidRecords } from "./ChangeAuctionRequestAuctionListBidRecords";


export class ChangeAuctionRequestAuctionList extends $dara.Model {
  bidRecords?: ChangeAuctionRequestAuctionListBidRecords[];
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: string;
  isReserve?: number;
  reservePrice?: number;
  reserveRange?: string;
  status?: string;
  timeLeft?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  winner?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  winnerPrice?: number;
  static names(): { [key: string]: string } {
    return {
      bidRecords: 'BidRecords',
      domainName: 'DomainName',
      endTime: 'EndTime',
      isReserve: 'IsReserve',
      reservePrice: 'ReservePrice',
      reserveRange: 'ReserveRange',
      status: 'Status',
      timeLeft: 'TimeLeft',
      winner: 'Winner',
      winnerPrice: 'WinnerPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bidRecords: { 'type': 'array', 'itemType': ChangeAuctionRequestAuctionListBidRecords },
      domainName: 'string',
      endTime: 'string',
      isReserve: 'number',
      reservePrice: 'number',
      reserveRange: 'string',
      status: 'string',
      timeLeft: 'number',
      winner: 'string',
      winnerPrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bidRecords)) {
      $dara.Model.validateArray(this.bidRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

