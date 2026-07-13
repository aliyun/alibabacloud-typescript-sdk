// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordResolveStatisticsSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The sorting direction. Valid values:
   * 
   * - DESC: descending order (default)
   * 
   * - ASC: ascending order
   * 
   * @example
   * DESC
   */
  direction?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the domain name. This parameter is not case-sensitive. Valid values:
   * 
   * - PUBLIC: an authoritative domain name (default)
   * 
   * - CACHE: an authoritative proxy domain name
   * 
   * @example
   * PUBLIC
   */
  domainType?: string;
  /**
   * @remarks
   * The end date. Specify the date in the YYYY-MM-DD format. For example: 2023-03-13.
   * 
   * @example
   * 2023-03-29
   */
  endDate?: string;
  /**
   * @remarks
   * The keyword. This parameter is used with SearchMode.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language. Valid values: zh, en, and ja.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number. The value starts from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 1000 and the minimum value is 1.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search mode of the keyword. Valid values:
   * 
   * - LIKE: fuzzy search (default)
   * 
   * - EXACT: exact match
   * 
   * @example
   * LIKE
   */
  searchMode?: string;
  /**
   * @remarks
   * The start date. Specify the date in the YYYY-MM-DD format. For example: 2023-03-01.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-03-29
   */
  startDate?: string;
  /**
   * @remarks
   * The resolution count threshold. This parameter lets you query subdomains based on their resolution counts.
   * 
   * If you do not specify this parameter, data for subdomains with a resolution count greater than 0 is returned.
   * 
   * If you specify a value less than 0, all data is returned.
   * 
   * If you specify 0, data for subdomains with a resolution count of 0 is returned.
   * 
   * If you specify a value greater than 0, data for subdomains with a resolution count less than or equal to the specified value is returned.
   * 
   * @example
   * -1
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
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
      direction: 'string',
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

