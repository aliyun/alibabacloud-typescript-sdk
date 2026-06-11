// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Pagination extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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

