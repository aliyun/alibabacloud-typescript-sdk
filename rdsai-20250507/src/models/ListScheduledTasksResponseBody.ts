// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledTasksResponseBodySchedules extends $dara.Model {
  /**
   * @example
   * 2026-02-04T06:51:24Z
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * Monday
   */
  frequency?: string;
  /**
   * @example
   * 1
   */
  instanceCount?: number;
  name?: string;
  /**
   * @example
   * 9d246af2-a0cd-4f69-857d-3785048f****
   */
  scheduledId?: string;
  /**
   * @example
   * 18:00:00Z
   */
  taskStartTime?: string;
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      frequency: 'Frequency',
      instanceCount: 'InstanceCount',
      name: 'Name',
      scheduledId: 'ScheduledId',
      taskStartTime: 'TaskStartTime',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      frequency: 'string',
      instanceCount: 'number',
      name: 'string',
      scheduledId: 'string',
      taskStartTime: 'string',
      timeRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScheduledTasksResponseBody extends $dara.Model {
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  schedules?: ListScheduledTasksResponseBodySchedules[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      schedules: 'Schedules',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      schedules: { 'type': 'array', 'itemType': ListScheduledTasksResponseBodySchedules },
      success: 'boolean',
      totalCount: 'number',
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

