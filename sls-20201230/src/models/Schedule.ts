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
   * The delay before a scheduled task is executed, in seconds (s).
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
   * 60s
   */
  interval?: string;
  /**
   * @remarks
   * Specifies whether to execute the scheduled task immediately.
   * 
   * @example
   * false
   */
  runImmediately?: boolean;
  /**
   * @remarks
   * The time zone of the cron expression. If this parameter is left empty, the default time zone UTC+8 is used.
   * 
   * @example
   * +0800
   */
  timeZone?: string;
  /**
   * @remarks
   * schedule type
   * 
   * This parameter is required.
   * 
   * @example
   * FixedRate
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

