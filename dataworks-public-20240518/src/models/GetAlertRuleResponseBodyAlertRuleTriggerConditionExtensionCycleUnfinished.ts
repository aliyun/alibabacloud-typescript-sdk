// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionCycleUnfinishedCycleAndTime } from "./GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionCycleUnfinishedCycleAndTime";


export class GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionCycleUnfinished extends $dara.Model {
  /**
   * @remarks
   * The configurations of the scheduling cycle and timeout period of the instance.
   */
  cycleAndTime?: GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionCycleUnfinishedCycleAndTime[];
  static names(): { [key: string]: string } {
    return {
      cycleAndTime: 'CycleAndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleAndTime: { 'type': 'array', 'itemType': GetAlertRuleResponseBodyAlertRuleTriggerConditionExtensionCycleUnfinishedCycleAndTime },
    };
  }

  validate() {
    if(Array.isArray(this.cycleAndTime)) {
      $dara.Model.validateArray(this.cycleAndTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

