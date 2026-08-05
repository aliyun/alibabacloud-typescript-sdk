// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the scheduled inspection task.
   * 
   * @example
   * Scheduled RDS instance inspection task
   */
  description?: string;
  /**
   * @remarks
   * The inspection frequency. Separate multiple values with commas (,). Default value: DAILY. Valid values:
   * * DAILY: every day.
   * * Monday: Monday.
   * * Tuesday: Tuesday.
   * * Wednesday: Wednesday.
   * * Thursday: Thursday.
   * * Friday: Friday.
   * * Saturday: Saturday.
   * * Sunday: Sunday.
   * ### Note: DAILY overrides weekly values. For example, if you specify DAILY,Monday, the backend uses DAILY as the inspection frequency.
   * 
   * @example
   * Monday
   */
  frequency?: string;
  inspectionItems?: string;
  /**
   * @remarks
   * The list of associated instance IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * rm-2ze6mk259v322****,rm-2zef3b65430j0****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The name of the scheduled inspection task. The name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * RDS Inspection
   */
  name?: string;
  regionId?: string;
  /**
   * @remarks
   * The report language. Default value: zh-CN. Valid values: zh-CN, zh-TW, ja-JP, and en-US.
   * 
   * @example
   * zh-CN
   */
  reportLanguage?: string;
  reportRegionId?: string;
  reportType?: string;
  /**
   * @remarks
   * The time to run the inspection task. Format: HH:mm:ssZ (UTC). Default value: 02:00:00Z.
   * 
   * @example
   * 02:00:00Z
   */
  startTime?: string;
  templateId?: string;
  /**
   * @remarks
   * The time range for the inspection. Default value: the last 24 hours. Valid values: 1 to 168 (up to 7 days).
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
      templateId: 'TemplateId',
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
      templateId: 'string',
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

