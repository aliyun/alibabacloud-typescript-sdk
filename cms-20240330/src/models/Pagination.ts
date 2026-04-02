// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Pagination extends $dara.Model {
  /**
   * @remarks
   * 页码（从 1 开始）
   */
  pageNumber?: number;
  /**
   * @remarks
   * 每页数量
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
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

