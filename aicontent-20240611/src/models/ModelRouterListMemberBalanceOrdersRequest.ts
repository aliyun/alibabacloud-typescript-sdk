// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterListMemberBalanceOrdersRequest extends $dara.Model {
  /**
   * @example
   * permanent
   */
  balanceType?: string;
  /**
   * @example
   * in
   */
  direction?: string;
  /**
   * @example
   * recharge
   */
  orderType?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
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

