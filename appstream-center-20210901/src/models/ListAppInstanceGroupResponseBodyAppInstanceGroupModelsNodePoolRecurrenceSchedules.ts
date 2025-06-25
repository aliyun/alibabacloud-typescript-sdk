// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods } from "./ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods";


export class ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedules extends $dara.Model {
  /**
   * @remarks
   * The schedule type of the scaling policy. This parameter must be configured together with `RecurrenceValues`.``
   * 
   * Valid value:
   * 
   * *   weekly: The scaling policy is executed on specific days each week.
   * 
   * @example
   * Weekly
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The days of each week on which the scaling policy is executed.
   */
  recurrenceValues?: number[];
  /**
   * @remarks
   * The time periods during which the scaling policy can be executed.
   */
  timerPeriods?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods[];
  static names(): { [key: string]: string } {
    return {
      recurrenceType: 'RecurrenceType',
      recurrenceValues: 'RecurrenceValues',
      timerPeriods: 'TimerPeriods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recurrenceType: 'string',
      recurrenceValues: { 'type': 'array', 'itemType': 'number' },
      timerPeriods: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods },
    };
  }

  validate() {
    if(Array.isArray(this.recurrenceValues)) {
      $dara.Model.validateArray(this.recurrenceValues);
    }
    if(Array.isArray(this.timerPeriods)) {
      $dara.Model.validateArray(this.timerPeriods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

