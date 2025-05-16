// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuctionsRequest extends $dara.Model {
  auctionEndTimeOrder?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  status?: string;
  statuses?: string;
  static names(): { [key: string]: string } {
    return {
      auctionEndTimeOrder: 'AuctionEndTimeOrder',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      status: 'Status',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auctionEndTimeOrder: 'string',
      currentPage: 'number',
      pageSize: 'number',
      status: 'string',
      statuses: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

