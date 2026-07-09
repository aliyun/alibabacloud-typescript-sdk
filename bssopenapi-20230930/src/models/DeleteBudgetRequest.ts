// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBudgetRequest extends $dara.Model {
  /**
   * @remarks
   * The budget name.
   * 
   * This parameter is required.
   * 
   * @example
   * department1
   */
  budgetName?: string;
  /**
   * @remarks
   * The ID of the primary marketplace. If this parameter is left empty, the marketplace ID of the current user is used by default.
   * 
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

