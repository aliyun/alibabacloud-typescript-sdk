// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduleTimesRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The calendar.
   * 
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The time expression. For cron scheduling, use the Quartz cron format (second minute hour day-of-month month day-of-week).
   * 
   * This parameter is required.
   * 
   * @example
   * 0 0/10 * * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The time type. Currently, only cron is supported. Valid values:
   * - 1: cron.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Beijing
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      calendar: 'Calendar',
      clusterId: 'ClusterId',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      calendar: 'string',
      clusterId: 'string',
      timeExpression: 'string',
      timeType: 'number',
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

