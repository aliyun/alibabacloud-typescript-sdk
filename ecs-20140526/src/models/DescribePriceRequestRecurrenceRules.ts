// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequestRecurrenceRules extends $dara.Model {
  /**
   * @remarks
   * The time when the time-segmented assurance ends. The value must be on the hour.
   * 
   * @example
   * 10
   */
  endHour?: number;
  /**
   * @remarks
   * The type of the recurrence rule. Valid values:
   * 
   * *   Daily
   * *   Weekly
   * *   Monthly
   * 
   * >  If this parameter is specified, specify `RecurrenceType` and `RecurrenceValue`.
   * 
   * @example
   * Daily
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The recurrency value of the time-segmented assurance.
   * 
   * *   If you set `RecurrenceType` to `Daily`, you can set RecurrenceValue to only one value. Valid values: 1 to 31. The time-segmented assurance is performed every few days.
   * *   If you set `RecurrenceType` to `Weekly`, you can set RecurrenceValue to one or more values. Separate the values with commas (,). The values that correspond to Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday are 0, 1, 2, 3, 4, 5, and 6. For example, `1,2` indicates that the time-segmented assurance is performed on Monday and Tuesday of every week.
   * *   If you set `RecurrenceType` to `Monthly`, you can set RecurrenceValue to two values in the `A-B` format. Valid values of A and B: 1 to 31. B must be greater than or equal to A. For example, `1-5` indicates that the time-segmented assurance is performed from the 1st to the 5th of each month.
   * 
   * >  If this parameter is specified, you must specify `RecurrenceType` and `RecurrenceValue`.
   * 
   * @example
   * 5
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * The time when the time-segmented assurance takes effect. The value must be on the hour.
   * 
   * >  You must specify both StartHour and EndHour. The EndHour time must be at least 4 hours later than the StartHour time.
   * 
   * @example
   * 4
   */
  startHour?: number;
  static names(): { [key: string]: string } {
    return {
      endHour: 'EndHour',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      startHour: 'StartHour',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endHour: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      startHour: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

