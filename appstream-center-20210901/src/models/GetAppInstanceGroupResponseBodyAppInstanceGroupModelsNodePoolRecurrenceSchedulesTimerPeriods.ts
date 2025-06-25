// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePoolRecurrenceSchedulesTimerPeriods extends $dara.Model {
  /**
   * @example
   * 5
   */
  amount?: number;
  /**
   * @example
   * 11:00
   */
  endTime?: string;
  /**
   * @example
   * 09:30
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

