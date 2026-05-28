// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Schedule extends $dara.Model {
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 0/5 * * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * The number of seconds for which the scheduled job is delayed.
   * 
   * @example
   * 4
   */
  delay?: number;
  /**
   * @remarks
   * The fixed interval.
   * 
   * @example
   * 1m/1h
   */
  interval?: string;
  /**
   * @remarks
   * Specifies whether to run the scheduled job immediately.
   * 
   * @example
   * false
   */
  runImmediately?: boolean;
  /**
   * @remarks
   * The time zone for the cron expression. This parameter is empty by default, which indicates that the time zone is UTC+8.
   * 
   * @example
   * "+0800"
   */
  timeZone?: string;
  /**
   * @remarks
   * The scheduling type.
   * 
   * This parameter is required.
   * 
   * @example
   * Cron
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'cronExpression',
      delay: 'delay',
      interval: 'interval',
      runImmediately: 'runImmediately',
      timeZone: 'timeZone',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      delay: 'number',
      interval: 'string',
      runImmediately: 'boolean',
      timeZone: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

