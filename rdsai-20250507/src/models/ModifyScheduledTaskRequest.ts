// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScheduledTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the inspection configuration.
   * 
   * @example
   * 定时RDS实例巡检任务
   */
  description?: string;
  /**
   * @remarks
   * The new inspection frequency. Separate multiple values with a comma (,). The default value is DAILY. Valid values:
   * 
   * - DAILY: Every day
   * 
   * - Monday: Every Monday
   * 
   * - Tuesday: Every Tuesday
   * 
   * - Wednesday: Every Wednesday
   * 
   * - Thursday: Every Thursday
   * 
   * - Friday: Every Friday
   * 
   * - Saturday: Every Saturday
   * 
   * - Sunday: Every Sunday
   * 
   * ### Note: `DAILY` overrides all other day-of-the-week settings. For example, if you specify `DAILY,Monday`, the system uses `DAILY` as the inspection frequency.
   * 
   * @example
   * Monday
   */
  frequency?: string;
  inspectionItems?: string;
  /**
   * @remarks
   * The new instance IDs to associate with the task. Separate multiple IDs with a comma (,).
   * 
   * @example
   * rm-2ze6mk259v322****,rm-2zef3b65430j0****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The new name of the inspection configuration.
   * 
   * @example
   * RDS巡检任务
   */
  name?: string;
  reportLanguage?: string;
  /**
   * @remarks
   * The ID of the scheduled inspection configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * 847268a4-196f-416b-aa12-bfe0c115****
   */
  scheduledId?: string;
  /**
   * @remarks
   * The new time to run the inspection task. The time must be in the `HH:mm:ssZ` format and in UTC.
   * 
   * @example
   * 02:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The inspection time range in hours. The default is 24, which means data from the last 24 hours is inspected. Valid values: 1 to 168. The maximum supported range is 7 days.
   * 
   * @example
   * 24
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      frequency: 'Frequency',
      inspectionItems: 'InspectionItems',
      instanceIds: 'InstanceIds',
      name: 'Name',
      reportLanguage: 'ReportLanguage',
      scheduledId: 'ScheduledId',
      startTime: 'StartTime',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      frequency: 'string',
      inspectionItems: 'string',
      instanceIds: 'string',
      name: 'string',
      reportLanguage: 'string',
      scheduledId: 'string',
      startTime: 'string',
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

