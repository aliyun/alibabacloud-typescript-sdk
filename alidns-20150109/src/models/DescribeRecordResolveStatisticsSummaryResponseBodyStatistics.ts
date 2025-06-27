// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordResolveStatisticsSummaryResponseBodyStatistics extends $dara.Model {
  /**
   * @remarks
   * The number of DNS requests.
   * 
   * @example
   * 330
   */
  count?: string;
  /**
   * @remarks
   * The subdomain name.
   * 
   * @example
   * tes.example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the domain name. The parameter value is not case-sensitive. Valid values:
   * 
   * *   PUBLIC (default): hosted public domain name
   * *   CACHE: cache-accelerated domain name
   * 
   * @example
   * PUBLIC
   */
  domainType?: string;
  /**
   * @remarks
   * The subdomain.
   * 
   * @example
   * test.example.com
   */
  subDomain?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      domainName: 'DomainName',
      domainType: 'DomainType',
      subDomain: 'SubDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      domainName: 'string',
      domainType: 'string',
      subDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

