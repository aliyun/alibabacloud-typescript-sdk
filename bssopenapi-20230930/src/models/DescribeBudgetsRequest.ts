// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBudgetsRequest extends $dara.Model {
  /**
   * @example
   * department1
   */
  budgetName?: string;
  /**
   * @example
   * CONSUME
   */
  budgetType?: string;
  /**
   * @example
   * NOT_EXPIRED
   */
  expireStatus?: string;
  nbid?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
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

