// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainResolveStatisticsSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The order in which you want to sort the returned entries. Valid values:
   * 
   * *   DESC: the descending order
   * *   ASC: the ascending order
   * 
   * @example
   * DESC
   */
  direction?: string;
  /**
   * @remarks
   * The end time in the yyyy-MM-dd format, for example, 2023-03-13.
   * 
   * @example
   * 2023-03-01
   */
  endDate?: string;
  /**
   * @remarks
   * The keyword. The Keyword parameter is used together with the SearchMode parameter.
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
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 1000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search mode of the keyword. Valid values:
   * 
   * *   LIKE (default): fuzzy search
   * *   EXACT: exact search
   * 
   * @example
   * EXACT
   */
  searchMode?: string;
  /**
   * @remarks
   * The start time in the yyyy-MM-dd format, for example, 2023-03-01.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-03-01
   */
  startDate?: string;
  /**
   * @remarks
   * The threshold for the number of Domain Name System (DNS) requests. You can query the domain names at the specified quantity level of DNS requests and query the number of DNS requests for each domain name.
   * 
   * If you do not specify this parameter, the data about the domain names that have DNS requests is obtained.
   * 
   * If you set this parameter to a value less than 0, the data about all domain names is obtained.
   * 
   * If you set this parameter to 0, the data about the domain names that do not have DNS requests is obtained.
   * 
   * If you set this parameter to a value greater than 0, the data about the domain names whose number of DNS requests is less than or equal to the value of this parameter is obtained.
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

