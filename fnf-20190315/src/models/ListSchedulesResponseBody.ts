// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSchedulesResponseBodySchedules extends $dara.Model {
  /**
   * @remarks
   * The time when the time-based schedule was created.
   * 
   * @example
   * 2020-01-01T01:01:01.001Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The cron expression of the scheduled task.
   * 
   * @example
   * 0 * * * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * The description of the time-based schedule.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the time-based schedule is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The time when the time-based schedule was last modified.
   * 
   * @example
   * 2020-01-01T01:01:01.001Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The trigger message of the time-based schedule.
   * 
   * @example
   * {"key": "value"}
   */
  payload?: string;
  /**
   * @remarks
   * The ID of the time-based schedule.
   * 
   * @example
   * testScheduleId
   */
  scheduleId?: string;
  /**
   * @remarks
   * The name of the time-based schedule.
   * 
   * @example
   * testScheduleName
   */
  scheduleName?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      cronExpression: 'CronExpression',
      description: 'Description',
      enable: 'Enable',
      lastModifiedTime: 'LastModifiedTime',
      payload: 'Payload',
      scheduleId: 'ScheduleId',
      scheduleName: 'ScheduleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      cronExpression: 'string',
      description: 'string',
      enable: 'boolean',
      lastModifiedTime: 'string',
      payload: 'string',
      scheduleId: 'string',
      scheduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * testNextToken
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * testRequestId
   */
  requestId?: string;
  /**
   * @remarks
   * The time-based schedules that are queried.
   */
  schedules?: ListSchedulesResponseBodySchedules[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      schedules: 'Schedules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      schedules: { 'type': 'array', 'itemType': ListSchedulesResponseBodySchedules },
    };
  }

  validate() {
    if(Array.isArray(this.schedules)) {
      $dara.Model.validateArray(this.schedules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

