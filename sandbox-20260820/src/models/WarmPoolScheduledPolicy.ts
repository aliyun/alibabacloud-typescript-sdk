// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WarmPoolScheduledPolicy extends $dara.Model {
  /**
   * @remarks
   * The end time when the rule expires, in RFC 3339 format.
   * 
   * @example
   * 2026-12-31T23:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the scheduled rule. It must be unique within the same warm pool.
   * 
   * @example
   * daily-scale
   */
  name?: string;
  /**
   * @remarks
   * The cron expression for the scheduled rule, in the cron (second minute hour day month week) format.
   * 
   * @example
   * cron(0 0 0 * * *)
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The start time when the rule takes effect, in RFC 3339 format.
   * 
   * @example
   * 2026-12-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The target number of ready sandboxes after the rule is triggered. The value can be 0.
   * 
   * @example
   * 0
   */
  target?: number;
  /**
   * @remarks
   * The IANA time zone used to execute the scheduled rule.
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

