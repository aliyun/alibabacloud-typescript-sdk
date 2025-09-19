// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainListRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the domain name that you want to query. Valid values:
   * 
   * *   **root**: root domain name
   * *   **sub**: subdomain name
   * 
   * @example
   * root
   */
  domainType?: string;
  /**
   * @remarks
   * The keyword that is used to query domain names. Fuzzy match is supported.
   * 
   * @example
   * sas
   */
  fuzzyDomain?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The source IP address of the request.
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

