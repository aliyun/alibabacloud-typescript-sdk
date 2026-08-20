// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketQueryPriceStockRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @example
   * 2026-10-30
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  productId?: string;
  /**
   * @example
   * 2026-10-01
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      endDate: 'EndDate',
      productId: 'ProductId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      endDate: 'string',
      productId: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

