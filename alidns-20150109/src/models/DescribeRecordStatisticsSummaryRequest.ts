// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordStatisticsSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * dns-example.com
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
   * The end date of the query. Specify the start date in the **YYYY-MM-DD** format.
   * 
   * The default value is the day when you query the data.
   * 
   * @example
   * 2019-07-04
   */
  endDate?: string;
  /**
   * @remarks
   * The keyword for searches in %KeyWord% mode. The value is not case-sensitive.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The search mode of the keyword. Valid values:
   * 
   * *   **LIKE** (default): fuzzy search
   * *   **EXACT**: exact search
   * 
   * @example
   * EXACT
   */
  searchMode?: string;
  /**
   * @remarks
   * The start date of the query. Specify the start date in the **YYYY-MM-DD** format.
   * 
   * You can only query the DNS records within the last 90 days.``
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-07-04
   */
  startDate?: string;
  /**
   * @remarks
   * The maximum number of DNS requests that you can obtain. You can obtain data about a domain name with DNS request volume less than or equal to the maximum number. For example, if you set this parameter to 100, you can query domain names with less than 100 DNS requests.
   * 
   * @example
   * 12
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainType: 'DomainType',
      endDate: 'EndDate',
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchMode: 'SearchMode',
      startDate: 'StartDate',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainType: 'string',
      endDate: 'string',
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchMode: 'string',
      startDate: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

