// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBudgetResponseBody extends $dara.Model {
  /**
   * @example
   * Department_dev_budget
   */
  budgetName?: string;
  /**
   * @example
   * 39EDD65E-68C5-1B17-8440-C729C7591D74
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

