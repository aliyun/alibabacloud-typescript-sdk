// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduledPolicy extends $dara.Model {
  /**
   * @example
   * 2024-01-01T08:00:00
   */
  endTime?: string;
  /**
   * @example
   * scale-up-morning
   */
  name?: string;
  /**
   * @example
   * cron(0 8 * * ? *)
   */
  scheduleExpression?: string;
  /**
   * @example
   * 2024-01-01T08:00:00
   */
  startTime?: string;
  /**
   * @example
   * 20
   */
  target?: number;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      name: 'name',
      scheduleExpression: 'scheduleExpression',
      startTime: 'startTime',
      target: 'target',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      scheduleExpression: 'string',
      startTime: 'string',
      target: 'number',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

