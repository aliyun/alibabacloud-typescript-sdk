// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertRuleRequestTriggerConditionExtensionCycleUnfinishedCycleAndTime extends $dara.Model {
  /**
   * @remarks
   * The ID of the scheduling cycle of the instance. Valid values: [1,288].
   * 
   * @example
   * 1
   */
  cycleId?: number;
  /**
   * @remarks
   * The latest completion time of the instance within the scheduling cycle. The time is in the hh:mm format. Valid values of hh: [0,47]. Valid values of mm: [0,59].
   * 
   * @example
   * 12:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cycleId: 'CycleId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleId: 'number',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

