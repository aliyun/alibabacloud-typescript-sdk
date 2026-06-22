// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TimeTrigger extends $dara.Model {
  /**
   * @remarks
   * The timestamp that specifies the end time. Unit: milliseconds.
   * 
   * @example
   * 1639714800000
   */
  endTime?: number;
  /**
   * @remarks
   * The time period during which a scheduled task can be retried after it fails. Unit: seconds. Valid values: 0 to 3600.
   * 
   * @example
   * 600
   */
  launchExpirationTime?: number;
  /**
   * @remarks
   * The execution time of the scaling rule. This parameter is required. The value is a string in the HH:MM format.
   * 
   * This parameter is required.
   * 
   * @example
   * 17:30
   */
  launchTime?: string;
  /**
   * @remarks
   * The frequency of executing the specified rule whose trigger mode is scaling by time. Valid values:
   * 
   * *   DAILY
   * *   WEEKLY
   * *   MONTHLY
   * 
   * @example
   * WEEKLY
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The number of recurrences of the scheduled task. The value of this parameter depends on the value of RecurrenceType.
   * 
   * *   If the RecurrenceType parameter is set to DAILY, you can specify only one value for this parameter. Valid values: 1 to 31.
   * *   If the RecurrenceType parameter is set to WEEKLY, you can specify multiple values for this parameter and separate them with commas (,). The values MON, TUE, WED, THU, FRI, SAT, and SUN indicate the days from Monday to Sunday. For example, the value MON,FRI,SUN stands for Monday, Friday, and Sunday.
   * *   If the RecurrenceType parameter is set to MONTHLY, the value of this parameter is in the A-B or A,B format. The values of A and B are both in the range of 1 to 31. If you use the A-B format, the value of B must be greater than the value of A.
   * 
   * @example
   * MON,FRI,SUN
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * The timestamp that specifies the start time. This parameter is required. Unit: milliseconds.
   * 
   * @example
   * 1639714800000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      launchExpirationTime: 'LaunchExpirationTime',
      launchTime: 'LaunchTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      launchExpirationTime: 'number',
      launchTime: 'string',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

