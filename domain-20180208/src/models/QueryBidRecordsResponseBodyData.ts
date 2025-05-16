// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBidRecordsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 50
   */
  bid?: number;
  /**
   * @example
   * 1515961936000
   */
  bidTime?: number;
  /**
   * @example
   * abc
   */
  bidder?: string;
  /**
   * @example
   * RMB
   */
  currency?: string;
  /**
   * @example
   * test.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      bidTime: 'BidTime',
      bidder: 'Bidder',
      currency: 'Currency',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'number',
      bidTime: 'number',
      bidder: 'string',
      currency: 'string',
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

