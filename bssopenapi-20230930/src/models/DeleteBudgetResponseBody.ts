// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBudgetResponseBody extends $dara.Model {
  /**
   * @example
   * department1
   */
  budgetName?: string;
  /**
   * @example
   * 7EA6C02D-06D0-4213-9C3B-E67910F7D1EB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      budgetName: 'BudgetName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budgetName: 'string',
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

