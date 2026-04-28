// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBudgetPolicyRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  alertThresholdPct?: string;
  /**
   * @example
   * mi-xxxxx
   */
  budgetDimensionRefId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  budgetPoints?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ConsumerTotal
   */
  budgetType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  resetDayOfMonth?: string;
  static names(): { [key: string]: string } {
    return {
      alertThresholdPct: 'AlertThresholdPct',
      budgetDimensionRefId: 'BudgetDimensionRefId',
      budgetPoints: 'BudgetPoints',
      budgetType: 'BudgetType',
      gwClusterId: 'GwClusterId',
      regionId: 'RegionId',
      resetDayOfMonth: 'ResetDayOfMonth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertThresholdPct: 'string',
      budgetDimensionRefId: 'string',
      budgetPoints: 'string',
      budgetType: 'string',
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

