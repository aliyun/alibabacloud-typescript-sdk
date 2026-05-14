// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckBudgetNameExistsResponseBody extends $dara.Model {
  /**
   * @example
   * department1
   */
  budgetName?: string;
  /**
   * @example
   * true
   */
  exists?: boolean;
  /**
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

