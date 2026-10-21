// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBudgetPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The alert threshold percentage (0 to 100).
   * 
   * @example
   * 10
   */
  alertThresholdPct?: string;
  /**
   * @remarks
   * The ID of the dimension object. This parameter is required when BudgetType is set to ConsumerGroupTotal or Consumer.
   * 
   * @example
   * mi-xxxxx
   */
  budgetDimensionRefId?: string;
  /**
   * @remarks
   * The budget points.
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
   * - **GlobalTotal**: Global total budget.
   * - **ConsumerGroupTotal**: Total budget for a consumer group.
   * - **ConsumerGroupMemberDefault**: Default budget for a consumer group member.
   * - **Consumer**: Budget for a single consumer.
   * 
   * This parameter is required.
   * 
   * @example
   * GlobalTotal
   */
  budgetType?: string;
  /**
   * @remarks
   * The gateway instance ID.
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
   * The day of the month when the budget is reset (1 to 28).
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

