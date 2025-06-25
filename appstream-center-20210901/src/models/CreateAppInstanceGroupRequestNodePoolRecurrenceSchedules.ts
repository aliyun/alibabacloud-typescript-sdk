// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAppInstanceGroupRequestNodePoolRecurrenceSchedulesTimerPeriods } from "./CreateAppInstanceGroupRequestNodePoolRecurrenceSchedulesTimerPeriods";


export class CreateAppInstanceGroupRequestNodePoolRecurrenceSchedules extends $dara.Model {
  /**
   * @example
   * weekly
   */
  recurrenceType?: string;
  recurrenceValues?: number[];
  timerPeriods?: CreateAppInstanceGroupRequestNodePoolRecurrenceSchedulesTimerPeriods[];
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
      timerPeriods: { 'type': 'array', 'itemType': CreateAppInstanceGroupRequestNodePoolRecurrenceSchedulesTimerPeriods },
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

