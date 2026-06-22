// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return in a paged query. Default value: **1**, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the domain name to query. Valid values:
   * 
   * - **root**: root domain name
   * - **sub**: subdomain name.
   * 
   * @example
   * root
   */
  domainType?: string;
  /**
   * @remarks
   * The search keyword for the domain name to query. Fuzzy match is supported.
   * 
   * @example
   * sas
   */
  fuzzyDomain?: string;
  /**
   * @remarks
   * The number of domain names to display on each page in a paged query. Default value: **10**, which indicates that 10 domain names are displayed on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 192.122.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      domainType: 'DomainType',
      fuzzyDomain: 'FuzzyDomain',
      pageSize: 'PageSize',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      domainType: 'string',
      fuzzyDomain: 'string',
      pageSize: 'number',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

