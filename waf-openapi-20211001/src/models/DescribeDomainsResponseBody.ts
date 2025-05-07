// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainsResponseBodyDomains } from "./DescribeDomainsResponseBodyDomains";


export class DescribeDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names that are added to WAF in CNAME record mode.
   */
  domains?: DescribeDomainsResponseBodyDomains[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABF68BB3-2C48-5FA4-9750-D5FE55700E36
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 146
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomains },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

