// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBudgetPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * 05a5a8603df444a8a605af712ffexxx
   */
  budgetPolicyId?: string;
  /**
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      budgetPolicyId: 'BudgetPolicyId',
      gwClusterId: 'GwClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budgetPolicyId: 'string',
      gwClusterId: 'string',
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

