// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryIntlFixedPriceOrderListRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * T2024061115213700****
   */
  bizId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The order status.
   * 
   * @example
   * 6
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

