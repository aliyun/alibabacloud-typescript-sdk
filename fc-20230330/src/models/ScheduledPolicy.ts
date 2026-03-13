// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduledPolicy extends $dara.Model {
  /**
   * @example
   * 1633449590000
   */
  endTime?: string;
  /**
   * @example
   * student_app_shop_analyzer
   */
  name?: string;
  /**
   * @example
   * 。
   */
  scheduleExpression?: string;
  /**
   * @example
   * 1764432000000
   */
  startTime?: string;
  /**
   * @example
   * 5
   */
  target?: number;
  /**
   * @example
   * 。
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

