// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageAppRequest extends $dara.Model {
  /**
   * @remarks
   * Page number. Default value: 1. Valid values: 1 to 100000.
   * 
   * > This page number is the current display page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of applications displayed per page. Default value: 20. Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Sorting method. Valid values:
   * 
   * - 0: Ascending order by time.
   * - 1: Descending order by time.
   * 
   * @example
   * 1
   */
  sortType?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      sortType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

