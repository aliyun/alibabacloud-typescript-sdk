// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsRequestStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The primary domain name to query.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end date of the query. Use the YYYY-MM-DD format.
   * 
   * The default value is the current date.
   * 
   * @example
   * 2024-07-14
   */
  endDate?: string;
  /**
   * @remarks
   * The language of the request and response. The default value is **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number. The value starts from **1**. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. The maximum value is 100. The default value is 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start date of the query. Use the YYYY-MM-DD format.
   * 
   * You can query data from the last 90 days only.
   * 
   * @example
   * 2024-06-14
   */
  startDate?: string;
  /**
   * @remarks
   * The subdomain for which to view statistics.
   * 
   * @example
   * www.example.com
   */
  subDomain?: string;
  /**
   * @remarks
   * The type of request statistics to query. Valid values:
   * 
   * - DOMAIN: queries statistics by domain name.
   * 
   * - SUB_DOMAIN: queries statistics by subdomain.
   * 
   * @example
   * DOMAIN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endDate: 'EndDate',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      subDomain: 'SubDomain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endDate: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startDate: 'string',
      subDomain: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

