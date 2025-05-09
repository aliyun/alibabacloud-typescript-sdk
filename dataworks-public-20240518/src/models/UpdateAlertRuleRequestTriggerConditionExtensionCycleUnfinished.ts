// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAlertRuleRequestTriggerConditionExtensionCycleUnfinishedCycleAndTime } from "./UpdateAlertRuleRequestTriggerConditionExtensionCycleUnfinishedCycleAndTime";


export class UpdateAlertRuleRequestTriggerConditionExtensionCycleUnfinished extends $dara.Model {
  /**
   * @remarks
   * The configurations of the scheduling cycle and timeout period of the instance.
   */
  cycleAndTime?: UpdateAlertRuleRequestTriggerConditionExtensionCycleUnfinishedCycleAndTime[];
  static names(): { [key: string]: string } {
    return {
      cycleAndTime: 'CycleAndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleAndTime: { 'type': 'array', 'itemType': UpdateAlertRuleRequestTriggerConditionExtensionCycleUnfinishedCycleAndTime },
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

