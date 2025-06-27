// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainResolveStatisticsSummaryResponseBodyStatistics extends $dara.Model {
  /**
   * @remarks
   * The number of DNS requests.
   * 
   * @example
   * 35509014
   */
  count?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   PUBLIC: hosted public domain name
   * *   CACHE: cache-accelerated domain name
   * 
   * @example
   * CACHE
   */
  domainType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      domainName: 'DomainName',
      domainType: 'DomainType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      domainName: 'string',
      domainType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

