// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBudgetPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The alert threshold, as a percentage. Valid values: 0 to 100.
   * 
   * @example
   * 10
   */
  alertThresholdPct?: string;
  /**
   * @remarks
   * The ID of the dimension object. This parameter is required if `BudgetType` is set to `ConsumerTotal` or `ConsumerGroupTotal`.
   * 
   * @example
   * mi-xxxxx
   */
  budgetDimensionRefId?: string;
  /**
   * @remarks
   * The number of budget points.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  budgetPoints?: string;
  /**
   * @remarks
   * The budget type. Valid values:
   * 
   * - `GlobalTotal`: global total budget
   * 
   * - `ConsumerTotal`: consumer total budget
   * 
   * - `ConsumerGroupTotal`: consumer group total budget
   * 
   * This parameter is required.
   * 
   * @example
   * ConsumerTotal
   */
  budgetType?: string;
  /**
   * @remarks
   * The gateway cluster ID.
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
  /**
   * @remarks
   * The day of the month on which the budget resets. Valid values: 1 to 28.
   * 
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

