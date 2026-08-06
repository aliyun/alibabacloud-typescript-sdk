// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBudgetsRequest extends $dara.Model {
  /**
   * @remarks
   * The budget name. Fuzzy match is supported.
   * 
   * @example
   * department1
   */
  budgetName?: string;
  /**
   * @remarks
   * The budget type.
   * 
   * @example
   * CONSUME
   */
  budgetType?: string;
  /**
   * @remarks
   * The expiration status.
   * 
   * @example
   * NOT_EXPIRED
   */
  expireStatus?: string;
  /**
   * @remarks
   * The level-1 marketplace ID. If this parameter is left empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2688801000001
   */
  nbid?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      budgetName: 'BudgetName',
      budgetType: 'BudgetType',
      expireStatus: 'ExpireStatus',
      nbid: 'Nbid',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budgetName: 'string',
      budgetType: 'string',
      expireStatus: 'string',
      nbid: 'string',
      pageNo: 'number',
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

