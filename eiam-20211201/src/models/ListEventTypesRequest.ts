// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventTypesRequest extends $dara.Model {
  /**
   * @remarks
   * 查询分页页码（从1开始计数）
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 分页大小（从1开始计数）
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

