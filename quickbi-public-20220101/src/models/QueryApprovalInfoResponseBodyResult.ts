// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryApprovalInfoResponseBodyResultData } from "./QueryApprovalInfoResponseBodyResultData";


export class QueryApprovalInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Array of approval flow information.
   */
  data?: QueryApprovalInfoResponseBodyResultData[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of records requested per page.
   * 
   * @example
   * 1000
   */
  pageSize?: number;
  /**
   * @remarks
   * The starting position of the current page.
   * 
   * @example
   * 0
   */
  start?: number;
  /**
   * @remarks
   * The total number of items.
   * 
   * @example
   * 3
   */
  total?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      page: 'Page',
      pageSize: 'PageSize',
      start: 'Start',
      total: 'Total',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryApprovalInfoResponseBodyResultData },
      page: 'number',
      pageSize: 'number',
      start: 'number',
      total: 'number',
      totalPages: 'number',
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

