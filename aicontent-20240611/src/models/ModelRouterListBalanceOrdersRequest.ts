// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterListBalanceOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * The balance type filter. Valid values: permanent, monthly. If this parameter is left empty, all types are queried.
   * 
   * @example
   * permanent
   */
  balanceType?: string;
  /**
   * @remarks
   * The direction filter. Valid values: in (income), out (expenditure). If this parameter is left empty, all directions are queried.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The maximum number of results.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The change type filter. Valid values: recharge, periodic_recharge, manual_deduct, transfer_out, transfer_in, return_out, return_in, write_off, monthly_expire, and deficit_writeoff. If this parameter is left empty, all types are queried.
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
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      orderType: 'orderType',
      page: 'page',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balanceType: 'string',
      direction: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

