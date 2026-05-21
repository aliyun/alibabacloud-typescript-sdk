// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBudgetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * department1
   */
  budgetName?: string;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  static names(): { [key: string]: string } {
    return {
      budgetName: 'BudgetName',
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budgetName: 'string',
      nbid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

