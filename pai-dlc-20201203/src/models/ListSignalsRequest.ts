// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSignalsRequest extends $dara.Model {
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @example
   * eyXXXX-XXXX.XXXXX
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      status: 'Status',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sortBy: 'string',
      status: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

