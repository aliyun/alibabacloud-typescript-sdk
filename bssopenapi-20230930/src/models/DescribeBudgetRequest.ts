// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBudgetRequest extends $dara.Model {
  /**
   * @remarks
   * Budget name.
   * 
   * This parameter is required.
   * 
   * @example
   * department1
   */
  budgetName?: string;
  /**
   * @remarks
   * Primary marketplace ID. If left empty, the marketplace ID of the current user is used by default.
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

