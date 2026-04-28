// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBudgetPolicyRequest extends $dara.Model {
  /**
   * @example
   * 80
   */
  alertThresholdPct?: string;
  /**
   * @example
   * 10000
   */
  budgetPoints?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 023aacc1effc4b56bb154bfbec6ba9**
   */
  budgetPolicyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxx
   */
  gwClusterId?: string;
  regionId?: string;
  /**
   * @example
   * 2
   */
  resetDayOfMonth?: string;
  static names(): { [key: string]: string } {
    return {
      alertThresholdPct: 'AlertThresholdPct',
      budgetPoints: 'BudgetPoints',
      budgetPolicyId: 'BudgetPolicyId',
      gwClusterId: 'GwClusterId',
      regionId: 'RegionId',
      resetDayOfMonth: 'ResetDayOfMonth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertThresholdPct: 'string',
      budgetPoints: 'string',
      budgetPolicyId: 'string',
      gwClusterId: 'string',
      regionId: 'string',
      resetDayOfMonth: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

