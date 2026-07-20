// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSignalsRequest extends $dara.Model {
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The field used for sorting.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The signal status.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The temporary token used for authentication.
   * 
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

