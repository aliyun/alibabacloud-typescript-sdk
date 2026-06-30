// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the scheduled inspection task.
   * 
   * @example
   * 定时RDS实例巡检任务
   */
  description?: string;
  /**
   * @remarks
   * The inspection frequency. Use commas (,) to separate multiple values. The default is DAILY. Valid values:
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
   * ### Note: DAILY overrides weekly values. For example, if you enter DAILY,Monday, the system uses DAILY as the inspection frequency.
   * 
   * @example
   * Monday
   */
  frequency?: string;
  inspectionItems?: string;
  /**
   * @remarks
   * The IDs of the instances for the task. Use commas (,) to separate multiple IDs.
   * 
   * @example
   * rm-2ze6mk259v322****,rm-2zef3b65430j0****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The name of the scheduled inspection task. The maximum length is 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * RDS巡检
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region.
   */
  regionId?: string;
  /**
   * @remarks
   * The report language. The default value is zh-CN. Supported values: zh-CN, zh-TW, ja-JP, and en-US.
   * 
   * @example
   * zh-CN
   */
  reportLanguage?: string;
  /**
   * @remarks
   * The ID of the region where the report is stored.
   */
  reportRegionId?: string;
  /**
   * @remarks
   * The type of the report.
   */
  reportType?: string;
  /**
   * @remarks
   * The execution time for the scheduled inspection task. Specify the time in the HH:mm:ssZ format (UTC time). The default is 02:00:00Z.
   * 
   * @example
   * 02:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time range of data to inspect, in hours. Valid values are from 1 to 168 (7 days). The default is 24.
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
      regionId: 'RegionId',
      reportLanguage: 'ReportLanguage',
      reportRegionId: 'ReportRegionId',
      reportType: 'ReportType',
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
      regionId: 'string',
      reportLanguage: 'string',
      reportRegionId: 'string',
      reportType: 'string',
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

