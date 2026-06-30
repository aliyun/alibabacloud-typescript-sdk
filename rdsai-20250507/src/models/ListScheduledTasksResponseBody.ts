// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledTasksResponseBodySchedules extends $dara.Model {
  /**
   * @remarks
   * The time the task was created, in UTC.
   * 
   * @example
   * 2026-02-04T06:51:24Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the inspection.
   * 
   * @example
   * 每天凌晨2点自动巡检生产环境RDS实例
   */
  description?: string;
  /**
   * @remarks
   * The inspection frequency. Multiple values are separated by commas. The default is DAILY. Valid values:
   * 
   * - DAILY: Every day
   * 
   * - Monday: Monday
   * 
   * - Tuesday: Tuesday
   * 
   * - Wednesday: Wednesday
   * 
   * - Thursday: Thursday
   * 
   * - Friday: Friday
   * 
   * - Saturday: Saturday
   * 
   * - Sunday: Sunday
   * 
   * ### Note: The DAILY setting overrides any specified days of the week. For example, if you specify DAILY,Monday, the inspection runs daily.
   * 
   * @example
   * Monday
   */
  frequency?: string;
  inspectionItems?: string;
  /**
   * @remarks
   * The number of instances in the task.
   * 
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * 巡检测试
   */
  name?: string;
  regionId?: string;
  reportLanguage?: string;
  reportType?: string;
  /**
   * @remarks
   * The ID of the scheduled inspection configuration.
   * 
   * @example
   * 9d246af2-a0cd-4f69-857d-3785048f****
   */
  scheduledId?: string;
  /**
   * @remarks
   * The task start time, in UTC.
   * 
   * @example
   * 18:00:00Z
   */
  taskStartTime?: string;
  /**
   * @remarks
   * The inspection time range in hours. Default: 24. Valid values: 1 to 168.
   * 
   * @example
   * 24小时
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      frequency: 'Frequency',
      inspectionItems: 'InspectionItems',
      instanceCount: 'InstanceCount',
      name: 'Name',
      regionId: 'RegionId',
      reportLanguage: 'ReportLanguage',
      reportType: 'ReportType',
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
      inspectionItems: 'string',
      instanceCount: 'number',
      name: 'string',
      regionId: 'string',
      reportLanguage: 'string',
      reportType: 'string',
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
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 任务信息查询成功
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * A list of scheduled inspection tasks.
   */
  schedules?: ListScheduledTasksResponseBodySchedules[];
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
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

