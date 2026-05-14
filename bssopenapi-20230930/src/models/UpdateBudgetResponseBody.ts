// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBudgetResponseBody extends $dara.Model {
  budgetName?: string;
  /**
   * @example
   * 03A59CD4-6C6B-1A62-B64C-F1F2AF7830F3
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

