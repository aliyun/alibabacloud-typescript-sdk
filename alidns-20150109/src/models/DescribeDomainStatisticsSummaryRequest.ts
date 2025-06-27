// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainStatisticsSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the **YYYY-MM-DD** format.
   * 
   * The default value is the day when you perform the operation.
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
   * The language type.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page **1**. Default value: **1**.
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
   * *   **LIKE**: fuzzy match (default).
   * *   **EXACT**: exact match.
   * 
   * @example
   * LIKE
   */
  searchMode?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the **YYYY-MM-DD** format.
   * 
   * You can only query DNS records of the last 90 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-07-04
   */
  startDate?: string;
  /**
   * @remarks
   * The threshold of query volume that can be obtained. You can also obtain data about a domain name with the query volume less than or equal to the threshold. For example, if you set this parameter to 100, you can query domain names with less than 100 queries.
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

