// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageAppRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: 1. Valid values: 1 to 100000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of applications to return on each page. Default value: 20. Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * *   0: ascending order by time
   * *   1: descending order by time
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

