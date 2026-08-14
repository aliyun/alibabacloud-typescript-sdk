// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterListMemberBalanceOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * The balance type filter. Valid values: permanent and monthly.
   * 
   * @example
   * permanent
   */
  balanceType?: string;
  /**
   * @remarks
   * The change direction filter. Valid values: in and out.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The change type filter.
   * 
   * @example
   * recharge
   */
  orderType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      balanceType: 'balanceType',
      direction: 'direction',
      orderType: 'orderType',
      page: 'page',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balanceType: 'string',
      direction: 'string',
      orderType: 'string',
      page: 'number',
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

