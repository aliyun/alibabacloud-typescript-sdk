// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafDomainsResponseBodyDomains extends $dara.Model {
  /**
   * @remarks
   * The header of IP address of the client that is connected to the point of presence (POP).
   * 
   * @example
   * X-Forwarded-For
   */
  clientIpTag?: string;
  /**
   * @remarks
   * The protected domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The number of protection policies that were configured for the protected domain name.
   * 
   * @example
   * 3
   */
  policyCount?: number;
  static names(): { [key: string]: string } {
    return {
      clientIpTag: 'ClientIpTag',
      domainName: 'DomainName',
      policyCount: 'PolicyCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIpTag: 'string',
      domainName: 'string',
      policyCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The protected domain name.
   */
  domains?: DescribeDcdnWafDomainsResponseBodyDomains[];
  /**
   * @remarks
   * The page number of the returned page, which is the same as the PageNumber parameter in request parameters.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of domain names returned per page, which is the same as the PageSize parameter in request parameters.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 153ca2cd-3c01-44be-b408-64dbc6c88630
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of protected domain names.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeDcdnWafDomainsResponseBodyDomains },
      pageNumber: 'number',
      pageSize: 'number',
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

