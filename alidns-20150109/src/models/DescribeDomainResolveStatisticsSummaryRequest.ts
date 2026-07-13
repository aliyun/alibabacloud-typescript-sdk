// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainResolveStatisticsSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The sort direction. Valid values:
   * 
   * - DESC: descending
   * 
   * - ASC: ascending
   * 
   * @example
   * DESC
   */
  direction?: string;
  /**
   * @remarks
   * The end date. The format is yyyy-MM-dd. For example, 2023-03-13.
   * 
   * @example
   * 2023-03-01
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
   * The number of entries to return on each page for a paged query. The maximum value is 1000. The minimum value is 1.
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
   * EXACT
   */
  searchMode?: string;
  /**
   * @remarks
   * The start date. The format is yyyy-MM-dd. For example, 2023-03-01.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-03-01
   */
  startDate?: string;
  /**
   * @remarks
   * The threshold for the number of DNS queries. This parameter filters domain names by query volume.
   * 
   * If you do not specify this parameter, the operation returns domain names with more than zero queries.
   * 
   * If you specify a value less than 0, the operation returns all domain names.
   * 
   * If you specify 0, the operation returns domain names with zero queries.
   * 
   * If you specify a value greater than 0, the operation returns domain names with a query volume up to this value.
   * 
   * @example
   * -1
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
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

