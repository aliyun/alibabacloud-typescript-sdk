// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckBudgetNameExistsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The budget name.
   * 
   * @example
   * department1
   */
  budgetName?: string;
  /**
   * @remarks
   * Indicates whether the budget name already exists.
   * 
   * @example
   * true
   */
  exists?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F1E2D3C4-B5A6-7890-1234-567890ABCDEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      budgetName: 'BudgetName',
      exists: 'Exists',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budgetName: 'string',
      exists: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

