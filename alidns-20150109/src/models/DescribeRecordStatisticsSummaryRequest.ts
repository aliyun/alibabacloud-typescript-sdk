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
   * example.top
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the domain name. This parameter is not case-sensitive. Valid values:
   * 
   * - PUBLIC: authoritative domain name (default)
   * 
   * - CACHE: proxy domain name
   * 
   * @example
   * PUBLIC
   */
  domainType?: string;
  /**
   * @remarks
   * The end date of the query. The format is **YYYY-MM-DD**.
   * 
   * The default value is the current day.
   * 
   * @example
   * 2019-07-04
   */
  endDate?: string;
  /**
   * @remarks
   * The keyword. The search is performed in the %KeyWord% format and is not case-sensitive.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * The default value is en.
   * 
   * @example
   * en
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
   * The number of entries to return on each page. The maximum value is **100**, the minimum value is **1**, and the default value is **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The search mode for the keyword. Valid values:
   * 
   * - **LIKE**: fuzzy search (default)
   * 
   * - **EXACT**: exact match
   * 
   * @example
   * EXACT
   */
  searchMode?: string;
  /**
   * @remarks
   * The start date of the query. The format is **YYYY-MM-DD**.
   * 
   * You can query data only from the last 90 days. The value of `StartDate` must be greater than or equal to the current date minus 90 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-07-04
   */
  startDate?: string;
  /**
   * @remarks
   * The threshold for the number of DNS requests. This operation returns data for subdomains whose request count is less than or equal to this value.
   * 
   * - If you set this parameter to 100, subdomains with a request count from 1 to 100 are returned.
   * 
   * - If you leave this parameter empty, all subdomains that have DNS requests are returned.
   * 
   * - If you set this parameter to 0, subdomains with no DNS requests are returned. If a domain name is added on the current day and has no requests, you can query its data on the next day.
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

