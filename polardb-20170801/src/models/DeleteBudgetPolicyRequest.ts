// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBudgetPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the budget policy to delete. You can obtain the ID from the BudgetPolicyId returned by CreateBudgetPolicy.
   * 
   * This parameter is required.
   * 
   * @example
   * 023aacc1effc4b56bb154bfbec6baxxx
   */
  budgetPolicyId?: string;
  /**
   * @remarks
   * The ID of the gateway instance. You can obtain the ID from the GwClusterId returned by CreateGateway.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      budgetPolicyId: 'BudgetPolicyId',
      gwClusterId: 'GwClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budgetPolicyId: 'string',
      gwClusterId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

