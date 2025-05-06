// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcessDefinitionWithScheduleRequestSchedule extends $dara.Model {
  /**
   * @remarks
   * The CRON expression that is used for scheduling.
   * 
   * @example
   * 0 0 0 * * ?
   */
  crontab?: string;
  /**
   * @remarks
   * The end time of the scheduling.
   * 
   * @example
   * 2025-12-23 16:13:27
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the scheduling.
   * 
   * @example
   * 2024-12-23 16:13:27
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timezoneId?: string;
  static names(): { [key: string]: string } {
    return {
      crontab: 'crontab',
      endTime: 'endTime',
      startTime: 'startTime',
      timezoneId: 'timezoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crontab: 'string',
      endTime: 'string',
      startTime: 'string',
      timezoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

