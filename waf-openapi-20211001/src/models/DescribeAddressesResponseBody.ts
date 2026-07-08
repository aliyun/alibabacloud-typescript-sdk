// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddressesResponseBodyAddressList extends $dara.Model {
  /**
   * @remarks
   * The address.
   * 
   * @example
   * 1.1.1.1
   */
  address?: string;
  /**
   * @remarks
   * The most recent modification time of the address. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1760408233000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The address book ID.
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
   * The list of addresses.
   */
  addressList?: DescribeAddressesResponseBodyAddressList[];
  /**
   * @remarks
   * The number of entries per page for paging. Valid values: 1 to 500. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. If a next page exists, this field contains a value.
   * > If this parameter has a return value, a next page exists. You can pass the returned **NextToken** as a request parameter to retrieve the next page of data. Repeat this process until no value is returned, which indicates that all data has been retrieved.
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
   * The total number of entries returned.
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

