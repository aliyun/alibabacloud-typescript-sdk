// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTouchListResponseBodyResultDataData } from "./QueryTouchListResponseBodyResultDataData";


export class QueryTouchListResponseBodyResultData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: QueryTouchListResponseBodyResultDataData[];
  /**
   * @example
   * false
   */
  empty?: boolean;
  /**
   * @example
   * 2
   */
  nextPage?: number;
  /**
   * @example
   * 2
   */
  onePageSize?: number;
  /**
   * @example
   * 2
   */
  previousPage?: number;
  /**
   * @example
   * 4
   */
  totalPage?: number;
  /**
   * @example
   * 100
   */
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      empty: 'Empty',
      nextPage: 'NextPage',
      onePageSize: 'OnePageSize',
      previousPage: 'PreviousPage',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': QueryTouchListResponseBodyResultDataData },
      empty: 'boolean',
      nextPage: 'number',
      onePageSize: 'number',
      previousPage: 'number',
      totalPage: 'number',
      totalResults: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

