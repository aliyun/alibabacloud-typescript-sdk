// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduledAction extends $dara.Model {
  /**
   * @remarks
   * The time when the policy expires.
   * 
   * @example
   * 2024-03-10T10:10:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_1
   */
  name?: string;
  /**
   * @remarks
   * The schedule expression.
   * 
   * This parameter is required.
   * 
   * @example
   * cron(0 0 22 * * *)
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The time when the policy takes effect.
   * 
   * @example
   * 2023-03-10T10:10:10Z
   */
  startTime?: string;
  /**
   * @remarks
   * The number of target provisioned instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  target?: number;
  /**
   * @remarks
   * The time zone. If the time zone parameter is empty, the value of startTime, endTime, and scheduleExpression must be in UTC format.
   * 
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

