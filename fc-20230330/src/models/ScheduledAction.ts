// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduledAction extends $dara.Model {
  /**
   * @example
   * 2024-03-10T10:10:10
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cron(0 0 22 * * *)
   */
  scheduleExpression?: string;
  /**
   * @example
   * 2023-03-10T10:10:10
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 50
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

