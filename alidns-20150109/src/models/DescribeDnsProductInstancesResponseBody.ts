// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsProductInstancesResponseBodyDnsProducts } from "./DescribeDnsProductInstancesResponseBodyDnsProducts";


export class DescribeDnsProductInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paid Alibaba Cloud DNS instances.
   */
  dnsProducts?: DescribeDnsProductInstancesResponseBodyDnsProducts;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   PUBLIC (default): hosted public domain name
   * *   CACHE: cached public domain name
   * 
   * @example
   * PUBLIC
   */
  domainType?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of domain names.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dnsProducts: 'DnsProducts',
      domainType: 'DomainType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsProducts: DescribeDnsProductInstancesResponseBodyDnsProducts,
      domainType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.dnsProducts && typeof (this.dnsProducts as any).validate === 'function') {
      (this.dnsProducts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

