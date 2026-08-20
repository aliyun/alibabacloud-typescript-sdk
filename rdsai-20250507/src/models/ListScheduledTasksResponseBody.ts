// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledTasksResponseBodySchedules extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-02-04T06:51:24Z
   */
  createTime?: string;
  /**
   * @remarks
   * The inspection description.
   * 
   * @example
   * Automatically inspect production RDS instances at 2 AM every day
   */
  description?: string;
  /**
   * @remarks
   * The new inspection frequency. Separate multiple values with commas (,). Default value: DAILY. Valid values:
   * * DAILY: every day
   * * Monday: Monday
   * * Tuesday: Tuesday
   * * Wednesday: Wednesday
   * * Thursday: Thursday
   * * Friday: Friday
   * * Saturday: Saturday
   * * Sunday: Sunday
   * ### Note: DAILY overrides weekly values. For example, if you specify DAILY,Monday, the backend uses DAILY as the inspection frequency.
   * 
   * @example
   * Monday
   */
  frequency?: string;
  inspectionItems?: string;
  /**
   * @remarks
   * The number of task instances.
   * 
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * InspectionTest
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
   * The actual start time of the task.
   * 
   * @example
   * 18:00:00Z
   */
  taskStartTime?: string;
  templateId?: string;
  templateName?: string;
  /**
   * @remarks
   * The inspection time range. Default value: the last 24 hours. Valid values: 1 to 168 (up to 7 days).
   * 
   * @example
   * 24 hours
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
      templateId: 'TemplateId',
      templateName: 'TemplateName',
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
      templateId: 'string',
      templateName: 'string',
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
   * Task information queried successfully
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
   * The list of scheduled inspection tasks.
   */
  schedules?: ListScheduledTasksResponseBodySchedules[];
  /**
   * @remarks
   * The request result.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
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

