// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertRuleRequestTriggerConditionExtensionInstanceTransferFluctuate extends $dara.Model {
  /**
   * @remarks
   * The maximum percentage of fluctuation in the number of auto triggered node instances that are generated in your workspace. Valid values: [1-100].
   * 
   * @example
   * 10
   */
  percentage?: number;
  /**
   * @remarks
   * The way in which the number of auto triggered node instances that are generated in your workspace fluctuates. Valid values:
   * 
   * *   abs: the absolute value. The number of instances increases or decreases.
   * *   increase: The number of instances increases.
   * *   decrease: The number of instances decreases.
   * 
   * @example
   * abs
   */
  trend?: string;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
      trend: 'Trend',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
      trend: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

