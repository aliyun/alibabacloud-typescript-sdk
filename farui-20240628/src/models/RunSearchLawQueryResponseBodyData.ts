// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchLawQueryResponseBodyDataLawResult } from "./RunSearchLawQueryResponseBodyDataLawResult";
import { RunSearchLawQueryResponseBodyDataSortKeyAndDirection } from "./RunSearchLawQueryResponseBodyDataSortKeyAndDirection";


export class RunSearchLawQueryResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  lawResult?: RunSearchLawQueryResponseBodyDataLawResult[];
  /**
   * @example
   * 0
   */
  pageSize?: number;
  query?: string;
  queryKeywords?: string[];
  sortKeyAndDirection?: RunSearchLawQueryResponseBodyDataSortKeyAndDirection;
  /**
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      lawResult: 'lawResult',
      pageSize: 'pageSize',
      query: 'query',
      queryKeywords: 'queryKeywords',
      sortKeyAndDirection: 'sortKeyAndDirection',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lawResult: { 'type': 'array', 'itemType': RunSearchLawQueryResponseBodyDataLawResult },
      pageSize: 'number',
      query: 'string',
      queryKeywords: { 'type': 'array', 'itemType': 'string' },
      sortKeyAndDirection: RunSearchLawQueryResponseBodyDataSortKeyAndDirection,
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lawResult)) {
      $dara.Model.validateArray(this.lawResult);
    }
    if(Array.isArray(this.queryKeywords)) {
      $dara.Model.validateArray(this.queryKeywords);
    }
    if(this.sortKeyAndDirection && typeof (this.sortKeyAndDirection as any).validate === 'function') {
      (this.sortKeyAndDirection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

