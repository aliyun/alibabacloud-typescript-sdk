// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionCycleUnfinishedCycleAndTime } from "./ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionCycleUnfinishedCycleAndTime";


export class ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionCycleUnfinished extends $dara.Model {
  /**
   * @remarks
   * The configurations of the scheduling cycle and timeout period of the instance.
   */
  cycleAndTime?: ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionCycleUnfinishedCycleAndTime[];
  static names(): { [key: string]: string } {
    return {
      cycleAndTime: 'CycleAndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleAndTime: { 'type': 'array', 'itemType': ListAlertRulesResponseBodyPagingInfoAlertRulesTriggerConditionExtensionCycleUnfinishedCycleAndTime },
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

