// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFavoriteReportsResponseBodyResultData } from "./ListFavoriteReportsResponseBodyResultData";


export class ListFavoriteReportsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * List of works queried.
   */
  data?: ListFavoriteReportsResponseBodyResultData[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of rows per page set when requesting the interface.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of rows.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListFavoriteReportsResponseBodyResultData },
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

