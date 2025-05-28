// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRecentViewReportsResponseBodyResultData } from "./ListRecentViewReportsResponseBodyResultData";


export class ListRecentViewReportsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Attention
   * 
   * @example
   * test
   */
  attention?: string;
  /**
   * @remarks
   * The list of queried works.
   */
  data?: ListRecentViewReportsResponseBodyResultData[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * *   Default value: 10.
   * *   Maximum of 100 articles
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of rows in the table.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      attention: 'Attention',
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attention: 'string',
      data: { 'type': 'array', 'itemType': ListRecentViewReportsResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
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

