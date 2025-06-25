// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceGroupRequestNodePoolRecurrenceSchedulesTimerPeriods extends $dara.Model {
  /**
   * @example
   * 2
   */
  amount?: number;
  /**
   * @example
   * 15:00
   */
  endTime?: string;
  /**
   * @example
   * 12:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

