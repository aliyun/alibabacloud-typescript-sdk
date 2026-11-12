// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBudgetPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The alert threshold percentage. Valid values: 0 to 100.
   * 
   * @example
   * 80
   */
  alertThresholdPct?: string;
  /**
   * @remarks
   * The budget points.
   * 
   * @example
   * 10000
   */
  budgetPoints?: string;
  /**
   * @remarks
   * The ID of the budget policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 023aacc1effc4b56bb154bfbec6ba9**
   */
  budgetPolicyId?: string;
  /**
   * @remarks
   * The instance ID of the gateway instance. Usage note: In the full API reference, the description of the GwClusterId parameter must specify the resource type (gateway instance), how to obtain the instance ID (which Describe or List API to invoke), and the difference between GwClusterId and DBClusterId.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxx
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
  /**
   * @remarks
   * The day of the month when the reset occurs. Valid values: 1 to 28.
   * 
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

