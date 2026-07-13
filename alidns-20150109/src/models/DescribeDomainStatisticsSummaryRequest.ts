// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainStatisticsSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The end date of the query. The format is **YYYY-MM-DD**.
   * 
   * The default value is the current date.
   * 
   * @example
   * 2019-07-04
   */
  endDate?: string;
  /**
   * @remarks
   * The keyword. The search is performed in \\`%KeyWord%\\` mode and is case-insensitive.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The page number. The start value is **1**. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The maximum value is **100** and the minimum value is **1**. The default value is **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The search mode for the keyword. Valid values:
   * 
   * - **LIKE** (default): Fuzzy match
   * 
   * - **EXACT**: Exact match
   * 
   * @example
   * LIKE
   */
  searchMode?: string;
  /**
   * @remarks
   * The start date of the query. The format is **YYYY-MM-DD**.
   * 
   * You can query data from the last 90 days only. The value of `StartDate` must be greater than or equal to the current date minus 90 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-07-04
   */
  startDate?: string;
  /**
   * @remarks
   * The threshold for the number of requests. This operation returns domain names whose request count is less than or equal to the specified value. For example, if you set this parameter to 100, domain names with 100 or fewer requests are returned. If you do not specify this parameter, all domain names are returned.
   * 
   * @example
   * 12
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
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

