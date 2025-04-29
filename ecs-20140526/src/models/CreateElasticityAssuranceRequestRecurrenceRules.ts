// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateElasticityAssuranceRequestRecurrenceRules extends $dara.Model {
  /**
   * @remarks
   * The end time of the assurance period for the capacity reservation of the time-segmented elasticity assurance. Specify an on-the-hour point in time.
   * 
   * @example
   * 10
   */
  endHour?: number;
  /**
   * @remarks
   * The type of the assurance schedule. Valid values:
   * 
   * *   Daily
   * *   Weekly
   * *   Monthly
   * 
   * >  If you specify this parameter, you must specify `RecurrenceType` and `RecurrenceValue`.
   * 
   * @example
   * Daily
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The days of the week or month on which the capacity reservation of the time-segmented elasticity assurance takes effect or the interval, in number of days, at which the capacity reservation takes effect.
   * 
   * *   If you set `RecurrenceType` to `Daily`, you can specify only one value for this parameter. Valid values: 1 to 31. The value specifies that the capacity reservation takes effect every few days.
   * *   If you set `RecurrenceType` to `Weekly`, you can specify multiple values for this parameter. Separate the values with commas (,). Valid values: 0, 1, 2, 3, 4, 5, and 6, which specify Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday, respectively. Example: `1,2`, which specifies that the capacity reservation takes effect on Monday and Tuesday.
   * *   If you set `RecurrenceType` to `Monthly`, you can specify two values in the `A-B` format for this parameter. Valid values of A and B: 1 to 31. B must be greater than or equal to A. Example: `1-5`, which specifies that the capacity reservation takes effect every day from the first day up to the fifth day of each month.
   * 
   * >  If you specify this parameter, you must specify `RecurrenceType` and `RecurrenceValue`.
   * 
   * @example
   * 1
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * The start time of the assurance period for the capacity reservation of the time-segmented elasticity assurance. Specify an on-the-hour point in time.
   * 
   * >  You must specify both `StartHour` and `EndHour`. The EndHour value must be at least 4 hours later than the StartHour value.
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

