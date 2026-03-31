// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddressesResponseBodyAddressList extends $dara.Model {
  /**
   * @example
   * 1.1.1.1
   */
  address?: string;
  /**
   * @example
   * 1760408233000
   */
  gmtModified?: number;
  /**
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
  addressList?: DescribeAddressesResponseBodyAddressList[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAGBgV9tolsLfijC4wam2htS*****D/46H3X2wIS
   */
  nextToken?: string;
  /**
   * @example
   * 8D8EBFB7-E1EB-5236-952A-092EDC72***
   */
  requestId?: string;
  /**
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

