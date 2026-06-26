// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScheduledPolicy extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1633449590000
   */
  endTime?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * student_app_shop_analyzer
   */
  name?: string;
  /**
   * @remarks
   * The schedule configuration.
   * 
   * @example
   * 。
   */
  scheduleExpression?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1764432000000
   */
  startTime?: string;
  /**
   * @remarks
   * The current number of target resources. If a metric-based auto scaling policy or a scheduled policy is in effect, this parameter specifies the number of resources calculated by the policy. Otherwise, this parameter specifies the default number of provisioned instances.
   * 
   * > How is this different from defaultTarget?<br>
   * > Assume that you set the number of provisioned instances to 1 and then add a scheduled auto scaling policy to set the number to 5 for a specific time period.<br>
   * >
   * > - When the scheduled policy is active, target is 5 and defaultTarget is 1.
   * >
   * > - When the scheduled policy is inactive, both target and defaultTarget are 1.
   * 
   * @example
   * 5
   */
  target?: number;
  /**
   * @remarks
   * The time zone. If this parameter is left empty, the times for startTime, endTime, and scheduleExpression must be in UTC format.
   * 
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

