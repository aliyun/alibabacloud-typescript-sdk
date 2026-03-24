// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddressesResponseBodyAddressList extends $dara.Model {
  /**
   * @remarks
   * The IP address or CIDR block in the address book.
   * 
   * @example
   * 1.1.1.1
   */
  address?: string;
  /**
   * @remarks
   * The most recent modification time of the address. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1760408233000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the address book.
   * 
   * @example
   * 12345678
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      gmtModified: 'GmtModified',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      gmtModified: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The addresses in the address book.
   */
  addressList?: DescribeAddressesResponseBodyAddressList[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. If this parameter is returned, more results are available.
   * 
   * > Include this value in the **NextToken** parameter of the next request to retrieve additional results. If this parameter is not returned, all results have been retrieved.
   * 
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D8EBFB7-E1EB-5236-952A-092EDC72***
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of addresses that match the query conditions.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      addressList: 'AddressList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressList: { 'type': 'array', 'itemType': DescribeAddressesResponseBodyAddressList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addressList)) {
      $dara.Model.validateArray(this.addressList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

